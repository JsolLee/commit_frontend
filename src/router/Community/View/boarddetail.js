import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { PeopleFill, HeartFill, Chat } from "react-bootstrap-icons";
import axios from 'axios';
import moment from 'moment';

const BoardDetail = () => {
  const [board, setBoardDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  //게시물 조회 함수
  const [hasFetched, setHasFetched] = useState(false);
  const getBoardDetail = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:9999/community/boarddetail/${id}`);
      if (response.status == 200) {
        console.log("get 성공")
        setBoardDetail(response.data);
      }
    }
    catch (error) {
      console.log("게시물 조회 실패")
    }
  }, [id, setBoardDetail]);

  //게시물 조회 함수 랜더링
  useEffect(() => {
    if (!hasFetched) {
      getBoardDetail();
      setHasFetched(true);
    }
  }, [id, hasFetched]);

  //글 수정 함수
  const boardedit = async () => {
    try {
      const response = await axios.get(`http://localhost:9999/community/boardedit/${id}`);
      console.log("글 수정 페이지 접근 성공", response.data);
    } catch (error) {
      console.error("글 수정 페이지 접근 실패", error);
    }
  };

  //글 삭제 함수
  const boarddelete = async () => {
    try {
      const response = await axios.post(`http://localhost:9999/community/boarddelete/${id}`);
      if (response.status == 200) {
        alert("게시글을 성공적으로 삭제했습니다.");
        navigate("/Community/boardlist");
      }
      console.log("게시글 삭제 성공");
    } catch (error) {
      console.log("게시글 삭제 실패");
    }
  };

  //좋아요 클릭
  const Like = async () => {
    try {
      const response = await axios.post(`http://localhost:9999/community/like/${id}/${board.membersId}`);
      if (response.status === 200) {
        alert("좋아요를 눌렀습니다!");
      }
    } catch (error) {
      console.error("좋아요 실패", error);
    }
  };

  //로그인, 비로그인 확인
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 클라이언트 세션 스토리지에서 값을 가져와 인증 상태를 확인
    const storedSession = sessionStorage.getItem('member_id'); 

    if (storedSession) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Container>
      <main className="mt-5 pt-5">
        <Container fluid className="px-4">
          <div className="text-center">
            <h1>{board.category ? board.category.toUpperCase() : ''}</h1>
          </div>
          <hr />
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/Community">
              Community
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/Community/boardlist/${board.category}`}>{board.category}</Breadcrumb.Item>
          </Breadcrumb>

          <Card className="mb-4">
            <Card.Body>
              <Form method="post">
                {/* 제목 영역 */}
                <div>
                  <Container>
                    <Row>
                      <Col>
                        <Form.Label htmlFor="title" className="form-label"
                          style={{ fontWeight: 'bold' }}>
                          작성일 : {moment(board.createDate).format('YYYY-MM-DD')}
                        </Form.Label>
                      </Col>
                      <Col className="text-end">
                        <Form.Label htmlFor="title" className="form-label"
                          style={{ fontWeight: 'bold' }}>
                          작성자: {board.nickname}
                        </Form.Label>
                      </Col>
                    </Row>
                  </Container>
                </div>

                {/*제목 영역 */}
                <InputGroup className="mb-1">
                  <InputGroup.Text style={{ width: '100px', fontWeight: 'bold' }}>제목</InputGroup.Text>
                  <Form.Control value={board.title} disabled
                    style={{ backgroundColor: '#fff', color: '#000' }} />
                </InputGroup>

                {/* 첨부 파일 영역 */}
                <InputGroup className="mb-3">
                  <Button variant="primary" style={{ width: '100px' }}>다운로드</Button>
                  <Form.Control type="text" placeholder="첨부파일.txt" disabled
                    style={{ backgroundColor: '#fff', color: '#000' }} />
                </InputGroup>

                {/* 좋아요 수, 조회수, 댓글 수 영역 */}
                <PeopleFill className="me-2" />{board.viewcount}&nbsp;
                <HeartFill style={{ color: "red" }}></HeartFill>{board.likecount}&nbsp;
                <Chat></Chat>{board.comment}
                <br></br>
                <br></br>
                {/* 내용 영역 */}
                <div className="mb-4">
                  <Card>
                    <Card.Body style={{ height: '400px' }}>
                      {board.content}
                    </Card.Body>
                  </Card>
                </div>
                <br></br>
                <br></br>
                {/* 좋아요 및 신고 버튼 */}
                <div className="position-relative">
                  <div className="position-absolute bottom-0 end-0">
                    <Button variant="primary" className="mb-2" onClick={Like}>
                      좋아요
                    </Button>&nbsp;
                    <Button variant="warning" className="mb-2">
                      신고
                    </Button>&nbsp;
                    <Button variant="success" className="mb-2">
                      스크랩
                    </Button>
                  </div>
                </div>

                {/* 수정 및 삭제 버튼 */}
                <div className="position-relative">
                  <div className="position-absolute bottom-0 start-0">

                    {/* <Link to={`/Community/boardedit/${board.id}`} style={{ color: "black", textDecoration: "none" }}>
                      <Button onClick={boardedit} variant="outline-primary" className="mb-2">
                        수정
                      </Button>&nbsp;
                    </Link>

                    <Button onClick={boarddelete} variant="danger" className="mb-2">
                      삭제
                    </Button> */}

                    {isAuthenticated && (
                      <>
                        <Link to={`/Community/boardedit/${board.id}`} style={{ color: "black", textDecoration: "none" }}>
                          <Button onClick={boardedit} variant="outline-primary" className="mb-2">
                            수정
                          </Button>&nbsp;
                        </Link>

                        <Button onClick={boarddelete} variant="danger" className="mb-2">
                          삭제
                        </Button>
                      </>
                    )}


                  </div>

                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </Container>

  );
};

export default BoardDetail;
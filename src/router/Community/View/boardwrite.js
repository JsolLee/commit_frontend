import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Quill 스타일을 불러옴
import FileUpload from './fileupload.js';

const BoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('newstart');
  const [showAlert, setShowAlert] = useState(false);
  const [isContentEmpty, setIsContentEmpty] = useState(false); // 추가

  const navigate = useNavigate();

  const boardTitle = (e) => {
    setTitle(e.target.value);
  };

  const boardContent = (e) => {
    setContent(e.target.value);
  };

  const category = (selected) => {
    setSelectedCategory(selected);
  };

  //세션 설정
  // const getMemberdsId = sessionStorage.getItem('members_id'); 
  // const boardWrite = async () => {
  //   // content 값이 null 또는 빈 문자열인 경우 alert를 띄우고 함수 종료
  //   if (!content || content.trim() === '') {
  //     setIsContentEmpty(true);
  //     alert('내용을 입력해주세요.');
  //     return;
  //   }

  //   try {
  //     console.log(getMemberdsId)
  //     const response = await fetch('http://localhost:9999/community/boardwrite', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         title,
  //         content,
  //         category: selectedCategory,
  //         memberdsId: getMemberdsId
  //       }),
  //     });
  
  //     if (response.ok) {
  //       // 성공적으로 글이 등록되었을 때의 처리
  //       setShowAlert(true);
  //       navigate("/Community/boardlist");
  //     } else {
  //       // 실패했을 때의 처리
  //       console.error('글 등록 실패');
  //     }
  //   } catch (error) {
  //     console.error('에러 발생', error);
  //   }
  // };

  const boardWrite = async () => {
    // content 값이 null 또는 빈 문자열인 경우 alert를 띄우고 함수 종료
    if (!content || content.trim() === '') {
      setIsContentEmpty(true);
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:9999/community/boardwrite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          category: selectedCategory,
        }),
      });
  
      if (response.ok) {
        // 성공적으로 글이 등록되었을 때의 처리
        setShowAlert(true);
        navigate("/Community/boardlist");
      } else {
        // 실패했을 때의 처리
        console.error('글 등록 실패');
      }
    } catch (error) {
      console.error('에러 발생', error);
    }
  };

  // content 상태값이 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    setIsContentEmpty(false); // content가 변경될 때마다 alert 상태를 초기화
  }, [content]);

  return (
    <Container>
      <main className="mt-5 pt-5">
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1>글 등록</h1>
          </Col>
        </Row>
        <hr />
        <br></br><br></br>
        <Form>
          <InputGroup>
            <InputGroup.Text style={{ width: '100px', fontWeight: 'bold' }}>카테고리</InputGroup.Text>
            <Form.Select value={selectedCategory} onChange={(e) => category(e.target.value)}>
              <option value="newstart">이직/신입</option>
              <option value="resume">자소서</option>
              <option value="review">합격자조언</option>
              <option value="recruit">구인/구직</option>
              <option value="interview">면접</option>
            </Form.Select><br></br>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text style={{ width: '100px', fontWeight: 'bold' }}>제목</InputGroup.Text>
            <Form.Control type="text" value={title} onChange={boardTitle} />
          </InputGroup>

          <FileUpload />

          <Form.Group className="mb-4">
            {/* <ReactQuill
              style={{ height: '400px' }}
              theme="snow" value={content} onChange={setContent}/> */}
              <Form.Control
              as="textarea"
              style={{ height: '400px' }}
              value={content} onChange={boardContent}/>
          </Form.Group><br></br>

          <Row className="justify-content-start mt-3">
            <Col>
              {showAlert && (
                <div className="alert alert-success mr-3" role="alert">
                  등록이 완료되었습니다!
                </div>
              )}

              <div className="d-flex justify-content-end">
                
                <Link to='/community/boardlist'>
                  <Button variant="primary" onClick={boardWrite} disabled={isContentEmpty}>
                    등록
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>

        </Form>
      </main>
    </Container>
  );
};

export default BoardWrite;
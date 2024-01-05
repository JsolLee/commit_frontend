import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Dropdown, Container, Pagination } from 'react-bootstrap';
import { PeopleFill, HeartFill, Chat } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import './boardlist.css'
import axios from 'axios';
import moment from 'moment';

//상단 사진 부분
const CommunityHeader = () => (
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-white fw-bold mb-4 animated slideInDown">Community</h1>
        </div>
    </div>
);

// 리엑트와 스프링부트 연결을 위한 코드
const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [page, setPage] = useState(1); 

    const getBoardList = useCallback(async (pageNumber) => {
        try {
            console.log(pageNumber)
            const response = await axios.get(`http://localhost:9999/Community/boardlist?page=${pageNumber}`);
            console.log(response.data.content)
            setBoardList(response.data.content);
        } catch (error) {
            console.error('에러 메세지', error);
        }
    }, [page]);
    
    useEffect(() => {
        getBoardList(page);
    }, [page, getBoardList]);
    
    // 페이지 변경 처리 함수
    const pageChange = (pageNumber) => {
        setPage(pageNumber);
    };


//실제 렌더링 되는 부분
return (
    <>
    <CommunityHeader />            
        <Container>

        <div className="d-flex justify-content-between align-items-center mb-3">                

            <Dropdown.Menu>
                <Dropdown.Item eventKey="전체글">전체글</Dropdown.Item>
                <Dropdown.Item eventKey="이직/신입">이직/신입</Dropdown.Item>
                <Dropdown.Item eventKey="자소서">자소서</Dropdown.Item>
                <Dropdown.Item eventKey="합격자조언">합격자조언</Dropdown.Item>
                <Dropdown.Item eventKey="구인/구직">구인/구직</Dropdown.Item>
            </Dropdown.Menu>

            <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="검색어를 입력하세요"
                        />
                        <Button variant="primary" >검색</Button>
            </InputGroup>
        </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th className="text-center" style={{ fontSize: '25px' }}>번호</th>
                    <th className="text-center" style={{ fontSize: '25px' }}>제목</th>
                    <th className="text-center" style={{ fontSize: '25px' }}>작성자</th>
                    <th className="text-center" style={{ fontSize: '25px' }}>작성일</th>
                </tr>
                </thead>

                <tbody>
                {Array.isArray(boardList) && boardList.map((boardList) => (
                <tr key={boardList.id}>
                    <td className="text-center" style={{ fontSize: '20px' }}>{boardList.id}</td>
                    <td className="text-center" style={{ fontSize: '20px' }}>
                        <Link to={`/Community/boarddetail/${boardList.id}`} style={{ color: "black", textDecoration: "none" }}>
                            {boardList.title}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <PeopleFill className="me-2" />{boardList.viewcount}&nbsp;
                            <HeartFill style={{ color: "red" }}></HeartFill>{boardList.likecount}&nbsp;
                            <Chat></Chat>{boardList.comments}
                        </Link>
                    </td>
                    <td className="text-center" style={{ fontSize: '20px' }}>{boardList.membersId}</td>
                    <td className="text-center" style={{ fontSize: '20px' }}>{moment(boardList.createDate).format('YYYY-MM-DD')}</td>
                </tr>
            ))}
        </tbody>
    </Table>

    <div className="d-flex justify-content-end mt-3">
        <Link to="/Community/boardwrite">
            <Button variant="primary">글쓰기</Button>
        </Link>
    </div>            
    </Container>

    <div className="d-flex justify-content-center">
        <Pagination>
            <Pagination.Prev onClick={() => pageChange(page - 1)} />
            <Pagination.Item onClick={() => pageChange(1)}>{1}</Pagination.Item>
            <Pagination.Item onClick={() => pageChange(2)}>{2}</Pagination.Item>
            <Pagination.Item onClick={() => pageChange(3)}>{3}</Pagination.Item>
            <Pagination.Item onClick={() => pageChange(4)}>{4}</Pagination.Item>
            <Pagination.Item onClick={() => pageChange(5)}>{5}</Pagination.Item>
            <Pagination.Next onClick={() => pageChange(page + 1)} />
        </Pagination>
    </div>
</>
);
}

export default BoardList;
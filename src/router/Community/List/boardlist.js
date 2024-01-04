import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Dropdown, Container } from 'react-bootstrap';
import { PeopleFill, HeartFill, Chat } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import './boardlist.css'
import axios from 'axios';

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
    // const [selectedCategory, setSelectedCategory] = useState('전체글');
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        fetchBoardList();
    }, []);

    const fetchBoardList = async () => {
        try {
            const response = await axios.get('http://localhost:9999/Community/boardlist');
            setBoardList(response.data);
        } catch (error) {
            console.error('Error fetching board list:', error);
        }
    }

//실제 렌더링 되는 부분
return (
    <>
    <CommunityHeader />            
        <Container>
        {/* 
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/Community">
              Community
            </Breadcrumb.Item>
            <Breadcrumb.Item>구인/구직</Breadcrumb.Item>
        </Breadcrumb> */}

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
                {boardList.map((board) => (
                <tr key={board.id}>
                    <td className="text-center" style={{ fontSize: '20px' }}>{board.id}</td>
                    <td className="text-center" style={{ fontSize: '20px' }}>
                        <Link to={`/Community/boarddetail/${board.id}`} style={{ color: "black", textDecoration: "none" }}>
                            {board.title}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <PeopleFill className="me-2" />{board.viewcount}&nbsp;
                            <HeartFill style={{ color: "red" }}></HeartFill>{board.likecount}&nbsp;
                            <Chat></Chat>{board.comments}
                        </Link>
                    </td>
                    <td className="text-center" style={{ fontSize: '20px' }}>{board.membersId}</td>
                    <td className="text-center" style={{ fontSize: '20px' }}>{board.createDate}</td>
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
</>
);
}

export default BoardList;
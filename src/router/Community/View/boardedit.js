import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button,InputGroup } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Quill 스타일을 불러옴
import FileUpload from './fileupload.js';
import axios from 'axios';

const BoardEdit = () => {
  
  const navigate = useNavigate();
  // const [board, setBoardEdit] = useState({});
  const { id } = useParams();

  // 게시판 제목, 내용, 카테고리
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('newstart');

  // 선택한 게시물의 원본 내용 GET
  useEffect(() => {
    axios.get(`http://localhost:9999/community/boardedit/${id}`).then((response) => {
      const { title, content, category } = response.data;
      // setBoardEdit(response.data);
      setTitle(title);
      setContent(content);
      setCategory(category);
    });
  }, [id]);
  
  //글 제목 수정
  const changeTitle = (event) => {
		setTitle(event.target.value);
	}

  //글 내용 수정
	const changeContent = (content) => {
		setContent(content);
	}

  //글 카테고리 수정
  const changeCategory = (selected) => {
    setCategory(selected);
  };
  
  //글 수정 요청
  // const boardedit = async () => {
  //   const req = {
	// 		title: title, 
	// 		content: content,
  //     category: category
	// 	}

  //   try {
  //     const response = await axios.post(`http://localhost:9999/Community/boardedit/${id}`, req);
  //     if (response.status == 200) {
  //       alert("게시글을 성공적으로 수정했습니다.");
  //       navigate("/Community/boardlist");
  //     }
  //     console.log("글 수정 완료");
  //   } catch (error) {
  //     console.error("글 수정 실패", error);
  //   }
  // };


//글 수정 요청
const boardedit = async () => {
  // content 값이 null 또는 빈 문자열인 경우 alert를 띄우고 함수 종료
  if (!content || content.trim() === '') {
    alert('내용을 입력해주세요.');
    return;
  }

  try {
    const response = await fetch(`http://localhost:9999/community/boardedit/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        category,
      }),
    });

    if (response.ok) {
      // 성공적으로 글이 수정되었을 때의 처리
      alert("게시글을 성공적으로 수정했습니다.");
      navigate("/Community/boardlist");
    } else {
      // 실패했을 때의 처리
      console.error('글 수정 실패');
    }
  } catch (error) {
    console.error('에러 발생', error);
  }
};

  return (
    <Container>
      <main className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1>글 수정</h1>
        </Col>
      </Row>
      <hr />
      <br></br><br></br>
      <Form>
          <InputGroup>
            <InputGroup.Text style={{ width: '100px', fontWeight: 'bold' }}>카테고리</InputGroup.Text>
            <Form.Select onChange={changeCategory} value={category} >
              <option value="newstart">이직/신입</option>
              <option value="resume">자소서</option>
              <option value="review">합격자조언</option>
              <option value="recruit">구인/구직</option>
              <option value="interview">면접</option>
            </Form.Select><br></br>
          </InputGroup> 
            <InputGroup>
              <InputGroup.Text style={{ width: '100px', fontWeight: 'bold' }}>제목</InputGroup.Text>
              <Form.Control type="text" onChange={changeTitle} value={title} />
            </InputGroup>

        <FileUpload />

        <Form.Group className="mb-4">
          {/* <ReactQuill 
            style = {{ height: '400px'}}
            theme="snow" onChange={changeContent} value={content} /> */}
          <Form.Control
            as="textarea"
            style={{ height: '400px' }}
            value={content}
            onChange={(e) => changeContent(e.target.value)}
          />
        </Form.Group><br/>

        <Row className="justify-content-start">
          <Col>
             <div className="d-flex justify-content-end mt-3">
                    <Link to = '/Community/boardlist'>
                        <Button variant="primary" onClick={boardedit}>
                            수정완료
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

export default BoardEdit;

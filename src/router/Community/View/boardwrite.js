import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill 스타일을 불러옴
import FileUpload from './fileupload.js';

const BoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체글');
  const [showAlert, setShowAlert] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (selected) => {
    setSelectedCategory(selected);
  };

  const handleUpdate = () => {
    setShowAlert(true);

  };

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
            <Form.Select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
              <option value="구인/구직">구인/구직</option>
              <option value="이직/신입">이직/신입</option>
              <option value="면접">면접</option>
              <option value="자소서">자소서</option>
              <option value="합격자조언">합격자조언</option>
            </Form.Select><br></br>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text style={{ width: '100px', fontWeight: 'bold' }}>제목</InputGroup.Text>
            <Form.Control type="text" value={title} onChange={handleTitleChange} />
          </InputGroup>

          <FileUpload />

          <Form.Group className="mb-4">
            <ReactQuill
              style={{ height: '400px' }}
              theme="snow" value={content} onChange={setContent} />
          </Form.Group><br></br>

          <Row className="justify-content-start mt-3">
            <Col>
              {showAlert && (
                <div className="alert alert-success mr-3" role="alert">
                  등록이 완료되었습니다!
                </div>
              )}

              <div className="d-flex justify-content-end">
                <Link to='/Community'>
                  <Button variant="primary" onClick={handleUpdate}>
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
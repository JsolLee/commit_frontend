import React from 'react';
import { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Edit.css";

function User_edit() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      navigate('/Mypage');
    }
  };
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const checkPw = (e) => {
    if(pw1 !== pw2){
      alert("비밀번호가 일치하지 않습니다.");
     e.preventDefault();
    }
  }
  return (
      <div className="password-check-wrap">
        <Form className='password-check-form' noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className='text-center'>비밀번호 변경</h3>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupBeforeChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>비밀번호 입력</Form.Label>
            <Form.Control type="password" className='form-control pw-input' placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPw1(e.target.value);
            }} required />
          </Form.Group>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>비밀번호 재입력</Form.Label>
            <Form.Control type="password" className='form-control pw-input' placeholder="비밀번호를 한 번 더 입력해주세요."
            onChange={(e) => {
              setPw2(e.target.value);
            }} required />
          </Form.Group>

          <div className="col-auto user-check-btn">
            <Button className="mb-3" variant="primary" type="submit" onClick={checkPw}>
              비밀번호 변경
            </Button>
          </div>
        </Form>
      </div>
  );
}

export default User_edit;
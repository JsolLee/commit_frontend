import React from 'react';
import { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Edit.css";

const User_check = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const userEmail = location.state?.userEmail || 'null';
  // const userNickname = location.state?.userNickname || 'null';
  const action = location.state?.action || 'unknown';

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);

      // action에 따라 다른 페이지로 이동
      if(action === 'name-edit') {
        navigate('/Mypage/Name_edit');
      }else if(action === 'user-edit'){
        navigate('/Mypage/User_edit');
      }else if(action ==='user-out'){
        navigate('/Mypage/User_out');
      }
    }
  };
  return (
      <div className="password-check-wrap">
        <Form className='password-check-form' noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className='text-center'>비밀번호 확인</h3>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupBeforeChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>이메일</Form.Label>
            <Form.Control type="text" className='form-control-plaintext' placeholder={props.userEmail} readOnly />
          </Form.Group>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>비밀번호</Form.Label>
            <Form.Control type="password" className='form-control pw-input' placeholder="비밀번호를 입력해주세요." required />
          </Form.Group>

          <div className="col-auto user-check-btn">
            <Button className="mb-3" variant="primary" type="submit">
              비밀번호 확인
            </Button>
          </div>
        </Form>
      </div>
  );
}

export default User_check;
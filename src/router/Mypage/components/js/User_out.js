import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Edit.css";

function User_out(props) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/Mypage');
  }

  const goOut = () => {
    
    navigate('/');
  }

  return (
      <div className="password-check-wrap">
        <Form className='password-check-form'>
          <h3 className='text-center'>회원 탈퇴</h3>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>닉네임</Form.Label>
            <Form.Control type="text" className='form-control-plaintext' value={props.userNickname} readOnly />
          </Form.Group>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>이메일</Form.Label>
            <Form.Control type="text" className='form-control-plaintext' value={props.userEmail} readOnly />
          </Form.Group>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>아이디</Form.Label>
            <Form.Control type="text" className='form-control-plaintext' value={props.userId} readOnly />
          </Form.Group>
          <br/>
          <div className="d-flex justify-content-end">
            <Button className="mb-3" variant="primary" type="submit" onClick={goBack}>
              돌아가기
            </Button> &nbsp;
            <Button className="mb-3" variant="secondary" type="submit" onClick={goOut}>
              탈퇴
            </Button>
          </div>
        </Form>
      </div>
  );
}

export default User_out;
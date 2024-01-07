import { React, useRef } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Edit.css";

const User_check = (props) => {
  const formRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  // const userEmail = location.state?.userEmail || 'null';
  // const userNickname = location.state?.userNickname || 'null';
  const action = location.state?.action || 'unknown';

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/userCheck', { // 비밀번호 확인 요청
        memberId: props.userId,
        memberPw: formRef.current.memberPw.value
      })
      .then(() => {
        // action에 따라 다른 페이지로 이동
        if (action === 'name-edit') {
          navigate('/Mypage/Name_edit');
        } else if (action === 'user-edit') {
          navigate('/Mypage/User_edit');
        } else if (action === 'user-out') {
          navigate('/Mypage/User_out');
        }
      })
      .catch(() => {
        alert("비밀번호를 올바르게 입력해주세요.");
      });
  };
  return (
    <div className="password-check-wrap">
      <Form className='password-check-form' ref={formRef} onSubmit={handleSubmit}>
        <h3 className='text-center'>비밀번호 확인</h3>
        <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupBeforeChange">
          <Form.Label className='col-sm-2 col-form-label edit-content'>아이디</Form.Label>
          <Form.Control type="text" className='form-control-plaintext' name='memberId' placeholder={props.userId} readOnly />
        </Form.Group>
        <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
          <Form.Label className='col-sm-2 col-form-label edit-content'>비밀번호</Form.Label>
          <Form.Control type="password" className='form-control pw-input' name='memberPw' placeholder="비밀번호를 입력해주세요." required />
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
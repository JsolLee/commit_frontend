import { React, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Edit.css";

function User_edit(props) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (formRef.current.changePw.value !== formRef.current.checkChangePw.value) {
      alert("비밀번호가 일치하지 않습니다.");
    }  else {
        // PUT : Update data
        axios.put('/pwEdit', {
          memberId: props.userId,
          memberPw: props.userPw,
          changePw: formRef.current.changePw.value
        })
          .then((res) => {
            alert(res.data);
            if(res.data != "기존의 비밀번호와 일치합니다."){
              document.location.href = "/Mypage";
            }
          })
          .catch(() => {
            alert("비밀번호를 다시 확인해주세요.");
          })
      }
  };
  return (
    <div className="password-check-wrap">
      <Form className='password-check-form' ref={formRef} onSubmit={handleSubmit}>
        <h3 className='text-center'>비밀번호 변경</h3>
        <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupBeforeChange">
          <Form.Label className='col-sm-2 col-form-label edit-content'>비밀번호 입력</Form.Label>
          <Form.Control type="password" className='form-control pw-input' name='changePw' placeholder="비밀번호를 입력해주세요."
            required />
        </Form.Group>
        <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
          <Form.Label className='col-sm-2 col-form-label edit-content'>비밀번호 재입력</Form.Label>
          <Form.Control type="password" className='form-control pw-input' name='checkChangePw' placeholder="비밀번호를 한 번 더 입력해주세요."
            required />
        </Form.Group>

        <div className="col-auto user-check-btn">
          <Button className="mb-3" variant="primary" type="submit">
            비밀번호 변경
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default User_edit;
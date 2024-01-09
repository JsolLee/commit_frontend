import { React, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Edit.css";

const Name_edit = (props) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current.newName.value == props.userNickname) {
      alert("기존의 닉네임과 같습니다.");
    } else {
      // PUT : Update data
      axios.put('/nameEdit', {
        newName: formRef.current.newName.value,
        nickName: props.userNickname
      })
        .then(() => {
          document.location.href = "/Mypage";
        })
        .catch(() => {
          alert("새로운 닉네임을 올바르게 입력해주세요.");
        })
    }
  };
  return (
    <div className="password-check-wrap">
      <Form className='password-check-form' ref={formRef} onSubmit={handleSubmit}>
        <h3 className='text-center'>닉네임 변경</h3>
        <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupBeforeChange">
          <Form.Label className='col-sm-2 col-form-label edit-content'>현재 닉네임</Form.Label>
          <Form.Control type="text" className='form-control pw-input' placeholder={props.userNickname} disabled />
        </Form.Group>
        <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
          <Form.Label className='col-sm-2 col-form-label edit-content'>닉네임 변경</Form.Label>
          <Form.Control type="text" className='form-control pw-input' name='newName' placeholder="변경할 닉네임을 입력해주세요." required />
        </Form.Group>

        <div className="col-auto user-check-btn">
          <Button className="mb-3" variant="primary" type="submit">
            닉네임 변경
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Name_edit;
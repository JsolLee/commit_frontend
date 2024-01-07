import React from 'react';
import { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Edit.css";

const Name_edit = (props) => {
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
  return (
      <div className="password-check-wrap">
        <Form className='password-check-form' noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className='text-center'>닉네임 변경</h3>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupBeforeChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>현재 닉네임</Form.Label>
            <Form.Control type="text" className='form-control pw-input' placeholder={props.userNickname} disabled />
          </Form.Group>
          <Form.Group as={Row} className="mb-3 me-0" controlId="formGroupAfterChange">
            <Form.Label className='col-sm-2 col-form-label edit-content'>닉네임 변경</Form.Label>
            <Form.Control type="text" className='form-control pw-input' placeholder="변경할 닉네임을 입력해주세요." required />
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
import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import './member.css';
import axios from 'axios';

function Join() {
  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate(); 

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!memberId || !memberPw || !email || !nickName) {
      alert("모든 필드를 채워주세요.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post('/join', {
        memberId : memberId,
        memberPw : memberPw,
        email : email,
        nickName : nickName
      });
      if(response.status === 200) {
        navigate('/login');
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    
  };
  return (
    <div className="Join member">
      <Form className='join' onSubmit={handleSubmit} method='POST' action='/join'>
        <h1 className='text-center'>회원가입</h1>
        <br />
        <Form.Group controlId="formGroupId">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" placeholder="아이디를 입력하세요." onChange={e => setMemberId(e.target.value)} required/>
          <Form.Control.Feedback type="invalid">
            아이디를 입력해주세요.
          </Form.Control.Feedback>        
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요." onChange={e => setMemberPw(e.target.value)} required/>
          <Form.Control.Feedback type="invalid">
            비밀번호를 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력하세요." onChange={e => setEmail(e.target.value)} required/>
          <Form.Control.Feedback type="invalid">
            이메일을 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicNickName">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" placeholder="닉네임을 입력하세요." onChange={e => setNickName(e.target.value)} required/>
          <Form.Control.Feedback type="invalid">
            닉네임을 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </Form>
      <br />
    </div>
  );
}

export default Join;

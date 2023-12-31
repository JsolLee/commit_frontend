import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useCookies } from 'react-cookie';
// import moment from 'moment';

function Login() {
  const formRef = useRef();
  // const [cookies, setCookie] = useCookies(['id']);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/Login', { // 로그인 요청
        memberId: formRef.current.memberId.value,
        memberPw: formRef.current.memberPw.value
      })
      .then((res) => {
        // moment는 날짜구하는 라이브러리 이며 1분후를 나타내고 expires의 타입이 date라서 마지막메소드로 치환해준다
        // const expires = moment().add('20', 'm').toDate();
        // setCookie('id', res.data.memberId, { expires }); // 쿠키에 아이디 저장
        sessionStorage.setItem("member_id", res.data.memberId);
        sessionStorage.setItem("nick_name", res.data.nickName);
        sessionStorage.setItem("members_id", res.data.id)
        document.location.href = "/";
      })
      .catch((err) => {
        // alert("아이디 또는 비밀번호를 올바르게 입력해주세요.");
        alert(err.response.data);
      });
  };
  return (
    <div className="Login member">
      <Form className='login' validated={false} ref={formRef} onSubmit={handleSubmit}>
        <h1 className='text-center'>로그인</h1>
        <br />
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" name='memberId' placeholder="아이디를 입력해주세요." required />
          <Form.Control.Feedback type="invalid">
            아이디를 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" name='memberPw' placeholder="비밀번호를 입력해주세요." required />
          <Form.Control.Feedback type="invalid">
            비밀번호를 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Button className="mb-3" variant="primary" type="submit">
          로그인
        </Button>
        <Form.Group className='text-center link'>
          <Link to='/join'> 회원가입 | </Link>
          <Link to='/findid'> 아이디 찾기 | </Link>
          <Link to='/findpw'> 비밀번호 찾기 </Link>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mypage.css";

const My_activity = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [radioId, setRadioId] = useState('my-content');

  const radios = [
    { name: '내가 쓴 글', value: '1', id: 'my-content'},
    { name: '내가 쓴 댓글', value: '2', id: 'my-comment'},
  ];

  const [myContent, setMyContent] = useState([
    { title: '' }, // 커뮤니티 제목
    { boardId: 0 } // 커뮤니티 아이디 ,상세 페이지 url
  ]);

  const [myComment, setMyComment] = useState([
    { id: '' },
    { title: '' }, // 뉴스 제목
    { newsId: 0 } // 상세 페이지 url
  ]);

  useEffect(() => {
    // 내가 쓴 글
    axios.get('/myCommunity')
    .then(res => {
      // board.title 값들을 추출하여 새 배열로 만들기
      const content = res.data.map(boardContent => ({
        title: boardContent.title,
        boardId: boardContent.id
      }))
      setMyContent(content);
    })
    .catch(err => console.log(err))

    // 뉴스 댓글
    axios.get('/myComment') 
      .then(res => {
        const comment = res.data.map(newsComment => ({
          id: newsComment.id,
          title: newsComment.news.title,
          content: newsComment.content,
          newsId: newsComment.newsId
        }))
        setMyComment(comment);
      })
      .catch(err => console.log(err))
  }, [])

  return (

      <div className="activity-main-wrap">
        {/* 나의 활동 카테고리 버튼 */}
        <div role="group" aria-label="Basic radio toggle button group" className="btn-group">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={radio.id}
                type="radio"
                variant="outline-primary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={() => {
                  setRadioId(radio.id);
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>

        <button type="button" className="delete btn btn-outline-danger">삭제</button>

        {/* 내가 쓴 글 목록 */}
        <div className={`${radioId === 'my-content' ? `activity-content-list` : 'activity-content-list group-hidden'}`}>
          <ul className="list-group" id="group-content">
            <li className="list-group-item list-group-top">
              <label className="list-title">제목</label>
            </li>
            <Form>
              <li className="rounded-bottom">
                {myContent.map((type) => (
                  <li key={`default-${type}`} className="list-group-item">
                    <Form.Check
                      className="form-check-label"
                      type={`checkbox`}
                      id={`my-content${type.boardId}`}
                      label={<Link to={`/community/boarddetail/${type.boardId}`}>{`${type.title}`}</Link>}
                      />
                  </li>
                ))}
              </li>
            </Form>
          </ul>
        </div>

        {/* 내가 쓴 댓글 목록 */}
        <div className={`${radioId === 'my-comment' ? `activity-comment-list` : 'activity-comment-list group-hidden'}`}>
          <ul className="list-group" id="group-news-comment">
            <li className="list-group-item list-group-top">
              <label className="list-title">제목</label>
            </li>
            <Form>
              <li className="rounded-bottom">
                {myComment.map((type) => (
                  <li key={`default-${type}`} className="list-group-item">
                    <Form.Check
                      className="form-check-label"
                      type={`checkbox`}
                      id={`my-comment${type.id}`}
                      label={<Link to={`/news/article/${type.newsId}`}>{`${type.content} ( ${type.title})`}</Link>}
                      />
                  </li>
                ))}
              </li>
            </Form>
          </ul>
        </div>
      </div>

  );
}

export default My_activity;
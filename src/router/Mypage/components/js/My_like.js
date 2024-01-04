import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mypage.css";

const My_like = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [radioId, setRadioId] = useState('like-news');

  const radios = [
    { name: '좋아요 한 뉴스', value: '1', id: 'like-news' },
    { name: '좋아요 한 커뮤니티 글', value: '2', id: 'like-community' }
  ];

  const myNews = ['내가 좋아하는 뉴스1', '내가 좋아하는 뉴스2', '내가 좋아하는 뉴스3'];
  const myCommunity = ['내가 좋아하는 커뮤니티 글1', '내가 좋아하는 커뮤니티 글2', '내가 좋아하는 커뮤니티 글3'];


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

      {/* 내가 좋아하는 뉴스 목록 */}
      <div className={`${radioId === 'like-news' ? `like-news-list` : 'like-news-list group-hidden'}`}>
        <ul className="list-group" id="like-news">
          <li className="list-group-item list-group-top">
            <label className="list-title">제목</label>
          </li>
          <Form>
            <li className="rounded-bottom">
              {myNews.map((type, idx) => (
                <li key={`default-${type}`} className="list-group-item">
                  <Form.Check
                    className="form-check-label"
                    type={`checkbox`}
                    id={`like-news${idx}`}
                    label={<Link to={`/Mypage`}>{`${type}`}</Link>}
                  />
                </li>
              ))}
            </li>
          </Form>
        </ul>
      </div>

      {/* 내가 좋아하는 커뮤니티 글 목록 */}
      <div className={`${radioId === 'like-community' ? `like-community-list` : 'like-community-list group-hidden'}`}>
        <ul className="list-group" id="like-community">
          <li className="list-group-item list-group-top">
            <label className="list-title">제목</label>
          </li>
          <Form>
            <li className="rounded-bottom">
              {myCommunity.map((type, idx) => (
                <li key={`default-${type}`} className="list-group-item">
                  <Form.Check
                    className="form-check-label"
                    type={`checkbox`}
                    id={`like-community${idx}`}
                    label={<Link to={`/Mypage`}>{`${type}`}</Link>}
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

export default My_like;
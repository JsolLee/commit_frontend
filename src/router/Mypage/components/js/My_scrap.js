import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mypage.css";

const My_scrap = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [radioId, setRadioId] = useState('news');

  const radios = [
    { name: '뉴스', value: '1', id: 'news' },
    { name: '채용 공고', value: '2', id: 'job' },
    { name: '커뮤니티', value: '3', id: 'community' }
  ];

  const myNews = ['스크랩 뉴스1', '스크랩 뉴스2', '스크랩 뉴스3'];
  const myJob = ['스크랩 채용 공고1', '스크랩 채용 공고2', '스크랩 채용 공고3'];
  const myCommunity = ['스크랩 글1', '스크랩 글2', '스크랩 글3'];


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

      {/* 뉴스 목록 */}
      <div className={`${radioId === 'news' ? `scrap-news-list` : 'scrap-news-list group-hidden'}`}>
        <ul className="list-group" id="group-news">
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
                    id={`my-news${idx}`}
                    label={<Link to={`/Mypage`}>{`${type}`}</Link>}
                  />
                </li>
              ))}
            </li>
          </Form>
        </ul>
      </div>
      
      {/* 채용 목록 */}
      <div className={`${radioId === 'job' ? `scrap-job-list` : 'scrap-job-list group-hidden'}`}>
        <ul className="list-group" id="group-job">
          <li className="list-group-item list-group-top">
            <label className="list-title">제목</label>
          </li>
          <Form>
            <li className="rounded-bottom">
              {myJob.map((type, idx) => (
                <li key={`default-${type}`} className="list-group-item">
                  <Form.Check
                    className="form-check-label"
                    type={`checkbox`}
                    id={`my-job${idx}`}
                    label={<Link to={`/Mypage`}>{`${type}`}</Link>}

                  />
                </li>
              ))}
            </li>
          </Form>
        </ul>
      </div>

      {/* 스크랩글 목록 */}
      <div className={`${radioId === 'community' ? `scrap-community-list` : 'scrap-community-list group-hidden'}`}>
        <ul className="list-group" id="group-community">
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
                    id={`my-community${idx}`}
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

export default My_scrap;
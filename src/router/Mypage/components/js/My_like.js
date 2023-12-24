import React from "react";
import { useState } from 'react';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mypage.css";

const My_like = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [radioId, setRadioId] = useState('like-content');

  const radios = [
    { name: '좋아요 한 글', value: '1', id: 'like-content'},
    { name: '좋아요 한 댓글', value: '2', id: 'like-comment'},
    { name: '관심 기업', value: '3', id: 'like-company'}
  ];

  const myContent = ['내가 좋아하는 글1', '내가 좋아하는 글2', '내가 좋아하는 글3'];
  const myComment = ['내가 좋아하는 댓글1', '내가 좋아하는 댓글2', '내가 좋아하는 댓글3'];
  const myCompany = ['관심 기업1', '관심 기업2', '관심 기업3'];


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

        <button type="button" className="btn btn-outline-danger">삭제</button>

        {/* 내가 좋아하는 글 목록 */}
        <div className={`${radioId === 'like-content' ? `activity-content-list` : 'activity-content-list group-hidden'}`}>
          <ul className="list-group" id="like-content">
            <li className="list-group-item list-group-top">
              <label className="list-title">제목</label>
            </li>
            <Form>
              <li className="rounded-bottom">
                {myContent.map((type, idx) => (
                  <li key={`default-${type}`} className="list-group-item">
                    <Form.Check
                      className="form-check-label"
                      type={`checkbox`}
                      id={`like-content${idx}`}
                      label={`${type}`}
                    />
                  </li>
                ))}
              </li>
            </Form>
          </ul>
        </div>

        {/* 내가 좋아하는 댓글 목록 */}
        <div className={`${radioId === 'like-comment' ? `activity-comment-list` : 'activity-comment-list group-hidden'}`}>
          <ul className="list-group" id="like-comment">
            <li className="list-group-item list-group-top">
              <label className="list-title">제목</label>
            </li>
            <Form>
              <li className="rounded-bottom">
                {myComment.map((type, idx) => (
                  <li key={`default-${type}`} className="list-group-item">
                    <Form.Check
                      className="form-check-label"
                      type={`checkbox`}
                      id={`like-comment${idx}`}
                      label={`${type}`}
                    />
                  </li>
                ))}
              </li>
            </Form>
          </ul>
        </div>

        {/* 관심기업 목록 */}
        <div className={`${radioId === 'like-company' ? `activity-comment-list` : 'activity-comment-list group-hidden'}`}>
          <ul className="list-group" id="like-company">
            <li className="list-group-item list-group-top">
              <label className="list-title">제목</label>
            </li>
            <Form>
              <li className="rounded-bottom">
                {myCompany.map((type,idx) => (
                  <li key={`default-${type}`} className="list-group-item">
                    <Form.Check
                      className="form-check-label"
                      type={`checkbox`}
                      id={`like-company${idx}`}
                      label={`${type}`}
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
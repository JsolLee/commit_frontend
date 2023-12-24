import React from "react";
import { useState } from 'react';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mypage.css";

const My_activity = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [radioId, setRadioId] = useState('my-content');

  const radios = [
    { name: '내가 쓴 글', value: '1', id: 'my-content'},
    { name: '내가 쓴 댓글', value: '2', id: 'my-comment'}
  ];

  const myContent = ['내가 쓴 글1', '내가 쓴 글2', '내가 쓴 글3'];
  const myComment = ['내가 쓴 댓글1', '내가 쓴 댓글2', '내가 쓴 댓글3'];


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

        {/* 내가 쓴 글 목록 */}
        <div className={`${radioId === 'my-content' ? `activity-content-list` : 'activity-content-list group-hidden'}`}>
          <ul className="list-group" id="group-content">
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
                      id={`my-content${idx}`}
                      label={`${type}`}
                    />
                  </li>
                ))}
              </li>
            </Form>
          </ul>
        </div>

        {/* 내가 쓴 댓글 목록 */}
        <div className={`${radioId === 'my-comment' ? `activity-comment-list` : 'activity-comment-list group-hidden'}`}>
          <ul className="list-group" id="group-comment">
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
                      id={`my-comment${idx}`}
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

export default My_activity;
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mypage.css";

const My_like = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [radioId, setRadioId] = useState('like-news');

  //뉴스
  const [myNews, setMyNews] = useState([
    { id: '' },
    { title: '' },
    { newsId: 0 } // 상세 페이지 url
  ]);

  // 커뮤니티
  const [myCommunity, setMyCommunity] = useState([
    { id: '' },
    { title: '' },
    { boardId: 0 } // 상세 페이지 url
  ]);

  const radios = [
    { name: '좋아요 한 뉴스', value: '1', id: 'like-news' },
    { name: '좋아요 한 커뮤니티 글', value: '2', id: 'like-community' }
  ];

  useEffect(() => {
     // 좋아요한 뉴스
    axios.get('/myNewsLike')
      .then(res => {
        const likeNews = res.data.map(newsLike => ({
          id: newsLike.id,
          title: newsLike.news.title,
          newsId: newsLike.newsId
        }))
        setMyNews(likeNews);
      })
      .catch(err => console.log(err))

      // 좋아요 한 커뮤니티 글
      axios.get('/myBoardLike')
      .then(res => {
        const likeBoard = res.data.map(boardLike => ({
          id: boardLike.id,
          title: boardLike.board.title,
          boardId: boardLike.boardId
        }))
        setMyCommunity(likeBoard);
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

      {/* 내가 좋아하는 뉴스 목록 */}
      <div className={`${radioId === 'like-news' ? `like-news-list` : 'like-news-list group-hidden'}`}>
        <ul className="list-group" id="like-news">
          <li className="list-group-item list-group-top">
            <label className="list-title">제목</label>
          </li>
          <Form>
            <li className="rounded-bottom">
              {myNews.map((type) => (
                <li key={`default-${type}`} className="list-group-item">
                  <Form.Check
                    className="form-check-label"
                    type={`checkbox`}
                    id={`like-news${type.id}`}
                    label={<Link to={`/news/article/${type.newsId}`}>{`${type.title}`}</Link>}
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
              {myCommunity.map((type) => (
                <li key={`default-${type}`} className="list-group-item">
                  <Form.Check
                    className="form-check-label"
                    type={`checkbox`}
                    id={`like-community${type.id}`}
                    label={<Link to={`/community/boarddetail/${type.boardId}`}>{`${type.title}`}</Link>}
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
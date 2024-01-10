import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Mypage.css";

const My_scrap = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [radioId, setRadioId] = useState('news');

  const [myJob, setMyJob] = useState([
    { id: '' },
    { title: '' }, // 공고 제목
    { jobId: 0 } // 상세 페이지 url
  ]);

  const [myNews, setMyNews] = useState([
    { id: '' },
    { title: '' }, // 뉴스 제목
    { newsId: 0 } // 상세 페이지 url
  ]);

  const [myCommunity, setMyCommunity] = useState([
    { id: '' },
    { title: '' }, // 뉴스 제목
    { boardId: 0 } // 상세 페이지 url
  ]);

  const radios = [
    { name: '뉴스', value: '1', id: 'news' },
    { name: '채용 공고', value: '2', id: 'job' },
    { name: '커뮤니티', value: '3', id: 'community' }
  ];

  useEffect(() => {
    axios.get('/jobScrap')
      .then(res => {
        // job.title 값들을 추출하여 새 배열로 만들기
        const scrapJobs = res.data.map(jobScrap => ({
          id: jobScrap.id,
          title: jobScrap.job.title,
          jobId: jobScrap.jobId
        }))
        setMyJob(scrapJobs);
      })
      .catch(err => console.log(err))

    axios.get('/newsScrap')
      .then(res => {
        // news.title 값들을 추출하여 새 배열로 만들기
        const scrapNews = res.data.map(newsScrap => ({
          id: newsScrap.id,
          title: newsScrap.news.title,
          newsId: newsScrap.newsId
        }))
        setMyNews(scrapNews);
      })
      .catch(err => console.log(err))

    axios.get('/boardScrap')
      .then(res => {
        // board.title 값들을 추출하여 새 배열로 만들기
        const scrapBoard = res.data.map(boardScrap => ({
          id: boardScrap.id,
          title: boardScrap.board.title,
          boardId: boardScrap.boardId
        }))
        setMyCommunity(scrapBoard);
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

      {/* 뉴스 목록 */}
      <div className={`${radioId === 'news' ? `scrap-news-list` : 'scrap-news-list group-hidden'}`}>
        <ul className="list-group" id="group-news">
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
                    id={`my-news${type.id}`}
                    label={<Link to={`/news/article/${type.newsId}`}>{`${type.title}`}</Link>}
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
              {myJob.map((type) => (
                <li key={`default-${type}`} className="list-group-item">
                  <Form.Check
                    className="form-check-label"
                    type={`checkbox`}
                    id={`my-job${type.id}`}
                    label={<Link to={`/Job/JobView/${type.jobId}`}>{`${type.title}`}</Link>}

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
              {myCommunity.map((type) => (
                <li key={`default-${type}`} className="list-group-item">
                  <Form.Check
                    className="form-check-label"
                    type={`checkbox`}
                    id={`my-community${type.id}`}
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

export default My_scrap;
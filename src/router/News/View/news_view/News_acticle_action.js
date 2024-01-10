
/*
* 디자인
    - 버튼 : 색상, 모양, 위치
    - 드롭박스 : 색생, 모양, 위치

  기능
    - 공유 : SNS 형식으로 공유될 수 있도록 기능 구현, DB에 공유 카운트 추가
    - 좋아요 : 마이페이지에 좋아요 한 것을 확인하도록, DB에 좋아요 카운트 추가
    - 스크랩 : 마이페이지에 스크랩 한 것을 확인하도록, DB에 스크랩 카운트 추가
    - 신고 :  마이페이지에 신고 한 것을 확인하도록, DB에 스크랩 카운트 추가
*/

import React, { useState, useEffect } from 'react'
import use_Post_API from '../../Main/hooks/use_Post_API'
import Dropdown from 'react-bootstrap/Dropdown'
import { SiNaver } from "react-icons/si"
import { RiKakaoTalkFill } from "react-icons/ri"
import { NavDropdown } from 'react-bootstrap';
import { FaShareAlt, FaThumbsUp, FaBookmark, FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'



const News_acticle_action = ({ id }) => {

  const [data, setData] = useState({
    latestNews: [],
    news: {},
    popularNews: [],
    relatedNews: []
  })

  useEffect(() => {
    axios.get(`/news/article/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  console.log(data.news && data.news.title);
  console.log(data)
  console.log(data.news.id)

  const { sendLike, loading, error } = use_Post_API()

  const handleLike = () => { sendLike(id) }

  const shareWithKakao = () => {

    window.Kakao.init('b9db355519fa67ef41f4ffe1d442d564');

    if (window.Kakao && window.Kakao.Link) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${data.news && data.news.subtitle}`,
          description: `${data.news && data.news.title}`,
          imageUrl: `${data.news && data.news.image}`,
          link: {
            mobileWebUrl: `http://localhost:3000/news/article/${data.news.id}`,
            webUrl: `http://localhost:3000/news/article/${data.news.id}`,
          },
        },
      });
    } else {
      alert('카카오 SDK를 로드하지 못했습니다.');
    }
  };

  function share() {
    var url = `http://localhost:3000/news/article/${data.news.id}`;
    var title = encodeURI(data.news.title);
    var shareURL = "https://share.naver.com/web/shareView?url=" + url + "&title=" + title;
    document.location = shareURL;
  }

  const handleCopyLink = () => {
    const currentURL = window.location.href;
    try {
      navigator.clipboard.writeText(currentURL);
      alert('URL이 복사되었습니다.');
    } catch (error) {
      alert('URL 복사에 실패했습니다.');
    }
  };

  return (
    <aside className="d-flex flex-column align-items-center sticky-top" style={{ top: '50%' }}>
      {error && <p className="text-danger">Error: {error.message}</p>}
      <Dropdown drop="end" className="my-1 d-block">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-share-button" className="w-100">
          <FaShareAlt />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1" onClick={shareWithKakao}>
            <RiKakaoTalkFill />&nbsp; 카카오톡으로 공유하기
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={share}>
            <SiNaver />&nbsp; 네이버로 공유하기
          </Dropdown.Item>
          <NavDropdown.Divider />
          <Dropdown.Item eventKey="3" onClick={handleCopyLink}>
            &nbsp; 링크 복사
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>

      <button className="btn btn-outline-success my-1" onClick={handleLike} disabled={loading}>
        {loading ? 'Loading...' : <FaThumbsUp />}
      </button><br></br>
      <button className="btn btn-outline-warning my-1"><FaBookmark /></button><br></br>
      <button className="btn btn-outline-danger my-1"><FaExclamationTriangle /></button>
    </aside>
  )
}

export default News_acticle_action
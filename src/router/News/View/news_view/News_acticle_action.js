
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

import React from 'react'
import use_Post_API from '../../Main/hooks/use_Post_API'
import Dropdown from 'react-bootstrap/Dropdown'
import { SiNaver } from "react-icons/si"
import { FaMeta } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { RiKakaoTalkFill } from "react-icons/ri"
import { FaShareAlt, FaThumbsUp, FaBookmark, FaExclamationTriangle } from 'react-icons/fa'

const News_acticle_action = ({ id }) => {

  const { sendLike, loading, error } = use_Post_API()

  const handleLike = () => { sendLike(id) }

  return (
    <aside className="d-flex flex-column align-items-center sticky-top" style={{ top: '50%' }}>
      {error && <p className="text-danger">Error: {error.message}</p>}
      <Dropdown drop="end" className="my-1 d-block">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-share-button" className="w-100">
          <FaShareAlt />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1"><RiKakaoTalkFill/>&nbsp; 카카오톡으로 공유하기</Dropdown.Item>
          <Dropdown.Item eventKey="2"><SiNaver/>&nbsp; 네이버로 공유하기</Dropdown.Item>
          <Dropdown.Item eventKey="3"><FaInstagram/>&nbsp; 인스타 공유하기</Dropdown.Item>
          <Dropdown.Item eventKey="4"><FaMeta />&nbsp; 메타로 공유하기</Dropdown.Item>
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
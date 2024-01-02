
/*
* 디자인
    - 글자 : 모양, 글꼴
  
  기능 : 뉴스 제목 불러오기
*/

/*
문자 백업
한국판 챗GPT 한국어 잘하는 AI 네이버-카카오 본격화
*/

import React from 'react'
import PropTypes from 'prop-types'

const News_acticle_title = ({ title }) => {

  News_acticle_title.propTypes = { title: PropTypes.string.isRequired }

  return (
    <article className="mb-3" id="news_view_title" name="news_view_title">
      <h2 className="font-weight-bold text-center">{title}</h2>
    </article>
  )

}

export default News_acticle_title
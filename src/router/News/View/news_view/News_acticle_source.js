
/*
* 디자인
    - 글자 : 위치, 모양
  
  기능
    - 뉴스 게시일, 뉴스 출처, 뉴스 저작자을 불러오기
*/

/*
문자 백업
2023-03-09
이코노믹데일리
선재관 기자
*/

import React from 'react'
import PropTypes from 'prop-types'

const News_acticle_source = ({ press, reporter, post_time }) => {

  News_acticle_source.propTypes = {
    press: PropTypes.string.isRequired,
    reporter: PropTypes.string.isRequired,
    post_time: PropTypes.string.isRequired
  }

  return (
    <article className="mb-4" id="news_view_source" name="news_view_source">
      <small>
          <a href="#" className="text-muted">{post_time}</a>&nbsp;❕&nbsp;
          <a href="#" className="text-muted">{press}</a>&nbsp;❕&nbsp;
          <a href="#" className="text-primary">{reporter} 기자</a>
      </small>
    </article>
  )
  
}

export default News_acticle_source
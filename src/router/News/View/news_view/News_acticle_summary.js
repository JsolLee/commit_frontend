
/*
* 디자인
    - 글자 : 위치, 모양
  
  기능
    - 뉴스 카테고리, 뉴스 제목(글자수 제한)
*/


import React from 'react'
import PropTypes from 'prop-types'

const News_acticle_summary = ({ category, title }) => {

  News_acticle_summary.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  return (
    <article className="mb-4" id="news_view_origin" name="news_view_origin">
      <small>
          <a href="#" className="text-muted">News</a>&nbsp;❕&nbsp;
          <a href="#" className="text-muted">{category}</a>&nbsp;❕&nbsp;
          <a href="#" className="text-primary">{title}</a>
      </small>
    </article>
  )

}

export default News_acticle_summary
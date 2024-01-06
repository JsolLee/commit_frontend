
/*
* 디자인
    - 글자 : 위치, 모양
  
  기능
    - 뉴스 카테고리, 뉴스 제목(글자수 제한)
*/
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const News_acticle_summary = ({ category, title }) => {

  return (
    <div className="mb-4">
      <small>
        <Link to={`/news`} className="text-muted">
          News
        </Link>
        &nbsp;❕&nbsp;
        <Link to={`/news/category/${category}`} className="text-muted">
          {category}
        </Link>
        &nbsp;❕&nbsp;
          <span className="text-primary" style={{ verticalAlign: 'baseline' }}>
            {title.length > 15 ? title.substring(0, 15) + "..." : title}
          </span >
        &nbsp;&nbsp;
      </small>
    </div>
  )
}

News_acticle_summary.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default News_acticle_summary
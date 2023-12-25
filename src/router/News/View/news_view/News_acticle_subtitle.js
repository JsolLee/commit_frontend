
/*
* 디자인 : 위치, 모양, 글꼴
  
  기능 : 뉴스 제목 불러오기
*/

/*
문자 백업
전세계, 챗GPT 열풍 속에서 네이버와 카카오가 한국어 잘하는 AI로 승부수를 띄워
*/


import React from 'react'
import PropTypes from 'prop-types'

const News_acticle_subtitle = ({ subtitle }) => {

  News_acticle_subtitle.propTypes = {
    subtitle: PropTypes.string.isRequired
  }

  return (
    <article className="mb-4" id="news_view_subtitle" name="news_view_subtitle">
      <h5 className="text-center text-muted">{subtitle}</h5>
    </article>
  )

}

export default News_acticle_subtitle
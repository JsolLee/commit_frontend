
/*
* 디자인
    - 내용 : 위치, 모양, 글꼴 
    - 이미지 : 이미지 위치 선정, 이미지 설명 글 디자인

  기능
    - 내용 : DB에서 내용 불러오기
    - 이미지 : DB에서 이미지 불러오기(url)
*/

import React from 'react'
import PropTypes from 'prop-types'

const News_acticle_contents = ({ image, content }) => {

  News_acticle_contents.propTypes = {
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }

  return (
    <article className="container" id="news_view_content" name="news_view_content">
      <div className="row">
          <div className="col-12 mb-3">
            {image}{/* <img src="../../assets/images/issue_veiw_1.jpg" className="img-fluid d-block mx-auto" id="fullscreenImage" style="cursor:pointer;" alt="openAI"></img> */}
          <div className="text-center"><small>OpenAI ChatGPT-3[사진=OpenAI]</small></div>
          </div>
          <div className="col-12">{content}</div>
      </div>
    </article>
  )
}

export default News_acticle_contents
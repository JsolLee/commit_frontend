
/*
* 디자인
    - 글자 : 위치, 모양
  
  기능
    - 뉴스 카테고리, 뉴스 제목(글자수 제한)
*/


import React from 'react'

const News_acticle_summary = () => {

  return (
    <article className="mb-4" id="news_view_origin" name="news_view_origin">
      <small>
          <a href="#" className="text-muted">뉴스</a>&nbsp;❕&nbsp;
          <a href="#" className="text-muted">IT 이슈</a>&nbsp;❕&nbsp;
          <a href="#" className="text-primary">한국판 챗GPT 한국어 잘하는 AI...</a>
      </small>
    </article>
  )

}

export default News_acticle_summary
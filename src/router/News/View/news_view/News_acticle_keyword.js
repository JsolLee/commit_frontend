
/*
* 디자인
    - 버튼 : 색상, 형태, 위치

  기능
    - 내용을 바탕으로 키워드 산출 -> Query : 생각
*/

import React from 'react'

const News_acticle_keyword = () => {
  const buttonStyle = { width: '100%', padding: '0.5rem 1rem' }

  return (
      <aside className="d-flex flex-column align-items-start sticky-top" style={{ top: '50%' }}>
        <a className="btn btn-primary my-1 d-block" href="#" role="button" style={buttonStyle}>AI</a><br></br>
        <a className="btn btn-primary my-1 d-block" href="#" role="button" style={buttonStyle}>Chat GPT</a><br></br>
        <a className="btn btn-primary my-1 d-block" href="#" role="button" style={buttonStyle}>Naver</a><br></br>
        <a className="btn btn-primary my-1 d-block" href="#" role="button" style={buttonStyle}>Kakao</a>
      </aside>
  )

}

export default News_acticle_keyword
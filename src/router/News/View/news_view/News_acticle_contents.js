
/*
* 디자인
    - 내용 : 위치, 모양, 글꼴 
    - 이미지 : 이미지 위치 선정, 이미지 설명 글 디자인

  기능
    - 내용 : DB에서 내용 불러오기
    - 이미지 : DB에서 이미지 불러오기(url)
*/

import React from 'react'

const News_acticle_contents = () => {

  return (
    <article className="container" id="news_view_content" name="news_view_content">
      <div className="row">
          <div className="col-12 mb-3">
              {/* <img src="../../assets/images/issue_veiw_1.jpg" className="img-fluid d-block mx-auto" id="fullscreenImage" style="cursor:pointer;" alt="openAI"></img> */}
          <div className="text-center"><small>OpenAI ChatGPT-3[사진=OpenAI]</small></div>
          </div>
          <div className="col-12">
              <p>
                [이코노믹데일리] 인공지능(AI) 연구에서 선두를 지켜온 구글이 지난달 6일 AI 챗봇 &apos;바드(Bard)&apos;를 공개하며 오픈AI의 챗GPT에 공개적으로 맞불을 놨다. 성능 시연을 보이려 내놓은 대답이 오답으로 밝혀지면서 구글 주가가 7.7% 급락하는 등 난감한 상황이었으나 표면적으로는 분격적인 &apos인공지능 전쟁&apos이 시작되는 분위기다.
              </p>
              <p>
                  구글이 서둘러 바드를 공개한 이유는 오픈AI가 유료 상품을 출시하면서 예상보다 많은 주목을 받기 때문이고, 또 오픈AI보다 기술 수준이 높은 기업들이 점유율 경쟁에서 뒤질 세라 맞대응에 나섰기 때문이다.
              </p>
          </div>
      </div>
    </article>
  )
}

export default News_acticle_contents
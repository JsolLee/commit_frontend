
/*
* 디자인
    - 카드 형식(6개 -> 3*2 형식) : 위치, 모양, 이미지 설정
    - 내용 : 제목, 내용

  기능
    - 뉴스 선정 : 키워드를 통해 뉴스 선정 -> Query 생각해 봐야 함
    - 이미지 크기 조정 : 고정으로 해서 가운데 또는 줄여서
    - 내용 글자수 제한 : 제한된 글자수를 넘으면 "..."으로 표시
*/

import React from 'react'

const News_acticle_related = () => {

  return (
      <article className="container" id="news_view_related" name="news_view_related">
        <section>
          <div className="row row-cols-1 row-cols-md-3 g-6 gy-4">
            <div>
              {/* <div className="col" style=" cursor: pointer;" onclick="location.href='#'"> */}
              <div className="card">
                {/* <img src="../../assets/images/issue_veiw_card_1.gif" className="card-img-top" alt="Goolge"></img> */}
                <div className="card-body">
                  <h5 className="card-title">구글 어시스턴트, 더 똑똑해진다…“생성형 AI ‘바드’ 탑재”</h5>
                  <p className="card-text">불과 몇 주 전 아마존이 생성형 AI 기능을 갖춘 새 알렉사를 선보인 데 이어, 구글도 구글 어시스턴트에 생성형 AI 기능을 제공한다고 밝혔다.  구글이 10월 4일(현지 시각) 미국 뉴욕에서 열린 연례 신제품 발표 행사 메이드 포 구글(M...</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">추천기사</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
  )
}

export default News_acticle_related
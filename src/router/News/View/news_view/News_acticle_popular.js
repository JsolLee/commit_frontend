
/*
* 디자인
    - 뉴스 기사 제목 : 글꼴
  
  기능
    - 뉴스 기사 제목을 DB에서 불러오기 -> Query : 조회수, 공유, 좋아요, 스크랩을 더해서 가장 높은 순으로 불러오기
    - 자동으로 뉴스 기사를 생성하는 반복문 만들기 (6개 정도)
*/

import React from 'react'

const News_acticle_popular = () => {

  return (
    <div className="col-md-6">
        <div className="table-responsive-md">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">인기뉴스</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <tr style="cursor: pointer;" onclick="location.href='#'"> */}
                <th scope="row" className="col-2 text-center">1</th>
                <td className="col-10">과기부, 챗GPT에 의한 디지털 대응 &apos;디지털 신질서 로드맵&apos; 만든다</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )

}

export default News_acticle_popular

/*
* 디자인
    - 뉴스 기사 제목 : 글꼴
  
  기능
    - 뉴스 기사 제목을 DB에서 불러오기 -> Query : 뉴스 최신 등록일 순
    - 자동으로 뉴스 기사를 생성하는 반복문 만들기 (6개 정도)
*/

import React from 'react'

const News_acticle_newest = () => {

  return (
      <div className="col-md-6">
        <div className="table-responsive-md">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">최신뉴스</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <tr style="cursor: pointer;" onclick="location.href='#'"> */}
                <th scope="row" className="col-2 text-center">1</th>
                <td className="col-10">뉴스 기사 제목</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )

}

export default News_acticle_newest
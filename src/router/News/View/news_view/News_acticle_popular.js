
/*
* 디자인
    - 뉴스 기사 제목 : 글꼴
  
  기능
    - 뉴스 기사 제목을 DB에서 불러오기 -> Query : 조회수, 공유, 좋아요, 스크랩을 더해서 가장 높은 순으로 불러오기
    - 자동으로 뉴스 기사를 생성하는 반복문 만들기 (6개 정도)
*/

import React from 'react'
import PropTypes from 'prop-types'

const News_article_popular = ({ popularNews }) => {

  if (!popularNews || !Array.isArray(popularNews)) {
    return <div>Loading popular news...</div>;
  }

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
            {popularNews.map((news, index) => (
              <tr key={index}>
                <th scope="row" className="col-2 text-center">{index + 1}</th>
                <td className="col-10">{news.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

News_article_popular.propTypes = {
  popularNews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default News_article_popular

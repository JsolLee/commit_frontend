
/*
* 디자인
    - 뉴스 기사 제목 : 글꼴
  
  기능
    - 뉴스 기사 제목을 DB에서 불러오기 -> Query : 뉴스 최신 등록일 순
    - 자동으로 뉴스 기사를 생성하는 반복문 만들기 (6개 정도)
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const News_acticle_newest = ({ latestNews }) => {

  if (!latestNews || !Array.isArray(latestNews)) {
    return <div>Loading latest news...</div>;
  }

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
            {latestNews.map((news, index) => (
              <tr key={index}>
                <th scope="row" className="col-2 text-center">{index + 1}</th>
                <td className="col-10">
                  <Link to={`/news/article/${news.id}`}>
                    {news.title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

}

News_acticle_newest.propTypes = {
  latestNews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default News_acticle_newest
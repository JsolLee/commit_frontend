
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
import PropTypes from 'prop-types'

const News_acticle_related = ({ relatedNews }) => {

  if (!Array.isArray(relatedNews)) { return <div>관련 뉴스 정보가 없습니다.</div> }

  return (
    <article className="container" id="news_view_related" name="news_view_related">
      <section>
        <div className="row row-cols-1 row-cols-md-3 g-6 gy-4">
          {relatedNews.map((news, index) => (
            <div key={index} className="col">
              <div className="card">
                {/* {news.image && <img src={news.image} className="card-img-top" alt={news.title} />} */}
                <div className="card-body">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.content}</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">기사 보기</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

News_acticle_related.propTypes = {
  relatedNews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      // image: PropTypes.string,
      // link: PropTypes.string 
    })
  ).isRequired
}

export default News_acticle_related

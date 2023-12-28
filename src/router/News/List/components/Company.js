/*
1) ./List_backend/index.js 에서 네이버 뉴스 검색API을 사용해서 IT/과학 검색 결과를 크롤링하고 mongoDB을 사용하여 commit 라는 이름의 DB에 
데이터를 저장한뒤에 Company.js로 데이터를 보내줍니다.

2) ./List_backend/news.model.js에서 크롤링 한 데이터를 원하는 형태의 스키마로 저장합니다

3) 크롤링한 데이터를 DB에 넣고 확인가능한 상태이며, 그것을 웹 화면에 전달까지 가능한 상태입니다.

단 이미지URL는 크롤링을 하여 데이터를 가져오는데 실패했습니다. 전달 가능한 데이터는 title, description, link입니다.
*/
import React from 'react';

// css 추가
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/company.css'

import Popular_News from './JS/Popular_News'

// npm install axios cheerio을 먼저 수행해야함
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Company = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/news');
        
        setNewsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('뉴스 데이터를 가져오는 중 에러 발생:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }
  // 데이터가 배열인지 확인 후 맵핑
  if (!Array.isArray(newsData)) {
    console.error('데이터가 배열이 아닙니다:', newsData);
    return null;
  }
  return (
    <div>

      <div>
        <div className="container">
          <div className="container px-4 py-5">

            <h3 className="fw-bold">국내 기업</h3>
            <h2 className="pb-2 border-bottom"></h2>

            <Link to='/newView1' className="list-group-item list-group-item-action">
              <div className="row row-cols-1 align-items-md-center g-5 py-5">
                <div className="d-flex flex-column align-items-start gap-2">
                  <img src="./companyImages/image12.jpg" width="1200" height="500" className="img-thumbnail" alt="뉴스1 썸네일" /> <br />

                  <h3 className="fw-bold">네오위즈, ‘P의 거짓’ 판매량 100만장 돌파 소식에 주가 ‘훈풍’</h3>
                  <p className="text-muted">네오위즈가 신작 ‘P의 거짓’ 누적 판매량이 100만장을 돌파했다는 소식에 강세 마감했다.
                    17일 네오위즈는 전거래일 대비 15.76% 오른 2만7550원에 장을 마쳤다. 이날 거래량은 252만주를 넘겼다. 전일 거래량은 17만주 가량이었다. 네오위즈홀딩스도 12.74% 오른 2만1950원에 마감했다.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Popular_News />
      <section className="container mt-4">
        <div className="row my-5">
          <section className="container mt-4">
            <div className="row my-5">
              <div>
                {newsData.map((article, index) => (
                  <Link key={index} href={article.link} className="list-group-item list-group-item-action">
                    <div className="row">
                      <div className="col-md-1">
                        <img src={article.imageUrl} className="img-fluid" alt={article.title} crossOrigin="anonymous" />
                      </div>
                      <div className="col-md-10">
                        <div className="fw-bold">{article.title}</div>
                        <p className="company-content" dangerouslySetInnerHTML={{ __html: article.description.slice(0, 10) + '...' }} />
                        <p className="company-mediaCompany">{article.publisher}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>


          <div style={{ whiteSpace: 'pre-line' }}>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
          </div>

          <div className="pagination-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example" className="pagination-nav">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                <li className="page-item"><Link className="page-link" href="#">7</Link></li>
                <li className="page-item"><Link className="page-link" href="#">8</Link></li>
                <li className="page-item"><Link className="page-link" href="#">9</Link></li>
                <li className="page-item"><Link className="page-link" href="#">10</Link></li>
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </section>
    </div>
  )
}
export default Company;
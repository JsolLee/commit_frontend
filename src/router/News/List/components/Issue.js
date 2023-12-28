import React from 'react';

// css 추가
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/issue.css'


import Popular_News from './JS/Popular_News'

import image01 from '../../../../asset/news/Issue01.jpg'
import { Link } from 'react-router-dom';


function Iusse() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="container px-4 py-5">

            <h3 className="fw-bold">IT 이슈</h3>
            <h2 className="pb-2 border-bottom"></h2>
            <Link to='/newView1' className="list-group-item list-group-item-action">
              <div className="row row-cols-1 align-items-md-center g-5 py-5">
                <div className="d-flex flex-column align-items-start gap-2">
                  <img src={image01} width="1200" height="500" className="img-thumbnail" alt="뉴스1 썸네일" /> <br />

                  <h3 className="fw-bold">챗GPT 확장 프로그램 10가지로 꾀하는 크롬 브라우저의 변신</h3>
                  <p className="text-muted">챗GPT는 2022년 출시 직후부터 엄청난 인기를 끌었다. 수많은 사용자가 챗봇의 기능을 살펴보기 위해 몰려들었고 이제 챗GPT 서비스는 확고하게 자리를 잡았다. 한편, 구글과 구글의 브라우저 크롬은 오래전부터 세계적으로 유명한 이름이다. 네오위즈홀딩스도 12.74% 오른 2만1950원에 마감했다.</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <Popular_News />
      <section className="container mt-4">
        <div className="row my-5">

          <Link to='/newView2' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src={image01} className="img-fluid" alt="뉴스1 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">&ldquo;클라우드 시장 확대하자&rdquo; …KT클라우드, 이노그리드와 협력</div>
                <p className="news-content">KT클라우드가 클라우드 컴퓨팅 전문기업 이노그리드와 &lsquo;클라우드 시장 확대를 위한 공동 …</p>
                <p className="news-mediaCompany">뉴스1</p>
              </div>
            </div>
          </Link>

          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src={"https://images.chosun.com/resizer/5h6kS1h_tN7yDCQJw1PlWSc0Ujs=/400x225/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/WYQI54OPOBBPBEIFHWXS6RI2VM.png"} className="img-fluid" alt="뉴스2 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">[Let&rsquo;s 스타트업] 자율주행 드론, 美 물류창고에 수출</div>
                <p className="news-content">브룩허스트거라지 올해 초 북미 최초로 드론을 활용한 재고관리 자동화 상업 서비스에 성…</p>
                <p className="news-mediaCompany">매일경제</p>
              </div>
            </div>
          </Link>

          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src={"https://images.chosun.com/resizer/6KzXPbwGgnSRht8qwGmUL9qCKtk=/400x225/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/3KZMX2S7BVBLLEWWMVCW4NHWMY.jpg"} className="img-fluid" alt="뉴스3 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">1.8m 높이서 갤Z폴드·아이폰15 수직낙하했더니.. 예상외로 &lsquo;이 기기&rsquo; 멀쩡했…</div>
                <p className="news-content">&ldquo;애플의 최신형 스마트폰 &lsquo;아이폰15 프로 맥스&rsquo;와 삼성의 &lsquo;갤럭시 Z폴드5&rsquo;의 낙 …</p>
                <p className="news-mediaCompany">파이낸셜뉴스</p>
              </div>
            </div>
          </Link>
          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="https://images.chosun.com/resizer/ZRErzMDoAG1jXJ_Nd_yARj08NiM=/400x225/filters:focal(3462x1052:3472x1062)/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/MQSQJUTUSZIORHTPBPHGN7IPN4.JPG" className="img-fluid" alt="뉴스4 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">32세에 재산 1조원대 日 사업가 &ldquo;AI로 후계자 못 구해 폐업하는 기업 없게&rdquo;</div>
                <p className="news-content">MA종합연구소 창립자 사가미 순사쿠, 블룸버그·포브스도 집중 조명 WEEKLY …</p>
                <p className="news-mediaCompany">조선일보 </p>
              </div>
            </div>
          </Link>
          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="https://images.chosun.com/resizer/04B4nntFcCd0WMFkYKsduDOXvKk=/400x225/filters:focal(319x6:329x16)/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/YFQG7QQ27OQMEICHHS22HP6JLU.jpg" className="img-fluid" alt="뉴스5 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">개발자 69% &ldquo;주4일 근무보다 중요한 건 연봉 유지&rdquo; </div>
                <p className="news-content">경력직 개발자들은 근로시간 단축보다 현재 연봉 수준 유지를 더 중요하게 생각한다는 …</p>
                <p className="news-mediaCompany">디지털타임스</p>
              </div>
            </div>
          </Link>

          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="https://images.chosun.com/resizer/aNuIiQPxFd79JaJs4zXp4U7njVI=/400x225/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/VWG5OWMVRBCQJLQTWBBXMRNBXE.png" className="img-fluid" alt="뉴스6 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">&lsquo;모바일 RPG&rsquo;에 돈 몰리는 韓 게임 시장…MMO는 주춤</div>
                <p className="news-content">한국 모바일 게임 시장이 역할수행게임(RPG) 장르에 편중된 것으로 나타났다. 한 … </p>
                <p className="news-mediaCompany">뉴시스</p>
              </div>
            </div>
          </Link>

          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./issueImages/image7.jpg" className="img-fluid" alt="뉴스7 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">삼성, &lsquo;스마트싱스&rsquo; 생태계 키운다</div>
                <p className="news-content">삼성전자가 &lsquo;갤럭시 스마트태그2&rsquo;를 통해 스마트태그 시장을 지속 공략한다. 스마 …</p>
                <p className="news-mediaCompany">비즈워치</p>
              </div>
            </div>
          </Link>

          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./issueImages/image8.jpg" className="img-fluid" alt="뉴스8 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">아이폰15 &lsquo;손난로&rsquo; 오명 벗을까...애플, iOS 17 업데이트 시작</div>
                <p className="news-content">애플이 &lsquo;아이폰15&rsquo; 발열 문제를 해결하기 위해 OS(운영체제) 업데이트를 실시했다. 발열 … </p>
                <p className="news-mediaCompany">머니투데이</p>
              </div>
            </div>
          </Link>

          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./issueImages/image9.jpg" className="img-fluid" alt="뉴스9 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">토종 AI 반도체, 삼성전자 우군으로…스타트업 &lsquo;중동 공략&rsquo;은 순항 [Geeks&rsquo; Briefing]</div>
                <p className="news-content">이 기사는 프리미엄 스타트업 미디어 플랫폼 한경 긱스에 게재된 기사입니다. 한국경제… </p>
                <p className="news-mediaCompany">한국경제</p>
              </div>
            </div>
          </Link>

          <Link to='/newView3' className="list-group-item list-group-item-action">
            <div className="row">
              <div className="col-md-1">
                <img src="./issueImages/image10.jpg" className="img-fluid" alt="뉴스10 썸네일" />
              </div>
              <div className="col-md-10">
                <div className="fw-bold">중국 응원에 농락당한 ‘다음’…‘매크로’ 규제, 업계 반응은?</div>
                <p className="news-content">다음, 매크로 응원 조작에 ‘여론조작’ 규제 필요성↑ 업계, 취지 공감하면서도 “명확한 기… </p>
                <p className="news-mediaCompany">매일경제</p>
              </div>
            </div>
          </Link>

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
export default Iusse;
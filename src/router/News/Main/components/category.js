// React
import React, {  } from 'react'

// Routes
import { Link } from 'react-router-dom'

// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRightShort } from 'react-bootstrap-icons'

// CSS
import '../CSS/category.css'


function newsCategory() {

    return (
        <section className="NEWS2">
            <hr />
            <h2 className="NEWS2_title">섹션</h2>
            <div className="NEWS2_content">
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>전체</span>
                        <Link to='/politics' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to="/politicsMain">
                            <img src={"https://newsimg-hams.hankookilbo.com/2023/12/13/7cf415f7-47d2-4a63-b83c-ec061460e906.jpg"} alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to="/politicsMain">[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={"/politicsSub1"} className="innerlink0">`김행 20년 지기` 구상찬 &quot;개표 중 전화해 `자괴감 든다` 하더라&quot;</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={"/politicsSub2"} className="innerlink0">이탄희·홍성국 민주당 의원 총선 불출마 선언</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>InfoTech</span>
                        <Link to='/economy' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to="/economyMain">
                            <img src={"https://newsimg-hams.hankookilbo.com/2023/12/13/b0b8da8a-af69-47d1-b727-e67f8b1c3ed3.jpg"} alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to="/economyMain">[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={"economySub1"} className="innerlink0">IDP 전문기업 메인라인, 인재육성형 중소기업 2회 연속 지정</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={"economySub2"} className="innerlink0">지니틱스, 세종대 창업기업 나노게이트와 전류센서IC 공동개발 협약 체결</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>Company</span>
                        <Link to='/society' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to="/societyMain">
                            <img src={"https://newsimg-hams.hankookilbo.com/2023/12/13/e2308e03-0538-4d0c-986b-b7a7cea1091d.jpg"} alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to={"societyMain"}>[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={"societySub1"} className="innerlink0">정부, 중대재해 사망 5명 넘긴 현대건설·대우건설 전국 현장 감독</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={"societySub2"} className="innerlink0">부산 새 문화 `성지` 이름…`부산오페라하우스`, `부산콘서트홀` 확정</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>Conference</span>
                        <Link to='/International' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to='/InternationalMain'>
                            <img src="https://newsimg-hams.hankookilbo.com/2023/12/13/021cd922-ff33-4736-b5d6-73e2659eb54c.jpg" alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to='/InternationalMain'>[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/InternationalSub1' className="innerlink0">&quot;이란이 하마스 지원&quot; 정치권 압박에… 바이든, 이란 8조원 원유 수출 대금 다시 동결</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/InternationalSub2' className="innerlink0">`암흑 천지` 가자지구, 난민 33만 명… &quot;공습 1분도 멈추지 않는다&quot;</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default newsCategory
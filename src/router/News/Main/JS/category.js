// React
import React from 'react'

// Routes
import { Link } from 'react-router-dom'

// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRightShort } from 'react-bootstrap-icons'

// CSS
import '../CSS/category.css'

// Image
// 정치
// import cateImage1 from ''

// 경제
// import cateImage1 from ''

// 사회
// import cateImage1 from ''

// 국제
// import cateImage1 from ''

// 문화
// import cateImage1 from ''

// 연예
// import cateImage1 from ''

// 스포츠
// import cateImage1 from '../img/img010.jpeg'

// 사람
// import cateImage1 from ''

// 라이프
// import cateImage1 from ''

// 지역
// import cateImage1 from ''

// DB
// 정치 main
// import politicsMain from ''
// 정치 서브 1
// import politicsSub1 from ''
// 정치 서브 2
// import politicsSub2 from ''

// 경제 main
// import politicsMain from ''
// 경제 서브 1
// import politicsSub1 from ''
// 경제 서브 2
// import politicsSub2 from ''

// 사회 main
// import politicsMain from ''
// 사회 서브 1
// import politicsSub1 from ''
// 사회 서브 2
// import politicsSub2 from ''

// 국제 main
// import politicsMain from ''
// 국제 서브 1
// import politicsSub1 from ''
// 국제 서브 2
// import politicsSub2 from ''

// 문화 main
// import politicsMain from ''
// 문화 서브 1
// import politicsSub1 from ''
// 문화 서브 2
// import politicsSub2 from ''

// 연예 main
// import politicsMain from ''
// 연예 서브 1
// import politicsSub1 from ''
// 연예 서브 2
// import politicsSub2 from ''

// 스포츠 main
// import politicsMain from ''
// 스포츠 서브 1
// import politicsSub1 from ''
// 스포츠 서브 2
// import politicsSub2 from ''

// 사람 main
// import politicsMain from ''
// 사람 서브 1
// import politicsSub1 from ''
// 사람 서브 2
// import politicsSub2 from ''

// 라이프 main
// import politicsMain from ''
// 라이프 서브 1
// import politicsSub1 from ''
// 라이프 서브 2
// import politicsSub2 from ''

// 지역 main
// import politicsMain from ''
// 지역 서브 1
// import politicsSub1 from ''
// 지역 서브 2
// import politicsSub2 from ''


function newsCategory() {
    return (
        <section className="NEWS2">
            <hr />
            <h2 className="NEWS2_title">섹션</h2>
            <div className="NEWS2_content">
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>정치</span>
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
                        <span>경제</span>
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
                        <span>사회</span>
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
                        <span>국제</span>
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
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>문화</span>
                        <Link to='/culture' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to='/cultureMain'>
                            <img src="https://newsimg-hams.hankookilbo.com/2023/12/12/c7fe1cea-eca2-4090-9582-d0de880efa54.jpg" alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to='/cultureMain'>[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/cultureSub1' className="innerlink0">`기다리기 싫으면 다른 곳 가라`...이 햄버거의 세계관</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/cultureSub2' className="innerlink0">[제46기 SG배 한국일보 명인전] 생애 첫 메이저 4강 진출</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>연예</span>
                        <Link to='/entertainments' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to='/entertainmentsMain'>
                            <img src="https://newsimg-hams.hankookilbo.com/2023/12/13/87fef5e9-af90-4829-8710-7a5e76acfc30.jpg" alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to='/entertainmentsMain'>[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/entertainmentsSub1' className="innerlink0">일본 가수 파일 &quot;어머니 고향 한국에서 많은 활동 하고파&quot; [인터뷰]</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/entertainmentsSub2' className="innerlink0">니쥬, 박진영 작사 `하트리스`로 K팝 시장 공략</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>스포츠</span>
                        <Link to='/sports' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to="/sportsMain" className='innerlink preview-tooltip'>
                            <img src="https://newsimg-hams.hankookilbo.com/2023/12/13/f62ae0be-057e-4571-8b6a-4c6d9337e07f.jpg" alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to='/sportsMain'>[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/sportsSub1' className="innerlink0">한국 떠난 벤투 감독, UAE 사령탑으로 평가전 2연승</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/sportsSub2' className="innerlink0">끝까지 혼전... 안갯속빠진 KBO 중위권 싸움</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>사람</span>
                        <Link to='/person' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to='/personMain'>
                            <img src="https://newsimg-hams.hankookilbo.com/2023/12/13/430dda11-0849-4b15-9784-0fc28f209cfb.jpg" alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to='/personMain'>[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/personSub1' className="innerlink0">최태원 SK 회장 &quot;6·25 참전용사 희생이 자유민주주의 씨앗 선물&quot;</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/personSub2' className="innerlink0">반도체 전설·AI 석학...삼성의 초거대 AI 행사 위해 한국 온다</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>라이프</span>
                        <Link to='/life' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to='/lifeMain'>
                            <img src="https://newsimg-hams.hankookilbo.com/2023/12/13/c7f3073d-4ef6-49c0-98a6-a7bc620caa09.jpg" alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to='/lifeMain'>[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/lifeSub1' className="innerlink0">입속 염증·통증이 2주 이상 지속된다면… 혹시 구강암?</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/lifeSub2' className="innerlink0">[단독] 코아티가 앵무 잡아먹어도 과태료 300만 원... 동물원 처벌 솜방망이</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>지역</span>
                        <Link to='/region' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to='/regionMain'>
                            <img src="https://newsimg-hams.hankookilbo.com/2023/12/13/7ba0d6a8-3afa-4414-989d-bff66b600d05.jpg" alt="" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to='/regionMain' >[단독] 통계청, 6년간 민간기관과 700억 계약</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/regionSub1' className="innerlink0">민간인에 또 뚫린 포항 해병대...예비군 차량에 섞여 침입</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to='/regionSub2' className="innerlink0">여제자 성추행한 `두 얼굴의 프로파일러` 불구속 기소</Link>
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
// React
import React from 'react'

// CSS
import './Community.css'

// Router
import { Link } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatSquareDots, Person } from 'react-bootstrap-icons'


// DB 기사제목

// 메인 임포트

// 합격자 조언 임포트

// 면접 임포트

// 자소서 임포트

// 채용 임포트

// 이직/신입 임포트

// 후에 5개로 줄일고, 카테고리 별 components 생성 예정

function Community() {
    return (
        <div className="total">
            <div className="Items1">
                <div className="Item1">
                    <div className="Item_main">
                        <div className="Item_main_btn1">메인</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    메인 1
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    메인 최신 제목2
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    ref 메인3
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    메인 제목4
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    ref  제목5
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    최신 제목6
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                    </div>
                </div>

                <div className="Item2">
                    <div className="Item_main">
                        <div className="Item_main_btn1">이직/신입</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    조언1
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    조언2
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    조언3
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    조언4
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    조언5
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li><Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                            <span className="txt_subject">
                                조언6
                            </span>
                        </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>

            <div className="Items2">
                <div className="Item3">
                    <div className="Item_main">
                        <div className="Item_main_btn1">자소서</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                자소서 최신 제목1
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                자소서 최신 제목2
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                자소서 최신 제목3
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                자소서 최신 제목4
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                자소서 최신 제목5
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                자소서 최신 제목6
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                    </div>
                </div>

                <div className="Item4">
                    <div className="Item_main">
                        <div className="Item_main_btn1">합격자 조언</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    자소서 최신 제목1
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    자소서 최신 제목2
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    자소서 최신 제목3
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    자소서 최신 제목4
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    자소서 최신 제목5
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    자소서 최신 제목6
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>

            <div className="Items3">
                <div className="Item5">
                    <div className="Item_main">
                        <div className="Item_main_btn1">구인/구직</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    채용 최신 제목1
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    채용 최신 제목2
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    채용 최신 제목3
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    채용 최신 제목4
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    채용 최신 제목5
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    채용 최신 제목6
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                    </div>
                </div>

                <div className="Item6">
                    <div className="Item_main">
                        <div className="Item_main_btn1">기타</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    최신글1
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    최신글2
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    최신글3
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    최신글4
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    최신글5
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                <span className="txt_subject">
                                    최신글6
                                </span>
                            </Link>
                            <div className="util">
                                <div className='icons'>
                                    <Person />&nbsp;100
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ChatSquareDots />&nbsp;100
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="text-box"></div>
                </div>
            </div>
        </div>
    )
}

export default Community
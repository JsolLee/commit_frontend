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
                        <Link to={"/mainList"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={"/mainList/main1"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={"/mainList/main2"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={"/mainList/main3"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={"/mainList/main4"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={"/mainList/main5"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={"/mainList/main6"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                        <Link to={'/passadviceList'} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={'/passadviceList/passAdvice1'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/passadviceList/passAdvice2'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/passadviceList/passAdvice3'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/passadviceList/passAdvice4'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/passadviceList/passAdvice5'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                        <li><Link to={'/passadviceList/passAdvice6'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                        <Link to={'/interviewList'} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={'/interviewList/interview1'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/interviewList/interview2'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/interviewList/interview3'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/interviewList/interview4'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/interviewList/interview5'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/interviewList/interview6'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                        <Link to={'/aboutMeList'} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={'/aboutMeList/aboutMe1'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/aboutMeList/aboutMe2'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/aboutMeList/aboutMe3'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/aboutMeList/aboutMe4'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/aboutMeList/aboutMe5'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/aboutMeList/aboutMe6'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                        <Link to={'/employmentList'} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={'/employmentList/employment1'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/employmentList/employment2'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/employmentList/employment3'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/employmentList/employment4'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/employmentList/employment5'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/employmentList/employment6'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                        <div className="Item_main_btn1">이직/신입</div>
                        <Link to={'/newJobList'} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <li>
                            <Link to={'/newJobList/newJob1'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/newJobList/newJob2'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/newJobList/newJob3'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/newJobList/newJob4'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/newJobList/newJob5'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
                            <Link to={'/newJobList/newJob6'} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
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
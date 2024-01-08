// React
import React, { useEffect, useState } from 'react'

// axios
import axios from 'axios';

// CSS
import './Community.css'

// Router
import { Link } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatSquareDots, Person } from 'react-bootstrap-icons'


function Community() {

    const [data, setData] = useState([

    ]);
    // 데이터 가져오기
    useEffect(() => {
        axios.get(`/community`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    console.log(data)

    // "main" 카테고리에 대한 작업을 수행하는 코드
    const sortedAllData = data.sort((a, b) => {
        const dateA = new Date(a.createDate);
        const dateB = new Date(b.createDate);
        return dateB - dateA; // 내림차순 정렬
      });

    const latestData = sortedAllData.slice(0, 6);

    // "join" 카테고리에 대한 작업을 수행하는 코드
    const joinData = data.filter(item => item.category === "join");

    // "ps" 카테고리에 대한 작업을 수행하는 코드
    const psData = data.filter(item => item.category === "ps");

    // "advice" 카테고리에 대한 작업을 수행하는 코드
    const adviceData = data.filter(item => item.category === "advice");

    // "job" 카테고리에 대한 작업을 수행하는 코드
    const jobData = data.filter(item => item.category === "job");

    // "etc" 카테고리에 대한 작업을 수행하는 코드
    const etcData = data.filter(item => item.category === "etc");


    //  게시글 날짜 순 정렬
    const sortedMainData = latestData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedJoinData = joinData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedPsData = psData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedAdviceData = adviceData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedJobData = jobData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedEtcData = etcData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

    console.log(latestData)
    console.log(joinData)
    console.log(psData)
    console.log(adviceData)
    console.log(etcData)
    console.log(jobData)

    return (
        <div className="total">
            <div className="Items1">
                <div className="Item1">
                    <div className="Item_main">
                        <div className="Item_main_btn1">전체</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <div>
                            {sortedMainData.map((data) => (
                                <li key={data.id}>
                                    <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                        <span className="txt_subject">
                                            {data.title}
                                        </span>
                                    </Link>
                                    <div className="util">
                                        <div className='icons'>
                                            <Person />&nbsp;{data.likecount}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <ChatSquareDots />&nbsp;&nbsp;{data.viewcount}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="Item2">
                    <div className="Item_main">
                        <div className="Item_main_btn1">이직/신입</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <div>
                            {sortedJoinData.map((data) => (
                                <li key={data.id}>
                                    <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                        <span className="txt_subject">
                                            {data.title}
                                        </span>
                                    </Link>
                                    <div className="util">
                                        <div className='icons'>
                                            <Person />&nbsp;{data.likecount}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <ChatSquareDots />&nbsp;&nbsp;{data.viewcount}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
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
                        <div>
                            {sortedPsData.map((data) => (
                                <li key={data.id}>
                                    <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                        <span className="txt_subject">
                                            {data.title}
                                        </span>
                                    </Link>
                                    <div className="util">
                                        <div className='icons'>
                                            <Person />&nbsp;{data.likecount}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <ChatSquareDots />&nbsp;&nbsp;{data.viewcount}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Item4">
                    <div className="Item_main">
                        <div className="Item_main_btn1">합격자 조언</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <div>
                            {sortedAdviceData.map((data) => (
                                <li key={data.id}>
                                    <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                        <span className="txt_subject">
                                            {data.title}
                                        </span>
                                    </Link>
                                    <div className="util">
                                        <div className='icons'>
                                            <Person />&nbsp;{data.likecount}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <ChatSquareDots />&nbsp;&nbsp;{data.viewcount}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
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
                        <div>
                            {sortedJobData.map((data) => (
                                <li key={data.id}>
                                    <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                        <span className="txt_subject">
                                            {data.title}
                                        </span>
                                    </Link>
                                    <div className="util">
                                        <div className='icons'>
                                            <Person />&nbsp;{data.likecount}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <ChatSquareDots />&nbsp;&nbsp;{data.viewcount}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Item6">
                    <div className="Item_main">
                        <div className="Item_main_btn1">기타</div>
                        <Link to={"/Community/boardlist"} className="Item_main_btn2">더보기</Link>
                    </div>
                    <div className="item_detail">
                        <div>
                            {sortedEtcData.map((data) => (
                                <li key={data.id}>
                                    <Link to={"/Community/boarddetail"} className="link" onmousedown="SEARCH.Main.gaEvent(www.naver.com)">
                                        <span className="txt_subject">
                                            {data.title}
                                        </span>
                                    </Link>
                                    <div className="util">
                                        <div className='icons'>
                                            <Person />&nbsp;{data.likecount}
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <ChatSquareDots />&nbsp;&nbsp;{data.viewcount}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="text-box"></div>
                </div>
            </div>
        </div>
    )
}

export default Community
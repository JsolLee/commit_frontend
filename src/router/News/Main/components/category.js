// React
import React, { useState, useEffect } from 'react'

// Routes
import { Link } from 'react-router-dom'

// axios
import axios from 'axios';

// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRightShort } from 'react-bootstrap-icons'

// CSS
import '../CSS/category.css'


function newsCategory() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/news`);
                setData(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const [data, setData] = useState({
        id: '',
        category: '',
        title: '',
        subtitle: '',
        content: '',
        origin: '',
        image: '',
        writer: '',
        viewcount: '',
        likecount: '',
        originDate: '',
        createDate: '',
        deleteYN: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (loading) return <div>데이터를 로딩 중입니다...</div>;
    if (error) return <div>데이터 로딩 중 에러가 발생했습니다.</div>;
    if (!data) return null;

    // 카테고리 별 데이터 분류
    const infotechData = data.filter(item => item.category === "infotech");
    const companyData = data.filter(item => item.category === "company");
    const conferenceData = data.filter(item => item.category === "conference");

    console.log(infotechData)
    console.log(companyData)
    console.log(conferenceData)

    // 전체, 카테고리 별 데이터 최신 순으로 정렬
    const sortAllData = data.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedInfotechData = infotechData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedCompanyData = companyData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    const sortedConferenceData = conferenceData.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

    // 카테고리 별 데이터 최신 순으로 3개 분류
    const latestInfotechData = sortedInfotechData.slice(0, 3);
    const latestCompanyData = sortedCompanyData.slice(0, 3);
    const latestConferenceData = sortedConferenceData.slice(0, 3);
    const latestAllData = sortAllData.slice(0, 3);

    console.log(latestInfotechData)
    console.log(latestCompanyData)
    console.log(latestConferenceData)
    console.log(latestAllData)


    return (
        <section className="NEWS2">
            <h2 className="NEWS2_title">섹션</h2>
            <div className="NEWS2_content">
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>전체</span>
                    </h3>
                    <figure className="img-box2">
                        <Link to={`/news/article/${latestAllData[0].id}`}>
                            <img src={latestAllData[0].image} alt="이미지" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to={`/news/article/${latestAllData[0].id}`}>{latestAllData[0].title}</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestAllData[1].id}`} className="innerlink0">{latestAllData[1].title}</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestAllData[2].id}`} className="innerlink0">{latestAllData[2].title}</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>InfoTech</span>
                        <Link to='category/infotech' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to={`/news/article/${latestInfotechData[0].id}`}>
                            <img src={latestInfotechData[0].image} alt="이미지" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to={`/news/article/${latestInfotechData[0].id}`}>{latestInfotechData[0].title}</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestInfotechData[1].id}`} className="innerlink0">{latestInfotechData[1].title}</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestInfotechData[2].id}`} className="innerlink0">{latestInfotechData[2].title}</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>Company</span>
                        <Link to='category/company' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to={`/news/article/${latestCompanyData[0].id}`}>
                            <img src={latestCompanyData[0].image} alt="이미지" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to={`/news/article/${latestCompanyData[1].id}`}>{latestCompanyData[0].title}</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestCompanyData[1].id}`} className="innerlink0">{latestCompanyData[1].title}</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestCompanyData[2].id}`} className="innerlink0">{latestCompanyData[2].title}</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3 className="sub-tit">
                        <span>Conference</span>
                        <Link to='category/conference' className="innerlink0 more">
                            <ArrowRightShort className='arrow' width={25} height={25}>
                                <span className="blind">더보기</span>
                            </ArrowRightShort>
                        </Link>
                    </h3>
                    <figure className="img-box2">
                        <Link to={`/news/article/${latestConferenceData[0].id}`}>
                            <img src={latestConferenceData[0].image} alt="이미지" />
                        </Link>
                    </figure>
                    <ul className="article-list-grp">
                        <li className="item">
                            <h4 className="article-tit1">
                                <Link to={`/news/article/${latestConferenceData[0].id}`}>{latestConferenceData[0].title}</Link>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestConferenceData[1].id}`} className="innerlink0">{latestConferenceData[1].title}</Link>
                                </p>
                            </h4>
                        </li>
                        <li className="item">
                            <h4 className="article-tit">
                                <p className="para">
                                    <Link to={`/news/article/${latestConferenceData[2].id}`} className="innerlink0">{latestConferenceData[2].title}</Link>
                                </p>
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <br />
        </section>
    )
}

export default newsCategory
import React from 'react';
import { Link } from 'react-router-dom'

// CSS
import "./Home.css"

// Image
import mainImage from '../asset/news/Home01.png'

function Home() {
    return (
        <section className="window">
            <div className="home">
                <div className="company">
                    <h1 className="title">
                        당신 근처의
                        <br />
                        IT 종합 커뮤니티
                    </h1>
                    <p className="service">
                        IT의 모든 것
                        <br />
                        커밋에서 함께해요.
                    </p>
                    <br />
                    <div className="btn">
                        <Link to="/news" className='btn-click'>
                            <div className='btn-click-menu'>
                                뉴스
                            </div>
                        </Link>

                        <Link to="/community" className='btn-click'>
                            <div className='btn-click-menu'>
                                커뮤니티
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="logo">
                    <img className="jinsol" src={mainImage} />
                </div>
            </div>
        </section>
    );
}

export default Home;

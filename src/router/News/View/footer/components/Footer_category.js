
/*
* 기능 : 이미지 넣기, 각 카테고리별 링크 달기
*/

import React from 'react'

const Footer_category = () => {

    return (
        <>
            <div className="col-2">
                {/* <img src="/Acorn_commit/src/main/webapp/assets/images/commit_LOGO.png" alt="LOGO" className="img-fluid"> */}
            </div>

            <div id="footer_news" className="col-3">
                <h5><b>뉴스</b></h5>
                <hr />
                <ul className="list-unstyled">
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>IT 이슈</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>국내 기업 뉴스</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>대외 활동</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>제휴 미디어</a></li>
                </ul>
            </div>

            <div id="footer_community" className="col-3">
                <h5><b>커뮤니티</b></h5>
                <hr />
                <ul className="list-unstyled">
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>이슈/ 신문</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>자소서</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>면접</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>합격자 조언</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>구인/구직</a></li>
                </ul>
            </div>
        </>
    )
}
export default Footer_category

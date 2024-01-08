
/*
* 기능 : 이미지 넣기, 회원가입 링크로 넘어가기, SNS 공유하기
*/

import React from 'react'

import { FaMeta } from "react-icons/fa6"
import { FaInstagram, FaDiscord } from "react-icons/fa"

const Footer_main = () => {

    return (
        <div className="col-12">
            <div className="row justify-content-start">
                <div className="col-2">
                    {/* <img src="/Acorn_commit/src/main/webapp/assets/images/commit_LOGO.png" alt="footer icon" className="img-fluid"> */}
                </div>
                <div className="col-7 align-items-center">
                    <h6><p><b>&#x2B50; &#x1F48E; 국내 최대 IT 커뮤니티 COMMIT! &#x1F48E; &#x2B50;</b></p></h6>
                    <p><small>지금 회원가입을 하시고 선별된 IT 관련 정보와 함께 다양한 사람들과 이이야기를 나누어 보세요. &#x1F60A;</small></p>
                    <p><small><b>COMMIT 통해 실력 + 성장 + 커리어도 COMMIT! &#x1F680;&#x1F680;</b></small></p>
                </div>
                <div id="footer_join" className="col-3 text-center">
                    <input type="button" className="btn btn-primary btn-lg" value="회원가입 하기" />
                    <br />
                    <a href="#" className="btn btn-outline-primary mt-2"><FaInstagram /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#" className="btn btn-outline-info mt-2"><FaDiscord /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#" className="btn btn-outline-danger mt-2"><FaMeta /></a>
                </div>
            </div>
        </div>
    )
}
export default Footer_main

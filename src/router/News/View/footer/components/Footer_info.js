
/*
* 기능 : 각 약관 링크 달기 -> Modals로 나타내기
*/

import React from 'react'

const Footer_info = () => {

    return (
        <div id="footer_info" className="col-md-12">
            <hr />
            <p>
                <small>
                    COMMIT 운영팀: help@commit.com&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;<a href="#" className="link-secondary" style={{ textDecoration: 'none'}}>이용약관</a>&nbsp;&nbsp;|
                    &nbsp;&nbsp;<a href="#" className="link-secondary" style={{ textDecoration: 'none'}}>개인정보처리방침</a>&nbsp;&nbsp; |
                    &nbsp;&nbsp;<a href="#" className="link-secondary" style={{ textDecoration: 'none'}}>청소년보호정책</a>&nbsp;&nbsp; |
                    &nbsp;&nbsp;<a href="#" className="link-secondary" style={{ textDecoration: 'none'}}>문의/신고</a>&nbsp;&nbsp; |
                    &nbsp;&nbsp;<a href="#" className="link-secondary" style={{ textDecoration: 'none'}}>게시글 중단 요청</a>
                </small>
            </p>
            <hr />
        </div>
    )
}
export default Footer_info

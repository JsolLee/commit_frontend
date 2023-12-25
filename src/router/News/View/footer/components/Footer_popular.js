
/*
* 기능 : 실시간 인기글 db에서 불러오기
*/

import React from 'react'

const Footer_popular = () => {

    return (
        <>
            <div id="footer_recommend" className="col-4">
                <h5><b>실시간 인기글</b></h5>
                <hr />
                <ul className="list-unstyled">
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>1 실시간 인기글</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>2 실시간 인기글</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>3 실시간 인기글</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>4 실시간 인기글</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>5 실시간 인기글</a></li>
                    <li><a href="#" className="link-dark" style={{ textDecoration: 'none'}}>6 실시간 인기글</a></li>
                </ul>
            </div>
        </>
    )
}
export default Footer_popular

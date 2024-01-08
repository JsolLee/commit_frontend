
/*
* 기능 : 태그가 될 때만 이 js를 사용하며 나머지는 Comments_view_content와 같음
*/

import React from 'react'

import Comments_view_button from './Comments_view_button'

const Comments_view_content_re = () => {

    return (
        <div className="d-flex" id="domain_comment_2">
            <div className="ml-auto card p-4" style={{ width: '100%' }}>
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <div className="d-flex justify-content-between mb-2">
                            <b><a href="#domain_comment_1" className="fixed-underline">@이진솔</a></b>
                        </div>
                        <br />
                        <div className="d-flex justify-content-between mb-2 fixed-width">
                            <h5 className="card-subtitle text-body-secondary">김사라</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <h7 className="text-text-body-secondary">2023-10-24</h7>
                        </div>
                        <hr className="fixed-width" />
                        <p className="card-text">알겠습니다!</p>
                    </div>
                    <Comments_view_button />
                </div>
            </div>
        </div>
    )
}
export default Comments_view_content_re

/*
* 기능 : 저장된 ID, 날짜(sysdate), 내용을 불러오기
*/

import React from 'react'

import Comments_view_button from './Comments_view_button'

const Comments_view_content = () => {

    return (
        <div className="card p-4" id="domain_comment_1">
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <div className="d-flex justify-content-between mb-2 fixed-width">
                        <h5 className="card-subtitle text-body-secondary">이진솔</h5>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h7 className="text-text-body-secondary">2023-10-23</h7>
                    </div>
                    <hr className="fixed-width" />
                    <p className="card-text">
                        여러분 커밋합시다!
                    </p>
                </div>
                <Comments_view_button />
            </div>
        </div>
    )
}
export default Comments_view_content
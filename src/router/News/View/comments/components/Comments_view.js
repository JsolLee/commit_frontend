import React from 'react'

import Comments_view_button from './view_components/Comments_view_button'
import Comments_view_content from './view_components/Comments_view_content'
import Comments_view_content_re from './view_components/Comments_view_content_re'

const Comments_view = () => {

    return (
        <div className="container mt-4">
            <Comments_view_content />
            <br />
            <Comments_view_content_re />
            <br />
            <div className="d-flex" id="domain_comment_3">
                <div className="ml-auto card p-4" style={{ width: '100%' }}>
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                            <div className="d-flex justify-content-between mb-2">
                                <b><a href="#domain_comment_1" className="fixed-underline">@이진솔</a></b>
                            </div>
                            <br />
                            <div className="d-flex justify-content-between mb-2 fixed-width">
                                <h5 className="card-subtitle text-body-secondary">이진우</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <h7 className="text-text-body-secondary">2023-10-24</h7>
                            </div>
                            <hr className="fixed-width" />
                            <p className="card-text">알겠습니다 팀장님!</p>
                        </div>
                        <Comments_view_button />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comments_view
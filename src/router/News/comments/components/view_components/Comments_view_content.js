import React from 'react'
import { FaThumbsUp, FaBookmark, FaExclamationTriangle } from 'react-icons/fa'
import moment from 'moment'

const Comments_view_content = ({ comment }) => {
    // 날짜 포맷팅
    const formattedDate = moment(comment.createDate).format('YYYY-MM-DD HH:mm:ss')

    return (
        <div className="d-flex justify-content-between mb-3">
            <div>
                <div className="d-flex justify-content-between mb-2 fixed-width">
                    <h5 className="card-subtitle text-body-secondary">{comment.memberNickName}</h5>
                    &nbsp&nbsp&nbsp&nbsp&nbsp
                    <h7 className="text-text-body-secondary">{formattedDate}</h7>
                </div>
                <hr className="fixed-width" />
                <p className="card-text">{comment.content}</p>
            </div>
            <div className="align-self-start">
                <button className="btn btn-outline-success btn-sm me-md-2" type="button"><FaThumbsUp /></button>
                <button className="btn btn-outline-warning btn-sm me-md-2" type="button"><FaBookmark /></button>
                <button className="btn btn-outline-danger btn-sm me-md-2" type="button"><FaExclamationTriangle /></button>
            </div>
        </div>
    )
}

export default Comments_view_content

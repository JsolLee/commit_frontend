
/*
* 기능 : 버튼을 누르면 해당 표시에 맞는 DB에 저장하기
*/

import React from 'react'

import { FaThumbsUp, FaBookmark, FaExclamationTriangle } from 'react-icons/fa';

const Comments_view_button = () => {

    return (
        <div className="align-self-start">
            <button className="btn btn-outline-success btn-sm me-md-2" type="button"><FaThumbsUp /></button>
            <button className="btn btn-outline-warning btn-sm me-md-2" type="button"><FaBookmark /></button>
            <button className="btn btn-outline-danger btn-sm me-md-2" type="button"><FaExclamationTriangle /></button>
        </div>
    )
}
export default Comments_view_button
/*
* 기능 : 댓글 총 개수 보여주기, 페이지 네이션 구분(댓글 10개로 나눔, 3개씩 보여주기), 다음 버튼을 누르면 다음 페이지 네이션으로 넘어가기
*/

import React from 'react'

const Comments_page = () => {

    return (
        <>
            <section className="container border p-3 my-4 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="font-weight-bold text-primary">댓글 총 개수: ---개</span>
                    <div>
                        <a href="#page1" className="btn btn-outline-primary btn-sm mr-1">1</a>
                        &nbsp;&nbsp;
                        <a href="#page2" className="btn btn-outline-primary btn-sm mr-1">2</a>
                        &nbsp;&nbsp;
                        <a href="#page3" className="btn btn-outline-primary btn-sm mr-1">3</a>
                        &nbsp;&nbsp;
                        <a href="#nextPage" className="btn btn-primary btn-sm">다음</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Comments_page
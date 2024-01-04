
/*
* 기능 : 게시 버튼을 누르면 DB에 저장하기
*/

import React from 'react'

import { MdPostAdd } from "react-icons/md";

const Comments_wirte = () => {

    return (
        <section className="container">
            <div className="card-body">
                <form className="form-horizontal">
                    <div className="row">
                        <div className="form-floating col-sm-10">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '30px' }}></textarea>
                            <label htmlFor="floatingTextarea2" style={{ paddingLeft: '2rem' }}>Comment</label>
                        </div>
                        <div className="form-group col-sm-2 text-center">
                            <button type="button" className="btn btn-lg btn-primary btn-sm btn-block replyAddBtn">
                                <MdPostAdd/>&nbsp;&nbsp;게시
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Comments_wirte

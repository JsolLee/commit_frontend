import React from 'react'

import { MdPostAdd } from "react-icons/md"

const Comments_write = ({ onCommentChange, onCommentSubmit, newComment }) => {
    return (
        <section className="container">
            <div className="card-body">
                <form className="form-horizontal" onSubmit={(e) => onCommentSubmit(e)}> 
                    <div className="row">
                        <div className="form-floating col-sm-10">
                            <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: '30px' }}
                                value={newComment}
                                onChange={(e) => onCommentChange(e.target.value)}
                            ></textarea>
                            <label htmlFor="floatingTextarea2" style={{ paddingLeft: '2rem' }}>댓글 달기</label>
                        </div>
                        <div className="form-group col-sm-2 text-center">
                            <button type="submit" className="btn btn-lg btn-primary btn-sm btn-block replyAddBtn">
                                <MdPostAdd />&nbsp;게시
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Comments_write

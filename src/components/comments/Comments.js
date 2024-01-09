import React, { useState } from 'react'

import use_Get_Comment from './hooks/use_Get_Comment'
import use_Post_Comment from './hooks/use_Post_Comment'

import Comments_page from './components/Comments_page'
import Comments_write from './components/Comments_write'
import Comments_view from './components/Comments_view'

const Comments = ({ newsId }) => {
    const { postComment } = use_Post_Comment()

    const { comments, loading: commentsLoading, refetch: refetchComments  } = use_Get_Comment(newsId)

    const [newComment, setNewComment] = useState("")

    const handleCommentSubmit = async (event) => {
        event.preventDefault()
        const sessionId = sessionStorage.getItem("member_id")
        if (!sessionId) {
            alert('로그인이 필요합니다.')
            return
          }
        if (newComment) {
            await postComment({ newsId, content: newComment.trim() })
            setNewComment("")
            refetchComments()
        }
    }

    return (
        <>
            <br />
            <div className="my-5">
                <Comments_page />
                <br />
                <Comments_write
                    onCommentChange={setNewComment}
                    onCommentSubmit={handleCommentSubmit}
                    newComment={newComment}
                />
                <br />
                {commentsLoading ? <p>Loading comments...</p> :
                    <Comments_view comments={comments} />}
            </div>
        </>
    )
}

export default Comments

import React from 'react'

import Comments_view_content from './view_components/Comments_view_content'
import Comments_view_content_re from './view_components/Comments_view_content_re'

const Comments_view = ({ comments }) => {
    // 대댓글을 미리 매핑하여 효율적으로 접근할 수 있도록 준비합니다.
    const repliesMap = comments.reduce((acc, comment) => {
        acc[comment.parentId] = [...(acc[comment.parentId] || []), comment]
        return acc
    }, {})

    return (
        <div className="container mt-4">
            {comments.map((comment) => (
                // 댓글의 고유한 ID를 key로 사용합니다.
                <React.Fragment key={comment.id}> 
                    <div className="card p-4">
                        <Comments_view_content comment={comment} />
                    </div>

                    {/* 대댓글을 효율적으로 렌더링합니다. */}
                    {repliesMap[comment.id]?.map((subComment) => (
                        <div className="d-flex" key={subComment.id} style={{ marginLeft: '20px' }}>
                            <Comments_view_content_re subComment={subComment} />
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Comments_view

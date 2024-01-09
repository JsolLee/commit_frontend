import axios from 'axios'

const use_Post_Comment = () => {
    const postComment = async (commentData) => {
        const sessionId = sessionStorage.getItem("member_id") // 세션 스토리지에서 사용자 ID 가져오기
        if (!sessionId) {
            console.error("User is not logged in")
            return // 로그인하지 않은 경우 작업 중단
        }

        try {
            const response = await axios.post('/news/certification/comments', {
                ...commentData,
                memberId: sessionId // 여기에 memberId를 추가
            })
            return response.data
        } catch (error) {
            console.error("Error posting comment:", error)
        }
    }

    return { postComment }
}

export default use_Post_Comment

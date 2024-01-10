import axios from 'axios'

const use_Post_JobView = () => {

    const postComment = async (scrapData) => {
        // sessionStorage에서 members_id 값을 가져오기
        const membersId = sessionStorage.getItem("members_id")
        if (!membersId) {
            console.error("User is not logged in")
            return // 로그인하지 않은 경우 작업 중단
        }

        try {
            // 서버로 POST 요청을 보내는 부분에서 members_id 값을 사용
            const response = await axios.post(`/${id}/scrap`, {
                ...scrapData,
                membersId: membersId // members_id 값을 사용하여 요청 보냄
            })
            return response.data
        } catch (error) {
            console.error("Error posting comment:", error)
        }

        
    }

    return { postComment }
}

export default use_Post_JobView


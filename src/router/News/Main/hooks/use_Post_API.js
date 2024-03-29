import { useState } from 'react'
import axios from 'axios'

const use_Post_API = () => {
    const [loading2, setLoading] = useState(false)
    const [error2, setError] = useState(null)

    const sendLike = async (id) => {
        try {
            setLoading(true)
            const response = await axios.post(`/news/${id}/like`)
            setLoading(false)
            return response.data 
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    // post : 스크랩 메서드

    // post : 신고 메서드

    return { sendLike, loading2, error2 }
}

export default use_Post_API

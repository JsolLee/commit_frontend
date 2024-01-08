import { useState } from 'react'
import axios from 'axios'

const use_Post_Comment = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const postComment = async (commentData) => {
        try {
            setLoading(true)
            const response = await axios.post(`/news/comments`, commentData)
            setLoading(false)
            return response.data
        } catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    return { postComment, loading, error }
}

export default use_Post_Comment

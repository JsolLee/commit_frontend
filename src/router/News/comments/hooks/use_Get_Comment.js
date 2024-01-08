import { useState, useEffect } from 'react'
import axios from 'axios'

const use_Get_Comment = (newsId) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/news/${newsId}/comments`)
                setComments(response.data)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }

        fetchComments()
    }, [newsId])

    return { comments, loading, error }
}

export default use_Get_Comment

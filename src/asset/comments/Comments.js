import React from 'react'

import Comments_page from './components/Comments_page'
import Comments_wirte from './components/Comments_write'
import Comments_view from './components/Comments_view'

const Comments = () => {

    return (
        <>
            <br/>
            <div className="my-5">
                <Comments_page />
                <br/>
                <Comments_wirte />
                <br/>
                <Comments_view />
            </div>
        </>
    )
}
export default Comments
import React from 'react'

const News_Conference_Main = ({ topNews }) => {

    if (!topNews) { return <div>No top news found</div> }

    return(
        <>
            <h3 className="fw-bold">컨퍼런스</h3>
            <h2 className="pb-2 border-bottom"></h2>

            <div className="list-group-item list-group-item-action">
                <div className="d-flex flex-column align-items-start gap-2">
                    <img src={topNews.image} width="1200" height="500" className="img-thumbnail" alt="뉴스1 썸네일" />
                    <br />
                    <h3 className="fw-bold">{topNews.title}</h3>
                    <p className="text-muted">{topNews.subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default News_Conference_Main
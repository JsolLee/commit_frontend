import React from 'react'
import { Link } from 'react-router-dom'

const News_Category_List = ({ listNews }) => {

    const newsItems = listNews.map((newsItem) => (
        <Link to={`/news/id/${newsItem.id}`} key={newsItem.id} className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-md-1">
                    <img src={newsItem.image} className="img-fluid" alt="news-thumbnail" />
                </div>
                <div className="col-md-10">
                    <div className="fw-bold">{newsItem.title}</div>
                    <p className="small mb-0">{newsItem.subtitle}</p>
                    <p className="small">{newsItem.origin}</p>
                </div>
            </div>
        </Link>
    ))

    return <>{newsItems}</>
}

export default News_Category_List
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// 양쪽 사이드바 = 왼쪽 : 키워드 추천 || 오른쪽 : 공유, 좋아요, 스크랩, 신고
import News_acticle_keyword from './news_view/News_acticle_keyword.js'
import News_acticle_action from './news_view/News_acticle_action.js'

// 뉴스 내용 및 정보
import News_acticle_title from './news_view/News_acticle_title.js'
import News_acticle_subtitle from './news_view/News_acticle_subtitle.js'
import News_acticle_source from './news_view/News_acticle_source.js'
import News_acticle_contents from './news_view/News_acticle_contents.js'
import News_acticle_summary from './news_view/News_acticle_summary.js'

// 관련 뉴스, 최신 뉴스, 인기 뉴스
import News_acticle_related from './news_view/News_acticle_related.js'
import News_acticle_newest from './news_view/News_acticle_newest.js'
import News_acticle_popular from './news_view/News_acticle_popular.js'

// 댓글
import Comments from '../../../components/comments/Comments.js'

const News_View = ({ news, popularNews, latestNews, relatedNews }) => {

  if (!news) { return <div>No news data available</div> }

  const contents = news.content

  // HTML 태그 적용
  const appliedHTML = contents.replace(/<.*?>/g, (match) => `${match}`);

  // 특수 문자 적용
  const appliedSpecialChars = appliedHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

  return (
    <>
      <main className="container my-5">
        <div className="row">
          <div className="col-md-1">
            <News_acticle_keyword />
          </div>

          <div className="col-md-10">
            <News_acticle_summary category={news.category} title={news.title} />
            <News_acticle_title title={news.title} />
            <News_acticle_subtitle subtitle={news.subtitle} />
            <News_acticle_contents image={news.image} title={news.title} content={<div dangerouslySetInnerHTML={{ __html: appliedSpecialChars }} />} />
            <News_acticle_source origin={news.origin} writer={news.writer} originDate={news.originDate} />
          </div>

          <div className="col-md-1">
            <News_acticle_action id={news.id} />
          </div>

          <hr /><hr />
        </div>
      </main>

      <div className="container my-5">
        <News_acticle_related relatedNews={relatedNews} />
        <div className="row my-5">
          <hr /><hr />
          <News_acticle_newest latestNews={latestNews} />
          <News_acticle_popular popularNews={popularNews} />
        </div>
      </div>

      <Comments newsId={news.id} />
    </>
  )
}

export default News_View

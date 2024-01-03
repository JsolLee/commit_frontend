import React from 'react'

const News_Conference_List = () => {

    return(
        <>
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-md-1">
                        <img src={"https://files.itworld.co.kr/ITW_202312_02/m21-GettyImages-1665663585.jpg"} className="img-fluid" alt="뉴스1 썸네일" />
                    </div>
                    <div className="col-md-10">
                        <div className="fw-bold">&ldquo;클라우드 시장 확대하자&rdquo; …KT클라우드, 이노그리드와 협력</div>
                        <p className="small mb-0">KT클라우드가 클라우드 컴퓨팅 전문기업 이노그리드와 &lsquo;클라우드 시장 확대를 위한 공동 …</p>
                        <p className="small">뉴스1</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News_Conference_List
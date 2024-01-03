
/*
* 기능 : 이미지 넣기
*/

import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import LOGO from './Image/commit_LOGO.png'
import Image_1 from './Image/one.jpg'
import Image_2 from './Image/two.jpg'
import Image_3 from './Image/three.jpg'

const Footer_main_member = () => {

    return (
        <div className="col-12">
            <div className="row justify-content-start">
                <div className="col-2">
                    {/* <img src="/Acorn_commit/src/main/webapp/assets/images/commit_LOGO.png" alt="footer icon" className="img-fluid"> */}
                    <img src={LOGO} className="img-fluid" alt='commit logo'/>
                </div>
                <div className="col-10 align-items-center">
                    <Carousel>
                        <Carousel.Item interval={700}>
                            <img src={Image_1} className="img-fluid" alt="First slide" />
                            <Carousel.Caption>
                                <h3>첫 번째 추천 기사</h3>
                                <p>첫 번째 추천 기사입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={700}>
                            <img src={Image_2} className="img-fluid" alt="Second slide" />
                            <Carousel.Caption>
                                <h3>두 번째 추천 기사</h3>
                                <p>두 번째 추천 기사입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={700}>
                            <img src={Image_3} className="img-fluid" alt="Third slide" />
                            <Carousel.Caption>
                                <h3>세 번째 추천 기사</h3>
                                <p>세 번째 추천 기사입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Footer_main_member

// React
import React from 'react';

// Routes
import { Link } from 'react-router-dom'

// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

// CSS
import '../CSS/head.css'

// images
// 중앙 메인 뉴스 이미지 1
// import image1 from '../../../../../asset/News01.jpeg'

// 중앙 메인 뉴스 이미지 2
// import image2 from '../img/img010.jpeg'

// 중앙 메인 뉴스 이미지 3
// import image3 from '../img/img010.jpeg'


// DB

// 중앙 메인 뉴스 Title, Content
// import middleTitle2 form './title/middleTitle02'
// import middleContent2 form './content/middleContent02'

function middleNews() {
    return (
        <div className='middle'>

            <Carousel className='active'>
                <Carousel.Item>
                    <Link to="/mainNews1">
                        <img src={require('../../../../asset/news/News01.jpeg')}
                            style={{ height: "430px" }} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/mainNews2">
                        <img src={require('../../../../asset/news/News01.jpeg')}
                            style={{ height: "430px" }} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/mainNews3">
                        <img src={require('../../../../asset/news/News01.jpeg')}
                            style={{ height: "430px" }} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>

            <Carousel interval={9999999}>
                <Carousel.Item>
                    <iframe width="768" height="282"
                        src={"https://www.youtube.com/embed/-8t0MwoNS2Q?si=hdfybiZXr-i4FzyN"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className='video'>
                    </iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="768" height="282"
                        src={"https://www.youtube.com/embed/q55z_fh-wNg?si=Bn8U2vilvQXdRXkx"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className='video'>
                    </iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="768" height="282"
                        src="https://www.youtube.com/embed/Ev0zck3n-VQ?si=oXNTVNjmc4-jWGKn"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className='video'>
                    </iframe>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default middleNews
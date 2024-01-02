import React from 'react';

// Routes
import { Link } from 'react-router-dom'

// BootStrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../../CSS/head.css'

// 
import PropTypes from 'prop-types'

// Images
// 우측 상단 이미지
import image1 from '../../../../../asset/news/News_Example.jpeg'

// 우측 하단 이미지
// import image2 from '../img/img010.jpeg'

// DB

// 우측상단 뉴스 Title, Content
// import rightTitle1 form './title/rightTitle01'
// import rightContent1 form './content/rightContent01'

// 우측하단 뉴스 Title, Content
// import rightTitle2 form './title/rightTitle02'
// import rightContent2 form './content/rightContent02'

const rightNews2 = ({ title, content }) => {

    rightNews2.propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }

    return (
        <div className='right'>

            <div className='right2'>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <img src={image1} className='img1' />
                    <Card.Body>
                        <Card.Title style={{ fontSize: 18 }}>{title}</Card.Title>
                        <Card.Text>
                            {content}
                        </Card.Text>
                        <Button variant="primary">
                            <Link to="/News/NewsView" style={{ color: 'white' }}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default rightNews2
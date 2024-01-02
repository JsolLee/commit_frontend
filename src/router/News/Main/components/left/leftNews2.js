// React
import React  from 'react';

// Routes
import { Link } from 'react-router-dom'


// BootStrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// 
import PropTypes from 'prop-types'

// CSS
import '../../CSS/head.css'

// Images
// 왼쪽 상단 이미지
import image1 from '../../../../../asset/news/News_Example.jpeg'

// 왼쪽 하단
// import image2 from '../img/img010.jpeg'

// DB

// 좌측상단 뉴스 Title, Content
// import leftTitle1 form './title/leftTitle01'
// import leftContent1 form './content/leftContent01'

// 좌측하단 뉴스 Title, Content
// import leftTitle2 form './title/leftTitle02'
// import leftContent2 form './content/leftContent02'

const LeftNews = ({ title, content }) => {

    LeftNews.propTypes = { title: PropTypes.string.isRequired,
                            content : PropTypes.string.isRequired }

    return (
        <div className='left'>
            <div className='left1'>
                <Card style={{ width: '18rem', height: '22rem'}}>
                    <img src={image1} className='img1' />
                    <Card.Body>
                        <Card.Title style={{fontSize : 18}}>{title}</Card.Title>
                        <Card.Text>
                            {content}
                        </Card.Text>
                        <Button variant="primary">
                            <Link to="/News/NewsView" style={{color : 'white'}}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LeftNews
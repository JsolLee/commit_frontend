import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Table, NavDropdown, Badge, Button, Form, Modal, Card, Alert } from 'react-bootstrap';
import { FaDiscord, FaInstagram, FaFacebook, FaLink, FaRegStar, FaStar, FaRegCopy, FaCalendar } from 'react-icons/fa';
import { IoWarningOutline, IoShareSocialOutline } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import "../CSS/jobView.css";

<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=b9db355519fa67ef41f4ffe1d442d564&libraries=services"></script>

function jobView() {

  // db 값
  const [data, setData] = useState([
    { id: '' },
    { title: '' },
    { career: '' },
    { degree: '' },
    { companyname: '' },
    { location: '' },
    { finishDate_S: '' },
    { finishDate_D: '' },
    { finishDate: '' },
    { example: '서울 관악구 신림로67길 25' }
  ]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/Job/JobView/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  console.log(data)

  // 카카오 api

  const [scraped, setScraped] = useState(false);
  const [show, setShow] = useState(false);
  const companyAddressRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCopyLink = () => {
    const currentURL = window.location.href;
    try {
      navigator.clipboard.writeText(currentURL);
      alert('URL이 복사되었습니다.');
    } catch (error) {
      alert('URL 복사에 실패했습니다.');
    }
  };



  const handleScrapToggle = () => {
    setScraped(!scraped);
  };

  const handleCopyAddress = () => {
    const addressText = companyAddressRef.current.innerText.trim();
    if (addressText) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(addressText)
          .then(() => alert('주소가 복사되었습니다.'))
          .catch((error) => {
            console.error('주소 복사 오류:', error);
            alert('주소 복사에 실패했습니다.');
          });
      } else {
        // navigator.clipboard를 지원하지 않는 브라우저를 위한 대체 방법
        const textarea = document.createElement('textarea');
        textarea.value = addressText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('주소가 복사되었습니다.');
      }
    }
  };

  useEffect(() => {
    // 스크립트 로드
    const script = document.createElement('script');
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b9db355519fa67ef41f4ffe1d442d564&libraries=services&autoload=false";
    document.head.appendChild(script);

    // 스크립트 로딩 완료 후 실행
    script.onload = () => {
      window.initKakaoMap();
    }

    // 빈 의존성 배열은 마운트 후 한 번만 실행됨을 보장합니다.

    console.log(data.location)

    // 카카오 지도 초기화 및 생성 함수
    window.initKakaoMap = () => {
      var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

      var mapContainer = document.getElementById('map'),
        mapOption = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3
        };

      // 지도를 생성합니다    
      var map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 장소 검색 객체를 생성합니다
      var ps = new window.kakao.maps.services.Places();

      // 키워드로 장소를 검색합니다
      console.log(data.location)
      ps.keywordSearch(data.location, placesSearchCB);

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB(datas, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          var bounds = new window.kakao.maps.LatLngBounds();

          for (var i = 0; i < datas.length; i++) {
            displayMarker(datas[i]);
            bounds.extend(new window.kakao.maps.LatLng(datas[i].y, datas[i].x));
          }

          map.setBounds(bounds);
        }
      }

      // 지도에 마커를 표시하는 함수입니다
      function displayMarker(place) {
        var marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x)
        });

        window.kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
        });
      }
    }
  }, [data]);

  // 채용 마감시간 설정
  const formattedCreateDatetime = moment(data.createDate).utcOffset('+00:00').format("YYYY-MM-DD HH:mm");
  const formattedFinishDatetime = data.finishDate ? moment(data.finishDate).utcOffset('+00:00').format("YYYY-MM-DD HH:mm") : null;


  return (
    <Container fluid>
      <Container className='position-relative my-5'>
        <Row xs='auto' className='text-nowrap align-items-center'>
          <Col>
            <Row className='align-items-center'>
              <Col className='pb-1'>
                <div><a>{data.companyname}</a></div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='fs-1'><div>{data.title}</div></Col>
        </Row>
        <Row xs='auto' className='position-absolute end-0 text-secondary'>
          <Col>
            <BsPeopleFill className='mb-1' /> 조회수 216
          </Col>
          <Col>
            <NavDropdown id='share' title={<><IoShareSocialOutline className='mb-1' id='share' /> 공유</>}>
              <NavDropdown.Item href='#action/3.1'>
                <FaDiscord /> Discord
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                <FaInstagram /> Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                <FaFacebook /> Facebook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleCopyLink}>
                <FaLink /> 링크 복사
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col onClick={handleShow} id='report'>
            <IoWarningOutline id='report' className='mb-1' /> 신고
          </Col>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                <IoWarningOutline /> 신고
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                  <Form.Label>신고 사유</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="spam">스팸/홍보/도배</option>
                    <option value="illegal">불법 정보</option>
                    <option value="abuse">욕설/비하/혐오/차별</option>
                    <option value="discomfort">불쾌한 내용</option>
                    <option value="porn">음란물</option>
                    <option value="copyright">저작권</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>상세 내용</Form.Label>
                  <Form.Control as='textarea' />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                취소
              </Button>
              <Button variant='primary' onClick={handleClose}>
                보내기
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
      <Container fluid id='condition' className='borderless'>
        <Row className='justify-content-md-center border-top border-bottom p-3'>
          <Col md="auto" className='mx-5 my-3'>
            <Table>
              <thead>
                <tr><th className='fs-4 p-1'>지원 자격</th></tr>
              </thead>
              <tbody>
                <tr><td className='p-1 ps-3'>경  력 : {data.career}</td></tr>
                <tr><td className='p-1 ps-3'>학  력 : {data.degree}</td></tr>
                <tr><td className='p-1 ps-3'>핵심역량 : React, Vue, Node</td></tr>
              </tbody>
            </Table>
          </Col>
          <Col md="auto" className='mx-5 my-3'>
            <Table>
              <thead>
                <tr><th className='fs-4 p-1'>근무 조건</th></tr>
              </thead>
              <tbody>
                <tr><td className='p-1 ps-3'>고용형태 : 정규직</td></tr>
                <tr><td className='p-1 ps-3'>급  여 : 면접 후 결정</td></tr>
                <tr>
                  <td className='p-1 ps-3'>
                    지  역 : {data.location} <a href='#Company'><Badge bg="secondary">지도 &gt;</Badge></a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container fluid id='condition' className='my-5 d-flex justify-content-md-center'>
        <div className='mx-3 mb-5'>
          <Button variant="primary" size="lg">
            홈페이지 이동 &gt;
          </Button>
        </div>
        <div className='mx-3 mb-5'>
          <Button variant="secondary" size="lg" onClick={handleScrapToggle}>
            {scraped ? <><FaStar className='mb-1' /> Saved </> : <><FaRegStar className='mb-1' /> 스크랩</>}
          </Button>
        </div>
      </Container>

      <div
        className='mb-5'
        style={{
          width: '60%',
          height: '800px',
          backgroundColor: 'rgba(0, 255, 255, 0.2)', // cyan with 30% transparency
          margin: '0 auto', // Center the box
          textAlign: 'center',
        }}
      ></div>

      <Alert key="primary" variant="primary" className='text-center'>
        <FaCalendar className='mb-1' /> 공고 기한 :  {formattedCreateDatetime} ~ {formattedFinishDatetime}
      </Alert>


      <Container id='Company' className='my-5 d-flex -content-'>
        <Card style={{ width: '70rem' }}>
          <Card.Body>
            <Row>
              <Card.Title>회사 소개</Card.Title>
            </Row>
            <Row className>
              <Col>
                <Card.Text className='ms-3'>
                  <Row><Col>회  사</Col></Row>
                  <Row className='ms-1'><Col> - {data.companyname} </Col></Row>
                  <Row><Col>규  모</Col></Row>
                  <Row className='ms-1'><Col> - 중소기업</Col></Row>
                  <Row><Col>email </Col></Row>
                  <Row className='ms-1'><Col> - realBrush@naver.com</Col></Row>
                  <Row><Col>주  소 </Col></Row>
                  <Row className='ms-1'>
                    <Col ref={companyAddressRef}> - {data.location} <FaRegCopy onClick={handleCopyAddress} /></Col>
                  </Row>
                </Card.Text>
              </Col>
              <Col className='pb-3 pe-3'>
                <div className="map" style={{ width: "400px", height: "250px" }} id='map'></div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

    </Container>

  );
}

export default jobView;

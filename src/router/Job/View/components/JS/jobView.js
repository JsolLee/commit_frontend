import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Table, NavDropdown, Badge, Button, Form, Modal, Card, Alert, Nav } from 'react-bootstrap';
import { FaLink, FaRegStar, FaStar, FaRegCopy, FaCalendar } from 'react-icons/fa';
import { SiNaver } from "react-icons/si"
import { RiKakaoTalkFill } from "react-icons/ri"
import { IoWarningOutline, IoShareSocialOutline } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import "../CSS/jobView.css";

function jobView() {

  // db 값
  const [data, setData] = useState({
    id: '',
    title: '',
    career: '',
    degree: '',
    companyname: '',
    location: '',
    location2: '',
    finishDate_S: '',
    finishDate_D: '',
    finishDate: '',
    image: '',
    type: '',
    page: '',
    salary: '',
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/Job/JobView/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const [scraped, setScraped] = useState(false);
  const [show, setShow] = useState(false);

  // 지도 api
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

  // 주소 복사
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

  // 카카오 지도 api 시작
  useEffect(() => {
    // 스크립트 로드
    const script = document.createElement('script');
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b9db355519fa67ef41f4ffe1d442d564&libraries=services&autoload=false";
    document.head.appendChild(script);

    // 스크립트 로딩 완료 후 실행
    script.onload = () => {
      window.initKakaoMap();
    }

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
      ps.keywordSearch(data.location2, placesSearchCB);

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB(datas, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          var bounds = new window.kakao.maps.LatLngBounds();

          // 첫 번째 장소에 대한 마커표시
          if (datas.length > 0) {
            displayMarker(datas[0]);
            bounds.extend(new window.kakao.maps.LatLng(datas[0].y, datas[0].x));
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

    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('b9db355519fa67ef41f4ffe1d442d564')
      }
    }

  }, [data, id]);
  // 카카오 지도 api 끝

  const shareWithKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${data.companyname}`,
          description: `${data.title}`,
          imageUrl: `${data.image}`,
          link: {
            mobileWebUrl: `http://localhost:3000/Job/JobView/${data.id}`,
            webUrl: `http://localhost:3000/Job/JobView/${data.id}`,
          },
        },
      });
    } else {
      alert('카카오 SDK를 로드하지 못했습니다.');
    }
  };

  function share() {
    var url = `http://localhost:3000/Job/JobView/${data.id}`;
    var title = encodeURI(data.title);
    var shareURL = "https://share.naver.com/web/shareView?url=" + url + "&title=" + title;
    document.location = shareURL;
  }

  // 채용 마감시간 설정
  const formattedCreateDatetime = moment(data.createDate).utcOffset('+00:00').format("YYYY-MM-DD HH:mm");
  const formattedFinishDatetime = data.finishDate ? moment(data.finishDate).utcOffset('+00:00').format("YYYY-MM-DD HH:mm") : null;

  // 이미지 정리
  const imageUrls = data.image.split(',');

  const membersId = sessionStorage.getItem("members_id")

  // 스크랩 요청
  // var jobId = data.id

  const sendScrap = () => {
    // 실제 백엔드 엔드포인트로 업데이트해야 합니다.
    const backendUrl = `/Job/JobView/${data.id}`; // 실제 백엔드 엔드포인트로 업데이트하세요
    const payload = {
      JOB_ID: data.id
      // 스크랩 요청을 위한 다른 필요한 데이터를 추가하세요
    };

    // 백엔드로 POST 요청을 보냅니다
    axios.post(backendUrl, payload)
      .then(response => {
        // 필요하다면 응답을 처리합니다
        console.log(response.data);
        setScraped(true); // 작업이 스크랩되었음을 나타내는 상태를 업데이트합니다
      })
      .catch(error => {
        // 에러 발생 시 처리
        if (error.response) {
          // 서버가 응답한 상태 코드 및 데이터
          console.error('Server responded with', error.response.status, 'status');
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          // 요청이 서버에 도달하지 않은 경우
          console.error('Request failed to reach the server');
        } else {
          // 요청 설정에서 에러가 발생한 경우
          console.error('Error setting up the request:', error.message);
        }
      });

    setScraped(!scraped);
  };

  return (
    <Container fluid>
      <Container className='position-relative my-5'>
        <Row xs='auto' className='text-nowrap align-items-center'>
          <Col>
            <Row className='align-items-center'>
              <Col className='pb-1'>
                <div>{data.companyname}</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='fs-1'><div>{data.title}</div></Col>
        </Row>
        <Row xs='auto' className='position-absolute end-0 text-secondary'>
          <Col>
            <BsPeopleFill className='mb-1' /> 조회수 {data.viewcount}
          </Col>
          <Col>
            <NavDropdown id='share' title={<><IoShareSocialOutline className='mb-1' id='share' /> 공유</>}>
              <NavDropdown.Item onClick={shareWithKakao}>
                <RiKakaoTalkFill /> KakaoTalk
              </NavDropdown.Item>
              <NavDropdown.Item onClick={share}>
                <SiNaver /> Naver
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

              </tbody>
            </Table>
          </Col>
          <Col md="auto" className='mx-5 my-3'>
            <Table>
              <thead>
                <tr><th className='fs-4 p-1'>근무 조건</th></tr>
              </thead>
              <tbody>
                <tr><td className='p-1 ps-3'>고용형태 : {data.type}</td></tr>
                <tr><td className='p-1 ps-3'>급  여 : {data.salary}</td></tr>
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



      <div
        className='mb-5'
        style={{
          width: '60%',
          height: 'auto',
          margin: '0 auto', // Center the box
          // textAlign: 'center',
          // border: '1px solid black',
          // backgroundColor: 'rgba(0, 255, 255, 0.2)', // cyan with 30% transparency
          // padding: '5px'
        }}
      >
        {/* 이미지를 매핑하여 출력 */}
        {data.image && data.image.trim() !== '' && imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl.trim()} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
        ))}

        {/*컨텐트*/}
        <div style={{ margin: '0 auto' }}>{data.content}</div>
      </div>

      <Container fluid id='condition' className='my-5 d-flex justify-content-md-center'>
        <Nav>
          {(!membersId) ? (
            <>
              <div className='mx-3 mb-5'>
                <Button variant="primary" size="lg">
                  {/*_blank : 새창, rel : 링크 관계지정 속성 */}
                  <a href={data.page} target="_blank" rel="noopener noreferrer">홈페이지 이동 &gt;</a>
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className='mx-3 mb-5'>
                <Button variant="primary" size="lg">
                  {/*_blank : 새창, rel : 링크 관계지정 속성 */}
                  <a href={data.page} target="_blank" rel="noopener noreferrer">홈페이지 이동 &gt;</a>
                </Button>
              </div>
              <div className='mx-3 mb-5'>
                <Button variant="secondary" size="lg" onClick={sendScrap}>
                  {scraped ? <><FaStar className='mb-1' /> Saved </> : <><FaRegStar className='mb-1' /> 스크랩</>}
                </Button>
              </div>
            </>
          )}
        </Nav>
      </Container>

      <Alert key="primary" variant="primary" className='text-center' style={{ backgroundColor: 'white' }}>
        <FaCalendar className='mb-1' /> 공고 기한 :  {formattedCreateDatetime} ~ {formattedFinishDatetime}
      </Alert>


      <Container id='Company' className='my-5 d-flex -content-'>
        <Card style={{ width: '70rem', margin: '0 auto' }}>
          <Card.Body>
            <Row>
              <Card.Title>회사 소개</Card.Title>
            </Row>
            <Row className>
              <Col>
                <Card.Text className='ms-3'>
                  <Row><Col>회  사</Col></Row>
                  <Row className='ms-1' style={{ height: '40px' }}><Col> - {data.companyname} </Col></Row>
                  <Row><Col>규  모</Col></Row>
                  <Row className='ms-1' style={{ height: '40px' }}><Col> - {data.size}</Col></Row>
                  <Row><Col>홈페이지 주소 </Col></Row>
                  <Row className='ms-1' style={{ height: '40px' }}><Col> - {data.page}</Col></Row>
                  <Row><Col>주  소 </Col></Row>
                  <Row className='ms-1'>
                    <Col ref={companyAddressRef}> - {data.location2} <FaRegCopy onClick={handleCopyAddress} /></Col>
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

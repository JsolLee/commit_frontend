import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css'


const Header = () => {
    const [isNewsSubMenuOpen, setIsNewsSubMenuOpen] = useState(false);
    const [isJobSubMenuOpen, setIsJobSubMenuOpen] = useState(false);
    const [isCommunitySubMenuOpen, setIsCommunitySubMenuOpen] = useState(false);

    const handleNewsSubMenuToggle = () => {
        setIsNewsSubMenuOpen(!isNewsSubMenuOpen);
        setIsCommunitySubMenuOpen(false); // 커뮤니티 서브메뉴 닫기
    };
    const handleJObSubMenuToggle = () => {
        setIsJobSubMenuOpen(!isJobSubMenuOpen);
        setIsCommunitySubMenuOpen(false); // 커뮤니티 서브메뉴 닫기
        setIsNewsSubMenuOpen(false); // 뉴스 서브메뉴 닫기
    };

    const handleCommunitySubMenuToggle = () => {
        setIsCommunitySubMenuOpen(!isCommunitySubMenuOpen);
        setIsNewsSubMenuOpen(false); // 뉴스 서브메뉴 닫기
    };
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-primary nav fw-bolder header" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">COMMIT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="main-menu" onClick={handleNewsSubMenuToggle}>
                            <Link to="/News">뉴스</Link>
                        </Nav.Link>
                        {isNewsSubMenuOpen && (
                            <ul className="sub-menu">
                                <li><Link to="/News/IT">IT 이슈</Link></li>
                                <li><Link to="/News/Company">국내기업</Link></li>
                                <li><Link to="/News/Conference">대외 활동</Link></li>
                            </ul>
                        )}
                        <Nav.Link className="main-menu" onClick={handleJObSubMenuToggle}><Link to="/Job">채용정보</Link></Nav.Link>
                        <Nav.Link className="main-menu" onClick={handleCommunitySubMenuToggle}>
                            <Link to="/Community">커뮤니티</Link>
                        </Nav.Link>
                        {isCommunitySubMenuOpen && (
                            <ul className="sub-menu">
                                <li><Link to="/Community/boardlist">이직/신입</Link></li>
                                <li><Link to="/Community/boardlist">자소서</Link></li>
                                <li><Link to="/Community/boardlist">합격자조언</Link></li>
                                <li><Link to="/Community/boardlist">구인/구직</Link></li>
                            </ul>
                        )}
                    </Nav>
                    <Nav>
                        <Nav.Link href="login">로그인</Nav.Link>
                        <Nav.Link href="join">회원가입</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;

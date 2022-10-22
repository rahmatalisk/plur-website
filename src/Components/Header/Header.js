import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Images/PLUR_Logo_Inverted 1.png'
import banner from '../../Images/Rectangle 1.png'
import './Header.css'
import borderimg from '../../Images/PLUR_Gradient_Line 7.png'
import icon1 from '../../Images/icon1.png'
import icon2 from '../../Images/icon2.png'
import icon3 from '../../Images/icon3.png'
import icon4 from '../../Images/icon4.png'


const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" variant="dark">
                <div className='container nav-icon'>
                    <div className='d-flex justify-content-center align-items-center'><div>
                        <img src={logo} className='logo' alt="" />
                    </div>

                        <div className='left-btn smdisplaynone  d-flex'>
                            <div className='d-inline me-3'>
                                <img src={icon3} alt="" />
                            </div>
                            <div className='d-inline me-3'>
                                <img src={icon2} alt="" />
                            </div>
                            <div className='d-inline me-3'>
                                <img src={icon4} alt="" />
                            </div>
                            <div className='d-inline me-3'>
                                <img src={icon1} alt="" />
                            </div>

                            <button className='NavbarBtn ' style={{ marginTop: '-10px' }}>ENTER DAPP</button></div>

                    </div>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto NavbarContent d-md-none">
                            <Nav.Link href="#features " className='NavbarLink'>HERO</Nav.Link>
                            <Nav.Link href="#features " className='NavbarLink'>COLLECTION</Nav.Link>
                            <Nav.Link href="#features " className='NavbarLink'>ROADMAP</Nav.Link>
                            <Nav.Link href="#features " className='NavbarLink'>COMMUNITY</Nav.Link>
                            <Nav.Link href="#features " className='NavbarLink'>ABOUT US</Nav.Link>
                            <Nav.Link href="#features " className='NavbarLink'>MANIFESTO</Nav.Link>
                            <Nav.Link href="#features " className='NavbarLink'>BLOG</Nav.Link>
                            <Nav.Link href="#features " className='NavbarLink'>FAQ</Nav.Link>
                        </Nav>
                        <Nav>
                            <button className='NavbarBtn d-md-none'>ENTER DAPP</button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className='d-md-block d-none mt-2'>
                <img src={borderimg} className='img-fluid' alt="" />
                <Nav className=" NavbarContent  d-flex container ">
                    <div href="#features " className='NavbarLink'>HERO</div>
                    <div href="#features " className='NavbarLink'>COLLECTION</div>
                    <div href="#features " className='NavbarLink'>ROADMAP</div>
                    <div href="#features " className='NavbarLink'>COMMUNITY</div>
                    <div href="#features " className='NavbarLink'>ABOUT US</div>
                    <div href="#features " className='NavbarLink'>MANIFESTO</div>
                    <div href="#features " className='NavbarLink'>BLOG</div>
                    <div href="#features " className='NavbarLink'>FAQ</div>
                </Nav>
                <img src={borderimg} className='img-fluid' alt="" />
            </div>
            <div className='container headerBanner'>
                <img className=' img-fluid' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Header;
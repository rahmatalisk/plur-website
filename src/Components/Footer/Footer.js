import React from 'react';
import vector from '../../Images/Vector.png'
import './Footer.css'
import logo from '../../Images/PLUR_Logo_Inverted 1.png'
import footerIcon from '../../Images/Group 13.png'
import verticalimg from '../../Images/PLUR_Gradient_Line 7.png'
import icon1 from '../../Images/icon1.png'
import icon2 from '../../Images/icon2.png'
import icon3 from '../../Images/icon3.png'
import icon4 from '../../Images/icon4.png'

const Footer = () => {
    return (
        <footer>
            <img className='mb-5 img-fluid' src={verticalimg} alt="" />
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                        <div className='icon  d-flex align-items-center'>
                            <img   src={vector} alt="" />
                        MANIFESTO
                        </div>
                        <div className='icon  d-flex align-items-center'>
                            <img   src={vector} alt="" />
                            BLOG
                        </div>
                    </div>
                    <div className="col-md-4 logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="ms-auto col-md-4">
                    <div className=' d-flex'>
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
                </div>
            </div>
            <p className='text-center pt-5'>© 2022 PLUR SYSTEMS. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
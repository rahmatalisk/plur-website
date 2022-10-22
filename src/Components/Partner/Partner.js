import React from 'react';
import './Partner.css'
import partnerImg from '../../Images/Ellipse 8.png'
import banner from '../../Images/Rectanglebanner.png'

const Partner = () => {
    return (
        <div className='container partner my-5 py-md-5'>
            <h1 className="partner-text">PARTNERS</h1>
            <div className="row justify-content-between text-center gap-5 mt-5 py-md-5">
                <div className="col-lg-2 col-md-3">
                    <img src={partnerImg} alt="" />
                </div>
                <div className="col-lg-2 col-md-3">
                    <img src={partnerImg} alt="" />
                </div>
                <div className="col-lg-2 col-md-3">
                    <img src={partnerImg} alt="" />
                </div>
                <div className="col-lg-2 col-md-3">
                    <img src={partnerImg} alt="" />
                </div>
                <div className="col-lg-2 col-md-3">
                    <img src={partnerImg} alt="" />
                </div>
            </div>
            <h1 className='partner-text mt-5'>OUR VISION</h1>
            <h2 className='manifesto'>MANIFESTO</h2>
            <p className='manifesto-comment'>“Peace, Love, Unity, Respect on Chain - I am a Plurry and <br /> this is my manifesto”</p>
            <button className="manifestoBtn mx-auto d-block mb-5">READ THE MANIFESTO</button>

            <h1 className='partner-text pt-md-5'>ROADMAP</h1>
            <h1 className="year">2022</h1>
            <img className='my-5 py-md-5 img-fluid' src={banner} alt="" />


            <h1 className="partner-text">PLUR.SYSTEMS</h1>
            <h1 className="partner-purple-text">INFRASTRUCTURE</h1>


            <div className=' mx-auto d-block mb-md-5'>
                <div className='plur-btn d-flex justify-content-center align-items-center '>
                    PLUR APP
                </div>
                <div className='plur-btn d-flex justify-content-center align-items-center'>
                    BONDZIER PROTOCOL
                </div>
                <div className='plur-btn d-flex justify-content-center align-items-center'>
                    GNOSIS
                </div>
            </div>


            {/* plur community */}
            <div className='d-flex justify-content-center align-items-center'>
                <h1 className='partner-text mt-5 mx-2'>JOIN </h1>
                <button className='joinBtn d-none d-md-block'>DISCORD</button>
                <h1 className='partner-text mt-5 mx-2'> PLUR</h1>
                
            </div>
            <h1 className="partner-blue-text mb-5">COMMUNITY</h1>
        </div>
    );
};

export default Partner;
import React from 'react';
import './Collection.css'
import img10 from '../../Images/Rectangle 10.png'

const Collection = () => {
    return (
        <div className='collection container py-md-5 py-lg-5'>
            <h1>PLURRIES</h1>
            <h2>COLLECTION</h2>
            <div className="row mt-md-5 py-md-5 align-items-center">
                <div className="col-md-6 p-2">
                    <img className='img-fluid' src={img10} alt="" />
                </div>
                <div className="col-md-6">
                    <h6>The Plurries are a collection of 8888 quirky fun-loving NFT characters that will enable their holders to help establish the PLUR DAO. They are not only the foundation of the project, but are an integral part of the PLUR.systems market creation platform.</h6>
                    <p>They reside forever on the Ethereum blockchain on PLUR Island, a fictional metaverse of non-stop dev fun, where Plurries get to spend their days Partying,  Learning, Understanding, and Rebuilding to create a thriving  web3 community.</p>
                    <button className='CollectionBtn'>MINT YOUR PLURRIE</button>
                </div>
            </div>
            <div className="row gap-4 gap-md-0 my-5">
                <div className="col-md-3 text-center col-5">
                    <span className='purple-head'>8,888</span> <br />
                    <span>PLURRIES</span>
                </div>
                <div className="col-md-3 text-center col-5">
                    <span className='purple-head'>.ETH</span> <br />
                    <span>BLOCKCHAIN</span>
                </div>
                <div className="col-md-3 text-center col-5">
                    <span className='purple-head'>???</span> <br />
                    <span>SECTION</span>
                </div>
                <div className="col-md-3 text-center col-5">
                    <span className='purple-head'>???</span> <br />
                    <span>SECTION</span>
                </div>
            </div>
        </div>
    );
};

export default Collection;
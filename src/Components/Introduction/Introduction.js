import React from 'react';
import './Introduction.css'

const Introduction = () => {
    return (
        <div className='container introduction my-5 py-md-5 px-md-5'>
            <h1>PLUR.SYSTEMS</h1>
            <h1 className='mb-5'>INTRODUCTION</h1>
            <div className='col-md-6'>
                <p className='pt-md-5'>
                    PLUR.systems is an NFT DAO community made up of The Plurries (PFP NFT Collection), fun-loving flower ravers on the mission to conceptualize, develop, and launch innovative web3 products with the PLUR philosophy in mind.
                </p>
                <span>
                    The first one being the PLUR.systems dApp, a decentralized market creation platform that will focus on permissionless NFT ticketing solutions designed to empower event organizers, connect fans, grow the PLUR ecosystem, and party on-chain forever!
                </span>
            </div>
        </div>
    );
};

export default Introduction;
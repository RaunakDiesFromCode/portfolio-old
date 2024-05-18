import React from 'react';
// import '../components/loader.css';

export default function loading() {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='m-auto text-center'>
                {/* <h1>Loading...</h1> */}
                {/* Add any additional loading indicators or animations here */}
                {/* <span className="loading loading-dots loading-lg"></span> */}
                <div className="loader"></div>
            </div>
        </div>
    );
};

// sudo npm i - D daisyui @latest


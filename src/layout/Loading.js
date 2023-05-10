import React from 'react';
import loader from "../Assets/loading.gif";

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <img src={loader} alt='Loader-img'></img>
        </div>
    );
};

export default Loading;
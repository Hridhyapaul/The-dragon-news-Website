import React from 'react';
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary mt-4 py-3 w-100 rounded-2 bg-opacity-10'>
            <h3 className='mx-3'>QZone</h3>
            <div className='text-center'>
                <img className='w-75' src={QZone1} alt="" />
                <img className='w-75' src={QZone2} alt="" />
                <img className='w-75' src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;
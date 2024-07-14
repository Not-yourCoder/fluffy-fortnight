import React from 'react';
import { logOut } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate()
    const handleLogout = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault(); 
        await logOut(navigate);
    };
    return (
        <div className='p-4'>
            <div className='text-lg font-medium bg-orange-500 text-white text-center border border-orange-500 rounded-lg m-4 p-4 hover:bg-orange-600 transition duration-300'>
                Order is here
            </div>
            <div onClick={handleLogout} className='text-lg font-medium text-orange-500 text-center border border-orange-500 rounded-lg m-4 p-4 hover:text-orange-600 hover:border-orange-600 transition duration-300'>
                Log Out
            </div>
            <div className='text-lg font-medium text-orange-500 text-center border border-orange-500 rounded-lg m-4 p-4'>
                <img src="https://apipics.s3.amazonaws.com/cakes_api/5.jpg" alt="Cake" className='rounded-lg max-w-full h-auto mx-auto' />
            </div>
        </div>
    );
}

export default Order;

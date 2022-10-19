import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-gray-300 flex justify-between items-center px-5'>
            <div className='text-blue-700 text-xl font-extrabold'>
                <Link to={"/home"}>Firebase FRC</Link>
            </div>
            <div className='flex gap-x-3'>
                <Link className='hover:text-blue-400' to={"/home"}>Home</Link>
                <Link className='hover:text-blue-400' to={"/orders"}>Orders</Link>
                <Link className='hover:text-blue-400' to={"/inventory"}>Inventory</Link>
            </div>
            <div>
                <Link className='hover:text-blue-400' to={"/login"}>
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
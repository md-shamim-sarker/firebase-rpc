import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(() => {

            }).catch((error) => {
                console.log(error);
            });
    };
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
            <div className='flex items-center gap-x-3'>
                <span>{user?.displayName || user?.email}</span>
                {
                    user?.uid
                        ? <Link className='hover:text-blue-400'>
                            <button onClick={logOutHandler}>Log Out</button>
                        </Link>
                        : <Link className='hover:text-blue-400' to={"/login"}>
                            <button>Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
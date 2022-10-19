import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
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
                <NavLink to={"/home"}>Firebase FRC</NavLink>
            </div>
            <div className='flex gap-x-3'>
                <NavLink className={({isActive}) => isActive ? 'text-blue-700 underline underline-offset-4' : 'text-slate-700 hover:text-blue-700'} to={"/home"}>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-blue-700 underline underline-offset-4' : 'text-slate-700 hover:text-blue-700'} to={"/orders"}>Orders</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-blue-700 underline underline-offset-4' : 'text-slate-700 hover:text-blue-700'} to={"/inventory"}>Inventory</NavLink>
            </div>
            <div className='flex items-center gap-x-3'>
                <span>{user?.displayName || user?.email}</span>
                {
                    user?.uid
                        ? <NavLink className='hover:text-blue-400'>
                            <button onClick={logOutHandler}>Log Out</button>
                        </NavLink>
                        : <NavLink className='hover:text-blue-400' to={"/login"}>
                            <button>Login</button>
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;
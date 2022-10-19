import React from 'react';
import {FaLock} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center mt-10'>
            <div>
                <h2 className='text-2xl font-bold'>Registration Form</h2>
                <form>
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                    <button className='flex items-center gap-x-2 hover:bg-slate-800 hover:text-slate-50'>
                        <FaLock></FaLock>
                        <span>Register</span>
                    </button>
                </form>
                <div>
                    You already have an account? Please, <Link className='text-blue-600 underline underline-offset-4' to={"/login"}>sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
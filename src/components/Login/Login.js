import React from 'react';
import {FaFacebook, FaGoogle, FaKey} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center mt-10'>
            <div>
                <h2 className='text-2xl font-bold'>Login Form</h2>
                <form>
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                    <button className='flex items-center gap-x-2 hover:bg-slate-800 hover:text-slate-50'>
                        <FaKey></FaKey>
                        <span>Login</span>
                    </button>
                </form>
                <div>
                    You don't have an account? Please, <Link className='text-blue-600 underline underline-offset-4' to={"/register"}>register</Link>
                </div>
                <div>
                    <button className='flex items-center gap-x-2 hover:bg-slate-800 hover:text-slate-50'>
                        <FaGoogle></FaGoogle>
                        <span>Sign in with Google</span>
                    </button>
                    <button className='flex items-center gap-x-2 hover:bg-slate-800 hover:text-slate-50'>
                        <FaFacebook></FaFacebook>
                        <span>Sign in with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, {useContext, useState} from 'react';
import {FaFacebook, FaGoogle, FaKey} from 'react-icons/fa';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const Login = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const {user, emailPasswordSignIn, googleSignIn, facebookSignIn} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleSignInHandler = () => {
        googleSignIn()
            .then((result) => {
                navigate(from, {replace: true});
            }).catch((error) => {
                setMessage(error.message);
            });
    };

    const facebookSignInHandler = () => {
        facebookSignIn()
            .then((result) => {
                navigate(from, {replace: true});
            }).catch((error) => {
                setMessage(error.message);
            });
    };

    const emailPasswordSignInHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailPasswordSignIn(email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                navigate(from, {replace: true});
            })
            .catch((error) => {
                setMessage(error.message);
            });
    };

    return (
        <div className='flex justify-center mt-10'>
            <div>
                <h2 className='text-2xl font-bold'>Login Form</h2>
                <form onSubmit={emailPasswordSignInHandler}>
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
                    <button onClick={googleSignInHandler} className='flex items-center gap-x-2 hover:bg-slate-800 hover:text-slate-50'>
                        <FaGoogle></FaGoogle>
                        <span>Sign in with Google</span>
                    </button>
                    <button onClick={facebookSignInHandler} className='flex items-center gap-x-2 hover:bg-slate-800 hover:text-slate-50'>
                        <FaFacebook></FaFacebook>
                        <span>Sign in with Facebook</span>
                    </button>
                </div>
                <div className='text-red-600'>
                    {
                        user?.uid
                            ? <span>{}</span>
                            : <span>{message}</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
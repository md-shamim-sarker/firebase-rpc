import React, {useContext, useState} from 'react';
import {FaLock} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const Register = () => {
    const [message, setMessage] = useState("");
    const {emailPasswordRegister} = useContext(AuthContext);

    const emailPasswordRegisterHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailPasswordRegister(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setMessage(`${user.email} has successfully created.`);
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className='flex justify-center mt-10'>
            <div>
                <h2 className='text-2xl font-bold'>Registration Form</h2>
                <form onSubmit={emailPasswordRegisterHandler}>
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <button type='submit' className='flex items-center gap-x-2 hover:bg-slate-800 hover:text-slate-50'>
                        <FaLock></FaLock>
                        <span>Register</span>
                    </button>
                </form>
                <div>
                    You already have an account? Please, <Link className='text-blue-600 underline underline-offset-4' to={"/login"}>sign in</Link>
                </div>
                <div className='text-green-700 mt-5'>
                    {message}
                </div>
            </div>
        </div>
    );
};

export default Register;
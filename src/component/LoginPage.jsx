import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>

                <p className="font-semibold text-center pt-5">
                    Dont’t Have An Account ?{" "}
                    <Link className="text-secondary" to="/register">
                        Register
                    </Link>
                </p>
            </fieldset>
        </div>
    );
};

export default LoginPage;
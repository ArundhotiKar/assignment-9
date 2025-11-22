import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (

        <div className='flex items-center justify-center min-h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />

                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Register</button>

                <p className="font-semibold text-center pt-5">
                    Allready Have An Account ?{" "}
                    <Link className="text-secondary" to="/login">
                        Login
                    </Link>
                </p>
            </fieldset>
        </div>

    );
};

export default RegisterPage;
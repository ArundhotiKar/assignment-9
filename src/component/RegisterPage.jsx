import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const RegisterPage = () => {

    const {createUser, setUser}= use  (AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result=>{
            const createdUser = result.user;
            // console.log(createdUser);
            form.reset();
            setUser(createdUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (

        <form onSubmit={handleRegister} className="flex items-center justify-center min-h-screen">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Name" required />

                <label className="label">Photo URL</label>
                <input name="photoURL" type="text" className="input" placeholder="Photo URL" required />

                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" required />

                <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Register
                </button>

                {/* Google Login Button */}
                <button 
                    type="button" 
                    className="btn btn-secondary mt-3 w-full"
                    // onClick={handleGoogleLogin}
                >
                    Continue with Google
                </button>

                <p className="font-semibold text-center pt-5">
                    Already have an account?{" "}
                    <Link className="text-secondary" to="/login">
                        Login
                    </Link>
                </p>
            </fieldset>
        </form>

    );
};

export default RegisterPage;
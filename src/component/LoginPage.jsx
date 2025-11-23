import React, { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    const {logIn, googleLogin, setUser} = use(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        logIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate('/');
        })
        .catch(error=>{
            console.log(error.message);
        })
    };

    // Google Login Function
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleLogin} className='flex items-center justify-center min-h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                />

                <label className="label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                />

                <button type='submit' className="btn btn-neutral mt-4">
                    Login
                </button>

                {/* Google Login */}
                <button
                    type="button"
                    className="btn btn-secondary mt-3 w-full"
                     onClick={handleGoogleLogin}
                >
                    Continue with Google
                </button>

                <p className="font-semibold text-center pt-5">
                    Don’t Have An Account?{" "}
                    <Link className="text-secondary" to="/register">
                        Register
                    </Link>
                </p>
            </fieldset>
        </form>
    );
};

export default LoginPage;

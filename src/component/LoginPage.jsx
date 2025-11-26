import React, { use, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify/unstyled';
import useTitle from "../hooks/useTitle";
import { Eye, EyeOff } from "lucide-react"; // optional icon library


const LoginPage = () => {
    useTitle("ToyTopia | Login");
    const [showPassword, setShowPassword] = useState(false);

    const { logIn, googleLogin, setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                //console.log(loggedUser);
                form.reset();
                toast.success('Login Successful!');
                navigate(location.state || '/');
            })
            .catch(error => {
                //console.log(error.message);
            })
    };

    // Google Login Function
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate(location.state || '/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleForget = () => {
        if (!email) {
            alert("Please enter your email first!");
            return;
        }
        navigate(`/forget-password/${email}`);
    }

    return (
        <form onSubmit={handleLogin} className='flex items-center justify-center min-h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Email</label>
                <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                />

                
                <label className="label">Password</label>

                <div className="relative">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="input w-full pr-12"
                        placeholder="Password"
                        required
                    />

                    {/* Eye Icon Button */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                        {showPassword ? (
                            <EyeOff size={20} className="text-gray-600" />
                        ) : (
                            <Eye size={20} className="text-gray-600" />
                        )}
                    </button>
                </div>


                <button type='submit' className="btn btn-neutral mt-4">
                    Login
                </button>
                <button onClick={handleForget}><p>Forgot Password?</p></button>

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

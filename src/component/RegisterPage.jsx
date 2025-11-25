import React, { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react"; // optional icon library
import { useState } from 'react';
import { toast } from 'react-toastify/unstyled';


const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, setUser, googleLogin } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        const errorMessage = validatePassword(password);
        if (errorMessage) {
            //toast.alert(errorMessage);
            alert(errorMessage);
            return;     // Stop registration
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;

                // Update user profile
                updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        //console.log("Profile updated successfully");
                        setUser({
                            ...createdUser,
                            displayName: name,
                            photoURL: photoURL
                        });
                        form.reset();
                        navigate('/');
                    })
                    .catch(error => {
                        //console.log("Error updating profile:", error.message);
                    });

            })
            .catch(error => {
                //console.log("Error creating user:", error.message);
            });
    }

    // 🔥 Google Login Function
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


    const validatePassword = (password) => {
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!uppercase.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!lowercase.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }

        return ""; // valid
    };



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
                <div className="relative">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="input w-full pr-12"
                        placeholder="Password"
                        required
                    />

                    {/* Eye Button */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Register
                </button>

                {/* Google Login Button */}
                <button
                    type="button"
                    className="btn btn-secondary mt-3 w-full"
                    onClick={handleGoogleLogin}
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
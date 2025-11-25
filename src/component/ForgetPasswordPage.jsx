import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import app from '../Firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const ForgetPasswordPage = () => {
    const { email } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Please provide a valid email.');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Password reset email sent successfully!');
                navigate('/login');
            })
            .catch((error) => {
                console.error('Error sending password reset email:', error);
                toast.error(`Error: ${error.message}`);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='flex items-center justify-center min-h-screen'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">Email</label>
                    <input
                        defaultValue={email}
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                        required
                    />
                    <button type='submit' className="btn btn-neutral mt-4 w-full">
                        Send Reset Link
                    </button>
                </fieldset>
            </form>
            <ToastContainer position="top-center" autoClose={3000} />
        </>
    );
};

export default ForgetPasswordPage;

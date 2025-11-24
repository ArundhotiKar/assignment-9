import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        // Implement logout functionality here
        console.log('Logout clicked');

        logOut()
        .then(() => {
            alert('User logged out');
        }).catch((error) => {
            console.log('Logout error:', error);
        });
    }
    return (
        <div className='flex items-center justify-between'>

            {/* Logo section */}
            <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-3xl">🧸</span>
                <h1 className="text-2xl font-bold text-[#FF6F61]">
                    Toy<span className="text-[#7FB3FF]">Topia</span>
                </h1>
            </div>

            <div>
                <NavLink to="/" className="text-xl">Home</NavLink>
                <NavLink to="/myprofile" className="text-xl ml-5"> My Profile </NavLink>
            </div>

            <div>
                {user ? (
                    <div className="login-btn flex gap-5">
                        <img src={userIcon} alt="" />
                        <button onClick={handleLogout} className="btn text-white text-xl bg-black px-10">Logout</button>
                    </div>
                ) : (
                    <div className="login-btn flex gap-5">
                        <img src={userIcon} alt="" />
                        <Link to="/login" className="btn text-white text-xl bg-black px-10">Login</Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Navber;
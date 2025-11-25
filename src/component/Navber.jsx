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
                <NavLink to="/" className="text-xl text-blue-500">Home</NavLink>
                <NavLink to="/myprofile" className="text-xl ml-5 text-blue-500"> My Profile </NavLink>
            </div>

            <div>
                {user ? (
                    <div className="login-btn flex items-center gap-6  p-4 rounded-xl">

                        <div className="relative group w-fit">

                            {/* Profile Image */}
                            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
                                <img
                                    src={user?.photoURL || userIcon}
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Tooltip on Hover */}
                            <span
                                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 
               bg-amber-700 text-white text-xs px-3 py-1 rounded-md 
               opacity-0 group-hover:opacity-100 
               transition-all duration-200 whitespace-nowrap">
                                {user?.displayName || "User Name"}
                            </span>

                        </div>


                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 bg-black text-white text-lg rounded-full shadow hover:bg-gray-800 transition-all"
                        >
                            Logout
                        </button>

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
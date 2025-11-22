import React from "react";

const ProfilePage = ({ user, handleLogout }) => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] flex justify-center items-center px-4 py-10">

      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full text-center border border-gray-200">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-[#7FB3FF] shadow-md object-cover"
          />
        </div>

        {/* User Name */}
        <h1 className="mt-6 text-3xl font-extrabold text-gray-800">
          {user?.displayName || "Guest User"}
        </h1>

        {/* User Email */}
        <p className="text-gray-600 mt-2 text-lg">
          {user?.email || "No email available"}
        </p>

        {/* Divider */}
        <div className="my-6 border-b border-gray-200"></div>

        {/* Profile Information Block */}
        <div className="text-left space-y-4">
          <div className="bg-[#E8F1FF] p-4 rounded-xl border border-[#C9DFFF] shadow-sm">
            <h2 className="text-lg font-semibold text-[#385898]">Account Type:</h2>
            <p className="text-gray-700">{user ? "Standard User" : "Guest"}</p>
          </div>

          <div className="bg-[#FFF0D9] p-4 rounded-xl border border-[#FFD8A8] shadow-sm">
            <h2 className="text-lg font-semibold text-[#D17A00]">Member Since:</h2>
            <p className="text-gray-700">2025</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button className="w-full py-3 bg-[#7FB3FF] text-white rounded-xl font-semibold shadow-md hover:bg-[#5B97F5] transition">
            Edit Profile
          </button>

          {user && (
            <button
              onClick={handleLogout}
              className="w-full py-3 bg-[#FF6F61] text-white rounded-xl font-semibold shadow-md hover:bg-[#E85A4F] transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

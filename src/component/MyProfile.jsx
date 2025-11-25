import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const MyProfile = () => {
    const { user, setUser } = use(AuthContext);

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenForm = () => {
        console.log('Before Clicked: ', isOpen)
        setIsOpen(!isOpen);
        console.log('After Clicked: ', isOpen)
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            alert('Profile updated successfully!');
        }).catch((error) => {
            console.error('Error updating profile:', error);
            alert('Error updating profile: ' + error.message);
        });
    }

    return (
        <div className="flex flex-col items-center mt-10 bg-white shadow-lg rounded-2xl p-6 w-80 mx-auto">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-500 mb-4">
                <img
                    src={user?.photoURL || "https://i.ibb.co/m57yTZfn/login.jpg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{user?.displayName || "Your Name"}</h2>
            <p className="text-gray-500 text-sm">{user?.email || "your.email@example.com"}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300" onClick={handleOpenForm}>
                Update Profile
            </button>

            {
                isOpen && (
                    <form onSubmit={handleUpdateProfile} className='flex items-center justify-center mt-5'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                            <label className="label">Name</label>
                            <input
                                defaultValue={user?.displayName}
                                type="text"
                                name="name"
                                className="input"
                                placeholder="Name"
                                required
                            />

                            <label className="label">PhotoURL</label>
                            <input
                                defaultValue={user?.photoURL}
                                type="text"
                                name="photoURL"
                                className="input"
                                placeholder="PhotoURL"
                                required
                            />

                            <button type='submit' className="btn btn-neutral mt-4">
                                Update
                            </button>

                        </fieldset>
                    </form>

                )
            }
        </div>

    );
};

export default MyProfile;
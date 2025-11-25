import React from 'react';
import { useParams } from 'react-router-dom';
import { educationalToys } from './EducationalToy';

const ViewMoreEdu = () => {
    const {id} =useParams();

    const toy = educationalToys.find(item => item.id === id);

    if (!toy) {
        return <div className="text-center mt-10 text-lg">Toy not found</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{toy.toyName}</h2>
            <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p><strong>Skill:</strong> {toy.skill}</p>
            <p><strong>Price:</strong> ${toy.price}</p>
            <p><strong>Rating:</strong> ⭐ {toy.rating}</p>
            <p className="mt-4 text-gray-700">{toy.description}</p>
        </div>
    );
};

export default ViewMoreEdu;
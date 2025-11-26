import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from "../hooks/useTitle";


const ViewMorePage = () => {
    useTitle("ToyTopia | View More Toy Info");
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState(null);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(service => service.toyId === Number(id));
                setServiceDetails(found);
            })
            .catch(error => console.error('Error fetching services:', error));
    }, [id]);

    if (!serviceDetails) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg transform transition hover:scale-105 duration-300 my-5">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">{serviceDetails.toyName}</h2>

            <div className="overflow-hidden rounded-xl mb-4">
                <img
                    src={serviceDetails.pictureURL}
                    alt={serviceDetails.toyName}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-green-600">${serviceDetails.price}</span>
                <span className="text-sm text-gray-500">Available: {serviceDetails.availableQuantity}</span>
            </div>

            <div className="flex items-center mb-4">
                <span className="text-yellow-400 mr-2">⭐</span>
                <span className="font-medium text-gray-700">{serviceDetails.rating}</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">{serviceDetails.description}</p>

            {/* Seller Info */}
            <div className="border-t pt-3 mt-3 text-gray-700">
                <p className="font-semibold">Seller: {serviceDetails.sellerName}</p>
                <p className="text-sm text-gray-500">Contact: {serviceDetails.sellerEmail}</p>
            </div>
        </div>


    );
};

export default ViewMorePage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewMorePage = () => {
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
        <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{serviceDetails.toyName}</h2>
            <img
                src={serviceDetails.pictureURL}
                alt={serviceDetails.toyName}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p><strong>Price:</strong> ${serviceDetails.price}</p>
            <p><strong>Available Quantity:</strong> {serviceDetails.availableQuantity}</p>
            <p><strong>Rating:</strong> ⭐ {serviceDetails.rating}</p>
            <p className="mt-2">{serviceDetails.description}</p>
        </div>
    );
};

export default ViewMorePage;

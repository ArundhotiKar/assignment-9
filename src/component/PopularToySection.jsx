import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularToySection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div className='mt-10'>
            <div className='text-blue-400 text-2xl font-semibold text-center'>
                Popular Toy Section
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-6'>
                {
                    services.map(service => (
                        <div
                            key={service.toyId}
                            className="group card bg-white shadow-md border border-gray-200 rounded-xl
                                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >

                            <figure className="relative h-40 w-full overflow-hidden rounded-t-xl">
                                <img
                                    src={service.pictureURL}
                                    alt={service.toyName}
                                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                                />
                                <span className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-xs font-semibold shadow">
                                    ⭐ {service.rating}
                                </span>
                            </figure>

                            <div className="card-body p-4 space-y-2">
                                <h2 className="text-md font-semibold text-gray-800 group-hover:text-blue-500 truncate">
                                    {service.toyName}
                                </h2>

                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p>Available: <span className="font-medium text-gray-800">{service.availableQuantity}</span></p>
                                    <p className="font-bold text-blue-600">${service.price}</p>
                                </div>

                                <Link
                                    to={`/viewmore/${service.toyId}`}
                                    className="btn btn-primary btn-sm w-full rounded-full mt-2 block text-center"
                                >
                                    View More
                                </Link>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularToySection;

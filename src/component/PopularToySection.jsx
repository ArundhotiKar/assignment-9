import React, { useEffect, useState } from 'react';

const PopularToySection = () => {
    const [servises, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    //console.log(servises);

    return (
        <div className='mt-10'>
            <div className='text-blue-400 text-2xl font-semibold text-center'>Popular Toy Section</div>

            <div className='grid grid-cols-3 gap-6 mt-6'>
                {
                    servises.map(service => (
                        <div key={service.toyId} className="card bg-base-100 shadow-md border">
                            
                            {/* Thumbnail */}
                            <figure className="h-48 w-full">
                                <img
                                    src={service.pictureURL}
                                    alt={service.toyName}
                                    className="h-full w-full object-cover"
                                />
                            </figure>

                            {/* Card Body */}
                            <div className="card-body">
                                <h2 className="card-title text-lg font-semibold">
                                    {service.toyName}
                                </h2>

                                <p className="text-sm">Rating: ⭐ {service.rating}</p>
                                <p className="text-sm">Available: {service.availableQuantity}</p>
                                <p className="text-sm font-bold text-blue-500">
                                    Price: ${service.price}
                                </p>

                                <div className="card-actions justify-end mt-2">
                                    <button className="btn btn-primary btn-sm">
                                        View More
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularToySection;
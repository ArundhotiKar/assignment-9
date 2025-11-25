import React from 'react';
import { trendingToys } from './TrendingToys';
import { Link, NavLink } from 'react-router-dom';

const TrendingToysSection = () => {
    return (
        <div className='mt-10'>
            <div className='text-blue-400 text-2xl font-semibold text-center'>Trending Toys</div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-6'>
                {
                    trendingToys.map(service => (
                        <div
                            key={service.toyId}
                            className="card bg-base-100 shadow-lg border rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* Thumbnail */}
                            <figure className="h-48 w-full overflow-hidden rounded-t-xl">
                                <img
                                    src={service.pictureURL}
                                    alt={service.toyName}
                                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
                                />
                            </figure>

                            {/* Card Body */}
                            <div className="card-body space-y-2">

                                {/* Title + Rating Badge */}
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">{service.toyName}</h2>
                                    <span className="badge badge-secondary text-xs py-2">
                                        ⭐ {service.rating}
                                    </span>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className="text-sm text-gray-600">
                                        Available: <span className="font-medium">{service.availableQuantity}</span>
                                    </p>

                                    <p className="text-lg font-bold text-blue-600">
                                        ${service.price}
                                    </p>
                                </div>

                                {/* Link */}
                                <Link to={`/viewmoretrend/${service.toyId}`} className="btn btn-primary btn-sm w-full mt-2">
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

export default TrendingToysSection;
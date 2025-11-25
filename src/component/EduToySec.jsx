import React from 'react';
import { educationalToys } from './EducationalToy';
import { Link, NavLink } from 'react-router-dom';

const EduToySec = () => {


    return (
        <div className='mt-10'>
            <div className='text-blue-400 text-2xl font-semibold text-center'>Educational Toys</div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-6'>
                {
                    educationalToys.map(service => (
                        <div
                            key={service.id}
                            className="group card bg-white shadow-md border border-gray-200 rounded-xl 
        hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                        >

                            {/* Thumbnail */}
                            <figure className="relative h-32 w-full overflow-hidden rounded-t-xl">
                                <img
                                    src={service.pictureURL}
                                    alt={service.toyName}
                                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                                />

                                {/* Skill Badge */}
                                <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm">
                                    {service.skill}
                                </div>
                            </figure>

                            {/* Card Body */}
                            <div className="card-body p-3 space-y-1">

                                {/* Toy Name */}
                                <h2 className="text-md font-semibold text-gray-800 group-hover:text-green-600 truncate">
                                    {service.toyName}
                                </h2>

                                <div className='flex'>
                                    {/* Rating */}
                                    <p className="text-xs text-yellow-500 font-semibold">
                                        ⭐ {service.rating}
                                    </p>

                                    {/* Price */}
                                    <p className="text-sm font-bold text-green-600">
                                        ${service.price}
                                    </p>
                                </div>

                                {/* View More Button */}
                                <Link
                                    to={`/viewmoreforedu/${service.id}`}
                                    className="btn btn-success btn-sm w-full rounded-full mt-2 block text-center"
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

export default EduToySec;
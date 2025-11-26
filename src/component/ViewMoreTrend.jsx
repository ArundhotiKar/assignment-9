import React from 'react';
import { trendingToys } from './TrendingToys';
import { useParams } from 'react-router-dom';
import useTitle from "../hooks/useTitle";


const ViewMoreTrend = () => {
    useTitle("ToyTopia | View More Trending Toy Info");
    const { id } = useParams();

    const toy = trendingToys.find(item => item.toyId === id);

    if (!toy) {
        return <div className="text-center mt-10 text-lg">Toy not found</div>;
    }
    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg transform transition hover:scale-105 duration-300 my-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">{toy.toyName}</h2>

            <div className="overflow-hidden rounded-xl mb-4">
                <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {toy.skill && <p className="text-gray-700 mb-2"><strong>Skill:</strong> {toy.skill}</p>}

            <p className="text-green-600 font-semibold mb-2"><strong>Price:</strong> ${toy.price}</p>

            <div className="flex items-center mb-4">
                <span className="text-yellow-400 mr-2">⭐</span>
                <span className="font-medium text-gray-700">{toy.rating}</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">{toy.description}</p>

            {/* Seller Info */}
            {toy.sellerName && toy.sellerEmail && (
                <div className="border-t pt-3 mt-3 text-gray-700">
                    <p className="font-semibold">Seller: {toy.sellerName}</p>
                    <p className="text-sm text-gray-500">Contact: {toy.sellerEmail}</p>
                </div>
            )}

            
        </div>

    );
};

export default ViewMoreTrend;
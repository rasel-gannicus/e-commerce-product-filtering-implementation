"use client";
import { Product } from '@/utils/types';
import ProductCard from './ProductCard';
import { useState } from 'react';
import { BsListUl } from 'react-icons/bs';
import { LuGrid2X2 } from "react-icons/lu";

const ProductGrid = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState('relevance');
    const [itemsPerPage, setItemsPerPage] = useState('12');

    const products: Product[] = [
        {
            id: '1',
            name: 'XPS 13 Plus Ultrabook',
            brand: 'Dell',
            price: 1099.99,
            oldPrice: 1299.99,
            image: 'https://placehold.co/600x400?text=Product',
            rating: 4.5,
            reviews: 48,
            specs: 'Intel Core i7, 16GB RAM, 512GB SSD',
            sale: true,
            new: true
        },
        {
            id: '2',
            name: 'Galaxy S24 Ultra',
            brand: 'Samsung',
            price: 1299.99,
            image: 'https://placehold.co/600x400?text=Product',
            rating: 5,
            reviews: 126,
            specs: 'Snapdragon 8 Gen 3, 12GB RAM, 256GB Storage'
        },
    ];

    return (
        <div className="w-full md:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div>
                            <span className="text-gray-600">Showing 1-12 of 24 products</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-gray-600 whitespace-nowrap">Sort by:</label>
                            <select
                                className="form-select border rounded-md py-1 px-2"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="relevance">Relevance</option>
                                <option value="price_low">Price: Low to High</option>
                                <option value="price_high">Price: High to Low</option>
                                <option value="newest">Newest First</option>
                                <option value="rating">Rating</option>
                                <option value="popularity">Popularity</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-gray-600">View:</label>
                        <div className="flex">
                            <button
                                className={`px-3 py-1 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'} rounded-l-md hover:bg-blue-200`}
                                onClick={() => setViewMode('grid')}
                            >
                                <LuGrid2X2 />
                            </button>
                            <button
                                className={`px-3 py-1 ${viewMode === 'list' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'} rounded-r-md hover:bg-blue-200`}
                                onClick={() => setViewMode('list')}
                            >
                                <BsListUl />
                            </button>
                        </div>
                        <label className="text-gray-600 ml-2">Show:</label>
                        <select
                            className="form-select border rounded-md py-1 px-2"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(e.target.value)}
                        >
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                            <option value="48">48</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
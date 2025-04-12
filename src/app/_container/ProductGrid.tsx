"use client";
import { useGetProductsQuery } from '@/Redux/services/productApi';
import { useMemo, useState } from 'react';
import { BsListUl } from 'react-icons/bs';
import { LuGrid2X2 } from "react-icons/lu";
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/app/store';

const ProductGrid = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState('relevance');
    const [itemsPerPage, setItemsPerPage] = useState('12');
    const [currentPage, setCurrentPage] = useState(1);

    const { data: productsData } = useGetProductsQuery(undefined);
    const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);
     const selectedBrands = useSelector((state: RootState) => state.filter.selectedBrands);

    const filteredProducts = useMemo(() => {
        if (!productsData?.products) return [];

        let products = [...productsData.products];
        console.log(products);

        // Apply category filter
        if (selectedCategories.length > 0) {
            products = products.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        // Apply brand filter
        if (selectedBrands.length > 0) {
            products = products.filter(product =>
                selectedBrands.includes(product.brand)
            );
        }

        // Apply sorting
        switch (sortBy) {
            case 'price_low':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price_high':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                products.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
                break;
            case 'rating':
                products.sort((a, b) => b.rating - a.rating);
                break;
            case 'popularity':
                products.sort((a, b) => b.reviews - a.reviews);
                break;
            default: // 'relevance'
                // Keep original order
                break;
        }

        return products;
    }, [productsData?.products, selectedCategories, sortBy, selectedBrands]);

    // Calculate pagination values
    const totalProducts = filteredProducts.length;
    const itemsPerPageNumber = parseInt(itemsPerPage);
    const totalPages = Math.ceil(totalProducts / itemsPerPageNumber);
    const startIndex = (currentPage - 1) * itemsPerPageNumber;
    const endIndex = Math.min(startIndex + itemsPerPageNumber, totalProducts);

    // Get current page products
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    // Handle page change
    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(e.target.value);
        setCurrentPage(1); // Reset to first page when changing items per page
    };

    return (
        <div className="w-full md:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div>
                            <span className="text-gray-600">
                                Showing {startIndex + 1}-{endIndex} of {totalProducts} products
                            </span>
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
                            onChange={handleItemsPerPageChange}
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
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex justify-center gap-2">
                    <button
                        className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-blue-200 disabled:opacity-50"
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="px-3 py-1">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-blue-200 disabled:opacity-50"
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
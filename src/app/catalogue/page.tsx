"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
    id: number;
    image: string;
    title: string;
    rating: number;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: 1, image: '/pr-1.jpg', title: 'Product 1', rating: 4.5, price: 29.99, category: 'Indoor' },
    { id: 2, image: '/pr-1.jpg', title: 'Product 2', rating: 4.9, price: 239.99, category: 'Outdoor' },
    { id: 3, image: '/pr-1.jpg', title: 'Product 3', rating: 4.7, price: 249.99, category: 'Sports' },
    { id: 4, image: '/pr-1.jpg', title: 'Product 4', rating: 4.6, price: 1022.99, category: 'Womens' },
    { id: 5, image: '/pr-1.jpg', title: 'Product 5', rating: 4.2, price: 2009.99, category: 'Mens' },
    { id: 6, image: '/pr-1.jpg', title: 'Product 6', rating: 3.9, price: 10000.99, category: 'Kids' },
    { id: 7, image: '/pr-1.jpg', title: 'Product 7', rating: 3.5, price: 22319.99, category: 'Womens' },
    { id: 8, image: '/pr-1.jpg', title: 'Product 8', rating: 3.8, price: 22319.99, category: 'Outdoor' },
    { id: 9, image: '/pr-1.jpg', title: 'Product 9', rating: 4.0, price: 2921.99, category: 'Kids' },
    { id: 10, image: '/pr-1.jpg', title: 'Product 10', rating: 5.0, price: 429.99, category: 'Mens' },
    { id: 11, image: '/pr-1.jpg', title: 'Product 11', rating: 4.1, price: 829.99, category: 'Kids' },
    { id: 12, image: '/pr-1.jpg', title: 'Product 12', rating: 3.2, price: 999.99, category: 'Womens' },
]

const categories = ['Womens', 'Mens', 'Kids', 'Indoor', 'Outdoor', 'Sports'];
const priceRanges = [
    { label: '$10 - $100', min: 10, max: 100 },
    { label: '$100 - $1k', min: 100, max: 1000 },
    { label: '$1k - $2k', min: 1000, max: 2000 },
    { label: '$3k - $5k', min: 3000, max: 5000 },
    { label: '$5k - $10k', min: 5000, max: 10000 },
    { label: '$10k - $20k', min: 10000, max: 20000 },
    { label: '$20k - $40k', min: 20000, max: 40000 },
    { label: 'All', min: 1, max: 1000000000 },
];

const Catalogue = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number, max: number } | null>(null);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handlePriceRangeChange = (range: { min: number, max: number }) => {
        setSelectedPriceRange((prev) =>
            prev && prev.min === range.min && prev.max === range.max ? null : range
        );
    };

    const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategories.length ? selectedCategories.includes(product.category) : true;
        const priceMatch = selectedPriceRange ? (product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max) : true;
        return categoryMatch && priceMatch;
    });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Catalogue</h1>
            <div className="flex">
                <aside className="w-1/6 p-4 border-r">
                    <h2 className="text-xl font-bold mb-4">Categories</h2>
                    {categories.map((category) => (
                        <div key={category} className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    className="mr-2"
                                />
                                {category}
                            </label>
                        </div>
                    ))}
                    <h2 className="text-xl font-bold mt-6 mb-4">Price Range</h2>
                    {priceRanges.map((range) => (
                        <div key={range.label} className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="priceRange"
                                    checked={selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max}
                                    onChange={() => handlePriceRangeChange(range)}
                                    className="mr-2"
                                />
                                {range.label}
                            </label>
                        </div>
                    ))}
                </aside>
                
                <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center ml-16">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <div className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
                                <Image src={product.image} width={500} height={400} alt={product.title} className="object-cover mb-2" />
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <div className="flex items-center">
                                    <span className="text-yellow-500">
                                        {'★'.repeat(Math.floor(product.rating))}
                                        {'☆'.repeat(5 - Math.floor(product.rating))}
                                    </span>
                                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                                </div>
                                <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalogue;
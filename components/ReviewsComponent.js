"use client";

import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    feedback: 'Excellent product! Highly recommended.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    feedback: 'Great value for money. Very satisfied with my purchase.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    rating: 3,
    feedback: 'Decent product, but could use some improvements.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Emily Brown',
    rating: 5,
    feedback: 'Absolutely love it! Exceeded my expectations.',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Alex Wilson',
    rating: 4,
    feedback: 'Very good product. Would buy again.',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
    <div className="flex items-center mb-4">
      <img
        src={review.avatar}
        alt={`${review.name}'s avatar`}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold">{review.name}</h3>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${index < review.rating ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600">{review.feedback}</p>
  </div>
);

const ReviewsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('latest');
  const reviewsPerPage = 3;

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'highest') return b.rating - a.rating;
    if (sortBy === 'lowest') return a.rating - b.rating;
    return b.id - a.id; // 'latest' by default
  });

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-[#333333] font-bold mb-6 text-center" >Feedbacks</h2>
      <div className="mb-4 flex justify-end">
        <label htmlFor="sortBy" className="mr-2 text-gray-700">Sort by:</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="latest">Latest</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </button>
        <span className="mx-4 text-gray-700">
          Page {currentPage} of {Math.ceil(reviews.length / reviewsPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(reviews.length / reviewsPerPage)}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewsComponent;

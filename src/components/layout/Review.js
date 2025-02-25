import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Review.module.css';

const reviews = [
  { id: 1, name: 'Alex Wilson', rating: 4, text: 'Very good product. Would buy again.', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Emily Brown', rating: 5, text: 'Absolutely love it! Exceeded my expectations.', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'Mike Johnson', rating: 3, text: 'Decent product, but could use some improvements.', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'Sarah Lee', rating: 5, text: 'Perfect! Just what I needed.', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 5, name: 'John Doe', rating: 4, text: 'Great quality for the price.', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
];

const FeedbackComponent = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const paginatedReviews = reviews.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.feedbackTitle}>Feedbacks</h2>
      <div className={styles.feedbackGrid}>
        {paginatedReviews.map((review) => (
          <Card key={review.id} className={styles.feedbackCard}>
            <div className={styles.reviewHeader}>
              <img src={review.image} alt={review.name} className={styles.reviewImage} />
              <span className={styles.reviewName}>{review.name}</span>
            </div>
            <Rating name="read-only" value={review.rating} readOnly />
            <CardContent className={styles.reviewText}>{review.text}</CardContent>
          </Card>
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Button variant="contained" disabled={page === 1} onClick={() => setPage(page - 1)}>
          &#8592;
        </Button>
        <span className={styles.pageInfo}>Page {page} of {totalPages}</span>
        <Button variant="contained" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          &#8594;
        </Button>
      </div>
    </div>
  );
};

export default FeedbackComponent;

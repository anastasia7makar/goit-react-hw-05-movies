import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsRequest } from 'services/moviesApi';
import { ReviewsList } from './Reviews.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const reviewsInfo = async () => {
      if (!movieId) {
        return;
      }

      const resp = await movieReviewsRequest(movieId);

      const {
        data: { results },
      } = resp;

      setReviews(results);
      setIsLoading(false);
    };

    reviewsInfo();
  }, [movieId]);

  if (isLoading) return <Loader />;

  if (reviews.length === 0)
    return <div>We don`t have information for this movie</div>;

  return (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <b>Author: </b>
            {author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ReviewsList>
  );
};

export default Reviews;

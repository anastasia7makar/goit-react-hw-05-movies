import AboutMovie from 'components/AboutMovie/AboutMovie';
import { movieDetailsRequest } from 'services/moviesApi';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';

import { DetailsContainer, GoBack } from 'components/Layout/Layout.styled';
import { NavItem } from 'components/Header/Header.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from);

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!movieId) {
        return;
      }

      const res = await movieDetailsRequest(movieId);
      if (res.data.length === 0) {
        return;
      }
      setMovieDetails(res.data);
      setIsLoading(false);
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <DetailsContainer>
      <GoBack to={backLinkHref.current ?? '/'}>Back</GoBack>
      {isLoading && <Loader />}
      {!isLoading && <AboutMovie movieDetails={movieDetails} />}
      <p>Additional information</p>
      <ul>
        <li>
          <NavItem to="cast">Cast</NavItem>
        </li>
        <li>
          <NavItem to="reviews">Reviews</NavItem>
        </li>
      </ul>
      <Outlet />
    </DetailsContainer>
  );
};

export default MovieDetails;

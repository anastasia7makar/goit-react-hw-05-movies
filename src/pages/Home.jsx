import { useEffect, useState } from 'react';
import { trendingMoviesRequest } from 'services/moviesApi';
import {
  Container,
  MovieLink,
  MoviesList,
  MoviesListItem,
} from 'components/Layout/Layout.styled';

const Home = () => {
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    trendingMovies();
  }, []);

  async function trendingMovies() {
    const resp = await trendingMoviesRequest();
    const {
      data: { results },
    } = resp;
    if (results) {
      setTrendingMovies(results);
    }
  }

  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList>
        {movies.map(({ id, title }) => {
          return (
            <MoviesListItem key={id}>
              <MovieLink to={`movies/${id}`}>
                <p>{title}</p>
              </MovieLink>
            </MoviesListItem>
          );
        })}
      </MoviesList>
    </Container>
  );
};

export default Home;

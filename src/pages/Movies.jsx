import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovieRequest } from 'services/moviesApi';
import {
  MoviesList,
  MoviesListItem,
  MovieLink,
  Container,
  Form,
  FormButton,
} from 'components/Layout/Layout.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [noResult, setNoResult] = useState(false);
  const [moviesFound, setMoviesFound] = useState([]);
  const location = useLocation();

  const query = searchParams.get('search');

  function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.currentTarget;
    const searchQuery = form.elements.search.value;

    setSearchParams({ search: searchQuery });

    form.reset();
  }

  useEffect(() => {
    const searchMovies = async () => {
      setNoResult(false);

      if (!query) {
        return;
      }

      const resp = await searchMovieRequest(query);
      const {
        data: { results },
      } = resp;

      if (results.length === 0) {
        setNoResult(true);
        return;
      }
      setMoviesFound(results);
    };

    searchMovies();
  }, [query]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <FormButton type="submit">Search</FormButton>
      </Form>
      {query && !noResult ? (
        <MoviesList>
          {moviesFound.map(({ id, name, title }) => (
            <MoviesListItem key={id}>
              <MovieLink to={`${id}`} state={{ from: location }}>
                {title} {name}
              </MovieLink>
            </MoviesListItem>
          ))}
        </MoviesList>
      ) : (
        query && <div>Sorry, there are no results for your query!</div>
      )}
    </Container>
  );
};

export default Movies;

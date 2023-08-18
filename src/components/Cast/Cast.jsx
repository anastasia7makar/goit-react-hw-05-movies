import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCastRequest } from 'services/moviesApi';
import { CastList, NoImage } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const castInfo = async () => {
      if (!movieId) {
        return;
      }

      const resp = await movieCastRequest(movieId);

      const {
        data: { cast },
      } = resp;
      setCastInfo(cast);
      setIsLoading(false);
    };

    castInfo();
  }, [movieId]);

  if (isLoading) return <Loader />;

  if (castInfo.length === 0)
    return <div>We don`t have information for this movie</div>;

  return (
    <CastList>
      {castInfo.map(({ id, character, name, profile_path }) => {
        return (
          <li key={id}>
            {profile_path ? (
              <img
                src={'https://image.tmdb.org/t/p/w500' + profile_path}
                alt={name}
                width={200}
              ></img>
            ) : (
              <NoImage>Image not find</NoImage>
            )}
            <p>
              <b>Character: </b>
              {character}
            </p>
            <p>
              <b>Name:</b> {name}
            </p>
          </li>
        );
      })}
    </CastList>
  );
};

export default Cast;

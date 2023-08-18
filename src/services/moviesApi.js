import axios from 'axios';

// const KEY = '148f03d53b2837733c723a0c976df617';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { api_key: '148f03d53b2837733c723a0c976df617' };

export async function trendingMoviesRequest() {
  try {
    const response = await axios.get(`trending/movie/day?`);
    return response;
  } catch (error) {
    console.log('error', error);
  }
}

export async function searchMovieRequest(search) {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        language: 'en-US',
        query: search,
        include_adult: false,
        page: 1,
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
}

export async function movieDetailsRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}`, {
      params: {
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
}

export async function movieCastRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, {
      params: {
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
}

export async function movieReviewsRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.log('error', error);
  }
}


import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID jPX0i_s4431N2x9VhSPJlZVVO8fehRMQ0VZO2gkfrj0', 
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

import axios from 'axios';

const KEY = 'AIzaSyBE8OHNutfINuSm5fF882QPQBlDrW2rXfg';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
			 
   }
});

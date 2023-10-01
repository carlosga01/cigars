import {AxiosInstance} from 'axios';
import {Cigar} from '/api/response.types';

class Cigars {
  request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  search = (query?: string) =>
    this.request
      .get<Cigar[]>(`/cigars/search?query=${query}`)
      .then(res => res.data);
}

export default Cigars;

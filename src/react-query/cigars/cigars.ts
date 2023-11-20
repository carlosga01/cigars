import {useQuery, UseQueryOptions} from 'react-query';
import client from '/api/client';
import {Cigar} from '/api/response.types';

export const cacheKeys = {
  SEARCH: 'SEARCH',
};

export const useQuerySearchCigars = (
  query?: string,
  options: UseQueryOptions<Cigar[], Error, Cigar[]> = {},
) =>
  useQuery<Cigar[], Error, Cigar[]>(
    cacheKeys.SEARCH,
    () => client.cigars.search(query),
    options,
  );

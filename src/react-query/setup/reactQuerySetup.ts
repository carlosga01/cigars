import RNToast from 'react-native-toast-message';
import {DefaultOptions, QueryClient} from 'react-query';
import {AxiosError} from 'axios';

const defaultOptions: DefaultOptions = {
  queries: {
    retry: (failureCount, error) => {
      return (
        (error as AxiosError).response?.status !== 404 && failureCount <= 2
      );
    },
  },
  mutations: {},
} as const;

export const queryClient = new QueryClient({
  defaultOptions,
});

if (!__DEV__) {
  queryClient.setDefaultOptions({
    queries: {
      ...defaultOptions.queries,
      // Don't throw errors - log them and show error toast.
      useErrorBoundary: false,
      onError: err => {
        if (((err as AxiosError)?.response?.status || 0) >= 500) {
          RNToast.show({
            type: 'ErrorToast',
            position: 'bottom',
          });
        }
      },
      // This is added to mitigate the possibility of the user finding stale data in the application
      // as no real time mechanisms are available.
      // Most of the time, this won't be triggered as the user, while using the app,
      // will trigger refetches before the timer is reached.
      refetchInterval: 2 * 60 * 1000,
    },
    mutations: {
      ...defaultOptions.mutations,
    },
  });
}

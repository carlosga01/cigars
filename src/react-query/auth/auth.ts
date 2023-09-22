import {useMutation, UseMutationOptions} from 'react-query';
import {LoginOrSignUpPayload} from '/api/auth/request.types';
import client from '/api/client';

export const useMutationLoginOrSignUp = (
  options?: UseMutationOptions<void, Error, LoginOrSignUpPayload>,
) =>
  useMutation({
    mutationFn: (payload: LoginOrSignUpPayload) =>
      client.auth.loginOrSignUp(payload),
    ...options,
  });

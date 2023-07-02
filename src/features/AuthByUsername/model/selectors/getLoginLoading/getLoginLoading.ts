import { StateSchema } from 'app/providers/StoreProvider';

export const selectLoginLoding = (state: StateSchema) =>
  state?.loginForm?.isLoading || false;

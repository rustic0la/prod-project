import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line no-underscore-dangle
export const getUserMounted = (state: StateSchema) => state.user._mounted;

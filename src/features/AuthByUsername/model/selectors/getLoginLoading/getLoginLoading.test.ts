import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers/StoreProvider/config/StateSchema';
import { selectLoginLoading } from './getLoginLoading';

describe('selectLoginLoading test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
        username: '',
        password: '',
      },
    };
    expect(selectLoginLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginLoading(state as StateSchema)).toEqual(false);
  });
});

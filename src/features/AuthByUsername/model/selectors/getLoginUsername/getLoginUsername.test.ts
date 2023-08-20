import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginUsername } from './getLoginUsername';

describe('selectLoginUsername test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '',
        isLoading: false,
      },
    };
    expect(selectLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginUsername(state as StateSchema)).toEqual('');
  });
});

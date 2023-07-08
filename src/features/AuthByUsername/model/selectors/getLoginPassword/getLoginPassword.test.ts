import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers/StoreProvider/config/StateSchema';
import { selectLoginPassword } from './getLoginPassword';

describe('selectLoginPassword test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(selectLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginPassword(state as StateSchema)).toEqual('');
  });
});

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getProfileValidateErrors } from 'entities/Profile';

describe('getProfileValidateErrors.test', () => {
  test('should return validateErrors', () => {
    const errors = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.NO_DATA,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        validateErrors: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});

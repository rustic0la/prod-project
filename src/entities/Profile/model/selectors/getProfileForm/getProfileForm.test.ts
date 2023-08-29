import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/img.png';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Kazakhstan,
      lastName: 'ulbi tv',
      firstName: 'asd',
      city: 'asf',
      currency: Currency.USD,
      avatar,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
        isLoading: false,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});

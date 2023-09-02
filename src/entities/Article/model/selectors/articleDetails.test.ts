import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetails';

const data = {
  id: '1',
  title: 'Javascript - язык программирования',
  subtitle: 'Краткий пересказ всего JavaScript',
  img: 'https://raw.githubusercontent.com/Manojkumar8497/Simple-JS-Quiz-App/master/assets/img/js-logo.jpg',
  views: 1022,
  createdAt: '26.02.2022',
  type: [],
  blocks: [],
};

describe('articleDetails', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
        isLoading: false,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
});

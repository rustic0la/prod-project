import { Currency, Country } from 'shared/const/common';

export interface Profile {
  firstName: string;
  lastName: string;
  age: 30;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}

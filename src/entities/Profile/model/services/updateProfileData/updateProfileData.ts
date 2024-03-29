import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm, Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const formData = getProfileForm(thunkAPI.getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return thunkAPI.rejectWithValue(errors);
  }
  try {
    const response = await thunkAPI.extra.api.put<Profile>(
      '/profile',
      formData
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});

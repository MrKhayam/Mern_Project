import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";

const isUserAvailable = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: isUserAvailable ? isUserAvailable : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const regUser = createAsyncThunk(
  "auth/register-user",
  async (userData, thunkApi) => {
    try {
      return await authService.registerUser(userData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logUser = createAsyncThunk(
  "auth/log-user",
  async (userData, thunkApi) => {
    try {
      return await authService.loginUser(userData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", (_, thunkApi) => {
  try {
    return authService.logoutUser();
  } catch (error) {
    const message = error.response.data.message;
    return thunkApi.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(logUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logUser.rejected, (state, action) => {
        state.user = null;
        (state.isLoading = false), (state.isError = true);
        state.message = action.payload;
      })
      .addCase(logUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.user = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Error Logging Out";
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

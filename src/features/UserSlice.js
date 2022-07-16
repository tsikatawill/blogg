import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  username: '',
  email: '',
  displayPicture: '',
}

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialState,
  },
  reducers: {
    logUserIn: (state, action) => {
      state.value = { isLoggedIn: true, ...action.payload }
    },
    logUserOut: (state, action) => {
      state.value = initialState
    },
  },
})

export const { actions, reducer } = UserSlice

export const { logUserOut, logUserIn } = actions

export default reducer

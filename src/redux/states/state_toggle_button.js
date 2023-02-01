import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name: 'toggleMode',
    initialState: {value: false},
    reducers: {
      changeMode: (state) => {state.value ? state.value = false : state.value = true},
    },
  })

  export const { changeMode } = modeSlice.actions

  export default modeSlice.reducer
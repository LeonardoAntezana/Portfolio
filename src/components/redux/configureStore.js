import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './states/state_toggle_button'

export default configureStore({
    reducer: {
        toggleMod : modeReducer
    },
})
/*
 * Copyright (c) 2024 Ovaku.
 */


import EventsVisibilityReducer from './slices/EventsVisibilitySlice';
import {configureStore} from '@reduxjs/toolkit';


/**
 * Configure Redux store.
 *
 * @author Asish
 * @version 1.0
 * @since 28/01/2024
 */
const store = configureStore({
  reducer: {
    eventsVisibilityReducer: EventsVisibilityReducer,
  },
});

// Export the store as the default export
export default store;

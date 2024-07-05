/*
 * Copyright (c) 2024 Ovaku.
 */

import {createSlice} from '@reduxjs/toolkit';
import { Animated } from 'react-native';

type EventsVisibilityState = {
  isVisible: boolean;
  isEventAvailable: boolean | null;
  scrollY:any
};

// Initial state
const initialState: EventsVisibilityState = {
  isVisible: true,
  isEventAvailable: null,
  scrollY: new Animated.Value(0),
};

/**
 * Define a slice for managing events visibility.
 *
 * @author Asish
 * @version 1.0
 * @since 27/03/2024
 */
const EventsVisibilitySlice = createSlice({
  // Name the slice
  name: 'eventsVisivility',
  // Initial state
  initialState,
  reducers: {
    
    setScrollY(state,action) {
      // state.scrollY = action.payload
      state.scrollY.setValue(action.payload);
    },

    // Reset the state
    resetEventsVisibilitySlice: () => initialState,
  },
});

// Exporting action
export const { setScrollY} = EventsVisibilitySlice.actions;

// Exporting reducer
export default EventsVisibilitySlice.reducer;

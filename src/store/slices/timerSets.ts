import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TimerSet, Timer } from '../../types/TimerSet';
import { randomUUID } from 'crypto';
import { produce } from 'immer';
import { RootState } from '../store';

const initialState: Timer[] = [];

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action: PayloadAction<Timer>) => {
      state.push(action.payload);
    },
    removeTimer: (state, action: PayloadAction<Timer['id']>) => {
      return state.filter((ts) => ts.id !== action.payload);
    },
    startTimer: (state, action: PayloadAction<Timer['id']>) => {
      return produce(state, (draftState) => {
        const itemIndex = draftState.findIndex(
          (item) => item.id === action.payload,
        );
        if (itemIndex !== -1) {
          draftState[itemIndex].isRunning = true;
        }
      });
    },
    stopTimer: (state, action: PayloadAction<Timer['id']>) => {
      return produce(state, (draftState) => {
        const itemIndex = draftState.findIndex(
          (item) => item.id === action.payload,
        );
        if (itemIndex !== -1) {
          draftState[itemIndex].isRunning = false;
        }
      });
    },
    resetTimer: (state, action: PayloadAction<Timer['id']>) => {
      return produce(state, (draftState) => {
        const itemIndex = draftState.findIndex(
          (item) => item.id === action.payload,
        );
        if (itemIndex !== -1) {
          draftState[itemIndex].currentTime = '00:00:00';
        }
      });
    },
    setTime: (
      state,
      action: PayloadAction<{ id: Timer['id']; time: Timer['currentTime'] }>,
    ) => {
      return produce(state, (draftState) => {
        const itemIndex = draftState.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (itemIndex !== -1) {
          draftState[itemIndex].currentTime = action.payload.time;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTimer,
  removeTimer,
  startTimer,
  stopTimer,
  setTime,
  resetTimer,
} = timersSlice.actions;

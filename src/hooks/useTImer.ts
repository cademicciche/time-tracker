import { useEffect, useState } from 'react';
import { Timer } from '../types/TimerSet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setTime } from '../store/slices/timerSets';

export const useTimer = (timerItem: Timer) => {
  const dispatch = useDispatch();
  const timer = useSelector(
    (state: RootState) => state.timers.filter((t) => t.id === timerItem.id)[0],
  );
  // const [currentTime, setCurrentTime] = useState<string>(timerItem.currentTime);

  useEffect(() => {
    if (timer.isRunning) {
      const timerInterval = setInterval(() => {
        // Convert current time string to seconds
        const [hours, minutes, seconds] = timer.currentTime
          .split(':')
          .map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        // Increment time by 1 second
        totalSeconds++;

        // Calculate new hours, minutes, and seconds
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;

        // Format new time string
        const newTime = `${String(newHours).padStart(2, '0')}:${String(
          newMinutes,
        ).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;

        // Update current time state
        dispatch(setTime({ id: timerItem.id, time: newTime }));
      }, 1000); // Update every second

      // Cleanup interval on component unmount
      return () => clearInterval(timerInterval);
    }
  }, [timer]);
};

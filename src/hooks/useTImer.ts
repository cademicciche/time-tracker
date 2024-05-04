import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Timer } from '../types/TimerSet';
import { RootState } from '../store/store';
import { setTime } from '../store/slices/timerSets';

export const useTimer = (timerItem: Timer) => {
  const dispatch = useDispatch();
  const timer = useSelector(
    (state: RootState) => state.timers.filter((t) => t.id === timerItem.id)[0],
  );

  // Suppress linter here bc for some reason TS isn't pickup up the NodeJS namespace as a valid type
  // eslint-disable-next-line no-undef
  const timerInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timer.isRunning) {
      timerInterval.current = setInterval(() => {
        // Convert current time string to seconds
        const [hours, minutes, seconds] = timer.currentTime
          .split(':')
          .map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        // Increment time by 1 second
        totalSeconds += 1;

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
    }

    return () => clearInterval(timerInterval.current);
  }, [dispatch, timer, timerItem.id]);
};

export default useTimer;

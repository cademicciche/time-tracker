import { IconButton, Stack, Tag, Text, Tooltip } from '@chakra-ui/react';
import { FaPlay, FaStop, FaTrash } from 'react-icons/fa';
import { LuTimerReset } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import React from 'react';
import { Timer as TimerItem } from '../../types/TimerSet';
import {
  removeTimer,
  resetTimer,
  startTimer,
  stopTimer,
} from '../../store/slices/timerSets';
import { useTimer } from '../../hooks/useTImer';

export default function Timer({
  timer,
}: {
  timer: TimerItem;
}): React.JSX.Element {
  const dispatch = useDispatch();
  useTimer(timer);

  const handleStart = () => {
    dispatch(startTimer(timer.id));
  };

  const handleStop = () => {
    dispatch(stopTimer(timer.id));
  };

  const handleReset = () => {
    dispatch(resetTimer(timer.id));
  };

  const handleDelete = () => {
    dispatch(removeTimer(timer.id));
  };

  return (
    <Stack direction="column" justifyContent="space-between">
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize={20}>{timer.name}</Text>
        <Text fontSize={20} fontWeight="bold">
          {timer.currentTime}
        </Text>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Tag>{timer.chargeCode}</Tag>
        <Stack direction="row">
          {timer.isRunning ? (
            <Tooltip label="Stop timer" openDelay={1500}>
              <IconButton
                size="sm"
                icon={<FaStop />}
                colorScheme="red"
                aria-label="Stop timer"
                onClick={handleStop}
              />
            </Tooltip>
          ) : (
            <Tooltip label="Start timer" openDelay={1500}>
              <IconButton
                size="sm"
                icon={<FaPlay />}
                colorScheme="green"
                aria-label="Start timer"
                onClick={handleStart}
              />
            </Tooltip>
          )}
          {!timer.isRunning && (
            <Tooltip label="Reset timer" openDelay={1500}>
              <IconButton
                size="sm"
                icon={<LuTimerReset />}
                colorScheme="blue"
                aria-label="Reset timer"
                onClick={handleReset}
              />
            </Tooltip>
          )}
          {!timer.isRunning && (
            <Tooltip label="Delete timer" openDelay={1500}>
              <IconButton
                size="sm"
                icon={<FaTrash />}
                colorScheme="red"
                aria-label="Delete timer"
                onClick={handleDelete}
              />
            </Tooltip>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

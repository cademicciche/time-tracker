import { Box, Flex, Stack, Text, chakra } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useMemo, useState } from 'react';

const Container = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    wrap: 'wrap',
    width: '100%',
    height: 25,
    pb: 8,
    pt: 8,
    pl: 5,
    pr: 5,
  },
});

const addTimeLabels = (timeLabels: Array<string>) => {
  // Convert each time label to seconds and sum them up
  const totalSeconds = timeLabels.reduce((acc, timeLabel) => {
    const [hours, minutes, seconds] = timeLabel.split(':').map(Number);
    return acc + hours * 3600 + minutes * 60 + seconds;
  }, 0);

  // Calculate hours, minutes, and seconds from the total seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Format the result as a time label
  const resultTimeLabel = `${String(hours).padStart(2, '0')}:${String(
    minutes,
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return resultTimeLabel;
};

export function TotalTime(): JSX.Element {
  const timers = useSelector((state: RootState) => state.timers);

  const totalTime = useMemo(() => {
    const timeStrings = timers.map((t) => t.currentTime);
    return addTimeLabels(timeStrings);
  }, [timers]);

  return (
    <Container>
      <Stack direction="row">
        <Text fontSize={20}>Total Time:</Text>
        <Text fontSize={20} fontWeight="bold">
          {totalTime || '00:00:00'}
        </Text>
      </Stack>
    </Container>
  );
}

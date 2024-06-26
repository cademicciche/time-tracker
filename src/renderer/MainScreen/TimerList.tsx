import { useSelector } from 'react-redux';
import { Box, Divider, chakra } from '@chakra-ui/react';
import { Fragment, JSX } from 'react';
import { RootState } from '../../store/store';
import Timer from './Timer';

const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    p: 5,
    overflow: 'auto',
  },
});

export default function TimerList(): JSX.Element {
  const timers = useSelector((state: RootState) => state.timers);

  return (
    <Container>
      {timers.map((timer) => (
        <Fragment key={`timer-item-${timer.id}`}>
          <Timer timer={timer} />
          <Divider mt={2} mb={2} />
        </Fragment>
      ))}
    </Container>
  );
}

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Timer from './Timer';
import { Box, Divider, chakra } from '@chakra-ui/react';
import { Fragment } from 'react';

const Container = chakra(Box, {
  baseStyle: {
    mt: 10,
    width: '100%',
    p: 8,
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

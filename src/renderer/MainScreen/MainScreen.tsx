import { Box, chakra } from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import TimerList from './TimerList';
import { TotalTime } from './TotalTime';

const Container = chakra(Box, {
  baseStyle: {
    height: '100%',
    width: '100%',
  },
});

export default function MainScreen(): JSX.Element {
  const timers = useSelector((state: RootState) => state.timers);

  return (
    <Container>
      <NavBar />
      <TimerList />
      <TotalTime />
    </Container>
  );
}

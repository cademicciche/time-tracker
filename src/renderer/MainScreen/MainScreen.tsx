import { Box, chakra } from '@chakra-ui/react';
import { JSX } from 'react';
import NavBar from '../NavBar/NavBar';
import TimerList from './TimerList';
import TotalTime from './TotalTime';

const Container = chakra(Box, {
  baseStyle: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default function MainScreen(): JSX.Element {
  return (
    <Container>
      <Box>
        <NavBar />
        <TimerList />
      </Box>
      <TotalTime />
    </Container>
  );
}

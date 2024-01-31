import {
  Text,
  Button,
  Flex,
  chakra,
  Divider,
  IconButton,
  Box,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { FaPlus, FaSave } from 'react-icons/fa';
import { Fragment } from 'react';
import { AddTimerModal } from './AddTimerModal';

const Container = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    wrap: 'wrap',
    width: '100%',
    height: 25,
    bgColor: '#C3B1E1',
    pb: 8,
    pt: 8,
    pl: 5,
    pr: 5,
  },
});

const Panel = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function NavBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Container as="nav">
        <Text fontSize={20} fontWeight="bold">
          Time Tracker
        </Text>
        <Panel>
          <Tooltip label="Add timer">
            <IconButton
              onClick={onOpen}
              icon={<FaPlus />}
              aria-label="Add timer"
              mr={5}
            />
          </Tooltip>
          <Tooltip label="Save timer set">
            <IconButton icon={<FaSave />} aria-label="Save timer set" />
          </Tooltip>
        </Panel>
      </Container>
      <Divider />
      <AddTimerModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}

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
import { FaPlus, FaSave, FaUndo } from 'react-icons/fa';
import { Fragment } from 'react';
import { AddTimerModal } from './AddTimerModal';
import { useDispatch } from 'react-redux';
import { reset } from '../../store/slices/timerSets';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

const Container = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    wrap: 'wrap',
    width: '100%',
    height: 25,
    bgColor: 'purple.400',
    color: 'purple.900',
    p: 5,
    pt: 8,
    pb: 8,
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
  const {
    isOpen: resetModalOpen,
    onOpen: onResetOpen,
    onClose: onResetClose,
  } = useDisclosure();
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Fragment>
      <Container as="nav">
        <Text fontSize={20} fontWeight="bold">
          Time Tracker
        </Text>
        <Panel>
          <Tooltip label="Add timer">
            <IconButton
              variant="ghost"
              color="purple.900"
              onClick={onOpen}
              icon={<FaPlus />}
              aria-label="Add timer"
              mr={2}
            />
          </Tooltip>
          <Tooltip label="Reset">
            <IconButton
              variant="ghost"
              color="purple.900"
              onClick={onResetOpen}
              icon={<FaUndo />}
              aria-label="Reset"
            />
          </Tooltip>
        </Panel>
      </Container>
      <Divider />
      <AddTimerModal isOpen={isOpen} onClose={onClose} />
      <ConfirmModal
        isOpen={resetModalOpen}
        onClose={onResetClose}
        title="Are you sure?"
        details="All of your timers will be deleted."
        confirmBtnLabel="Reset"
        onConfirm={handleReset}
      />
    </Fragment>
  );
}

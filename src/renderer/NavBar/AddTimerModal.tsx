import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { AppDispatch } from '../../store/store';
import { addTimer } from '../../store/slices/timerSets';

export default function AddTimerModal(props: Omit<ModalProps, 'children'>) {
  const { isOpen, onClose } = props;
  const [name, setName] = useState<string>('');
  const [chargeCode, setChargeCode] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [chargeCodeError, setChargeCodeError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTimer = () => {
    setNameError(false);
    setChargeCodeError(false);

    if (name.length === 0) {
      setNameError(true);
      return;
    }

    if (chargeCode.length === 0) {
      setChargeCodeError(true);
      return;
    }

    dispatch(
      addTimer({
        id: uuid(),
        name,
        chargeCode,
        isRunning: false,
        currentTime: '00:00:00',
      }),
    );
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setChargeCode('');
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Timer</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired mb={5}>
            <FormLabel>Name</FormLabel>
            <Input
              isInvalid={nameError}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Charge Code</FormLabel>
            <Input
              isInvalid={chargeCodeError}
              value={chargeCode}
              onChange={(e) => setChargeCode(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            type="submit"
            colorScheme="purple"
            onClick={() => handleAddTimer()}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from '@chakra-ui/react';

type ConfirmModalProps = {
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
  onConfirm: () => void;
  title?: string;
  details?: string;
  confirmBtnLabel?: string;
  cancelBtnLabel?: string;
};

const DEFAULT_TITLE = 'Confirmation';
const DEFAULT_DETAILS = 'Are you sure you want to perform this action?';

export default function ConfirmModal({
  isOpen,
  onClose,
  title,
  details,
  onConfirm,
  confirmBtnLabel,
  cancelBtnLabel,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title || DEFAULT_TITLE}</ModalHeader>
        <ModalBody>
          <Text>{details || DEFAULT_DETAILS}</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            {cancelBtnLabel}
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmBtnLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ConfirmModal.defaultProps = {
  title: 'Confirmation',
  details: 'Are you sure you want to perform this action?',
  confirmBtnLabel: 'Confirm',
  cancelBtnLabel: 'Cancel',
};

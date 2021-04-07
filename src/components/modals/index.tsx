import styles from './style.module.scss';

import React from 'react';
import Modal from 'react-modal';

import compare from 'classnames';

Modal.setAppElement('#root');

type ContentModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
  content: JSX.Element;
  className?: string;
};

const ContentModal = ({
  setIsOpen,
  modalIsOpen,
  content,
  className,
}: ContentModalProps): JSX.Element => {
  const afterOpenModal = () => {
    console.log('After open modal');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      overlayClassName={styles.overlay}
      className={compare(styles.content, className)}
    >
      {content}
    </Modal>
  );
};

export default ContentModal;

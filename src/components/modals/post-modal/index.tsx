import styles from './index.module.scss';

import React from 'react';
import Modal from 'react-modal';

import PostModalContent from './content';
import { CommentsAction } from '../../../hooks/useActions';
import { useTypesSelector } from '../../../hooks/useTypedSelector';

Modal.setAppElement('#root');

type PostModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
  post: Post;
};

const PostModal = ({
  closeModal,
  modalIsOpen,
  post,
}: PostModalProps): JSX.Element => {
  const { id } = post;

  const { comments } = useTypesSelector((state) => state.comments);

  const { getComments } = CommentsAction();

  const afterOpenModal = () => getComments(id);

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModal(false)}
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      <PostModalContent
        onClose={() => closeModal(false)}
        comments={comments}
        post={post}
      />
    </Modal>
  );
};

export default PostModal;

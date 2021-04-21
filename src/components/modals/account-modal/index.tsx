import styles from './index.module.scss';

import React from 'react';
import Modal from 'react-modal';
import { Field, Form, Formik } from 'formik';
import { EditProfileSchema } from '../../../services/validation';
import Input from '../../input';
import Button from '../../button';
import { useHistory } from 'react-router-dom';

import * as routes from '../../../configs/routes';
import { authTokenKey } from '../../../configs/api';

Modal.setAppElement('#root');

type AccountModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
  account: Profile;

  callBack: (values: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    description: string;
  }) => {};
};

const AccountModal = ({
  closeModal,
  modalIsOpen,
  account,
  callBack,
}: AccountModalProps): JSX.Element => {
  const {
    profile_photo_url,
    first_name,
    last_name,
    description,
    job_title,
  } = account;

  const { push } = useHistory();

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(false)}
      overlayClassName={styles.overlay}
      className={styles.wrapper}
    >
      <Formik
        initialValues={{
          firstName: first_name ?? '',
          lastName: last_name ?? '',
          jobTitle: job_title ?? '',
          description: description ?? '',
        }}
        validationSchema={EditProfileSchema}
        onSubmit={(values) => {
          callBack(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <div className={styles.bloc}>
            <Form onSubmit={handleSubmit}>
              <div className={styles.header}>
                <span>Profile information</span>
                <button
                  type="submit"
                  onClick={() => {
                    localStorage.removeItem(authTokenKey);
                    push(routes.signUp_page);
                  }}
                >
                  Log out
                </button>
              </div>
              <div className={styles.firstPart}>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  onChange={(event) => {
                    setFieldValue(
                      'file',
                      event.currentTarget.files ? [0] : null
                    );
                  }}
                  className={styles.fileInput}
                />
                <div className={styles.name}>
                  <Input
                    title="First Name"
                    type="text"
                    name="firstName"
                    placeholder=""
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.firstName}
                  />
                  <Input
                    title="Second Name"
                    type="text"
                    name="lastName"
                    placeholder=""
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.lastName}
                  />
                </div>
              </div>
              <div className={styles.secondPart}></div>
              <Input
                title="Job Title"
                type="text"
                name="jobTitle"
                placeholder=""
                onChange={handleChange}
                handleBlur={handleBlur}
                value={values.jobTitle}
              />
              <Input
                title="Description"
                type="text"
                name="description"
                placeholder=""
                onChange={handleChange}
                handleBlur={handleBlur}
                value={values.description}
              />
              <div className={styles.footer}>
                <Button
                  type="button"
                  content="Cancel"
                  onClick={() => closeModal(false)}
                  className={styles.cancelButton}
                />
                <Button type="submit" content="Save" />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </Modal>
  );
};

export default AccountModal;

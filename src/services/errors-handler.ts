import { toast } from 'react-toastify';

const showErrorToast = (error: string) => {
  toast.error(error, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  });
};

export default showErrorToast;

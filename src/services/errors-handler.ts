import { toast, ToastOptions } from 'react-toastify';

const ToastStyle: ToastOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
};

const showErrorToast = (content: string, type?: string) => {
  switch (type) {
    case 'success':
      toast.success(content, ToastStyle);
      break;

    default:
      toast.error(content, ToastStyle);
      break;
  }
};

export default showErrorToast;

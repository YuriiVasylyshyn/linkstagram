import CircularLoader from '../../components/circular-loader/index';
import showErrorToast from '../../services/errors-handler';

type ScreenWrapperProps = {
  page: JSX.Element;
  error: string | null;
  loading: boolean;
};

const ScreenWrapper = ({
  page,
  loading,
  error,
}: ScreenWrapperProps): JSX.Element => {
  if (loading) {
    return <CircularLoader />;
  }

  // if (error) {
  //   showErrorToast(error);
  // }

  return page;
};

export default ScreenWrapper;

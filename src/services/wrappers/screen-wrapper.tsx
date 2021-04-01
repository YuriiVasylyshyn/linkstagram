import CircularLoader from '../../components/circular-loader/index';
import Error from '../../components/error/index';

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

  if (error) {
    return <Error error={error} />;
  }

  return page;
};

export default ScreenWrapper;

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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return page;
};

export default ScreenWrapper;

type DataWrapperProps = {
  page: JSX.Element;
  error: string | null;
  loading: boolean;
};

const DataWrapper = ({
  page,
  loading,
  error,
}: DataWrapperProps): JSX.Element => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return page;
};

export default DataWrapper;

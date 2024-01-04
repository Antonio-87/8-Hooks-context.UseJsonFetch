import useJsonFetch from "../hooks/useJsonFetch";

const LoadingComponent = () => {
  const [{ data, loading, error }] = useJsonFetch(
    "http://localhost:7070/loading"
  );
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </>
  );
};
export default LoadingComponent;

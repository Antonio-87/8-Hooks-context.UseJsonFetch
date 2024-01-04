import useJsonFetch from "../hooks/useJsonFetch";

const ErrorComponent = () => {
  const [{ data, loading, error }] = useJsonFetch(
    "http://localhost:7070/error"
  );
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </>
  );
};
export default ErrorComponent;

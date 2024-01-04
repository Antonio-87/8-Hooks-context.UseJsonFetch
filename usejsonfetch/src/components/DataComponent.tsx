import useJsonFetch from "../hooks/useJsonFetch";

const DataComponent = () => {
  const [{ data, loading, error }] = useJsonFetch("http://localhost:7070/data");
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </>
  );
};
export default DataComponent;

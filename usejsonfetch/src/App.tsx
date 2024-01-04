import "./App.css";
import DataComponent from "./components/DataComponent";
import ErrorComponent from "./components/ErrorComponent";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  return (
    <>
      <DataComponent />
      <LoadingComponent />
      <ErrorComponent />
    </>
  );
}

export default App;

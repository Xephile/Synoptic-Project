import "bootstrap/dist/css/bootstrap.min.css";
import MainBody from "./Layout/MainBody";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";


function App(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route element={<MainBody />} path="/" />
      </Routes>
    </Layout>
  );
}

export default App;

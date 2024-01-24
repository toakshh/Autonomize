import "./App.css";
import Body from "./pages/Body/Body";
import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Follower from "./pages/Follower/Follower";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Form />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/detail/:repoName" element={<Detail />} />
          <Route path="/followers/:userName" element={<Follower />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

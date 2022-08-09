import { CreateSpaces, Home, Login, Profile, Spaces } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/spaces/:id"} element={<Spaces />} />
          <Route path={"/spaces"} element={<CreateSpaces />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormClient from "./Form";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="form" element={<FormClient />} />
        <Route path="form/:id" element={<FormClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

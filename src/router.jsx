import { BrowserRouter, Routes, Route } from "react-router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<div>Hola</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

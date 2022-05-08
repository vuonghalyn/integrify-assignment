import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Routes>
      {/* Create two routes: Homepage and DetailPage with ID  */}
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default App;

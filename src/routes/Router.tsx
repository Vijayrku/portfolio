import { Route, Routes } from "react-router-dom";
import { DashboardPage, HomePage } from "./routes";


const Router = () => {
  return (
    <Routes>
       <Route
        path="/"
        element={<HomePage/>}
      />
      <Route
        path="/dashboard"
        element={<DashboardPage/>}
      />
    </Routes>
  );
}

export default Router;
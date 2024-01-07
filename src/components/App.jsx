import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutHome } from "./LayoutHome";
import HomePage from "pages/HomePage/HomePage";
import RatesPage from "pages/RatesPage/RatesPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome/>}> 
        <Route index element={<HomePage/>}/>
        <Route path="rates" element={<RatesPage/>}/>
      </Route>
      <Route path="*" element={<Navigate to={"/"}/>} />
    </Routes>
  );
};

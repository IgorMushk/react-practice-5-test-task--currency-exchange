import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutHome } from "./LayoutHome";
import HomePage from "pages/HomePage/HomePage";
import RatesPage from "pages/RatesPage/RatesPage";
import { useEffect } from "react";
//import { getCurrentPosition } from "service/getCurrentPosition";
import { useDispatch } from "react-redux";
import { fetchBaseCurrency } from "redux/operations";
import { setBaseCurrency } from "redux/currencySlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    
    function success(pos) {
      //const crd = pos.coords;
      //getCurrentPosition(crd)
      dispatch(fetchBaseCurrency(pos.coords));
      
      // console.log("Your current position is:");
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    function error(err) {
      dispatch(setBaseCurrency('USD'));
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    
  //}, [])
}, [dispatch])

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

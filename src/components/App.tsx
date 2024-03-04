import { Route, Routes } from "react-router-dom";
import { HomePages } from "../pages/HomePages";

export const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePages/>}/>
      </Routes>
    </div>
  );
};

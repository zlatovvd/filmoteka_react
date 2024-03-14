import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../hookes/redux";
import { HomePages } from "../pages/HomePages";
import { getGenres } from "../redux/genresThunk";

export const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePages/>}/>
      </Routes>
    </div>
  );
};

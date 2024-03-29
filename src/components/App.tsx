import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../hookes/redux";
import { HomePages } from "../pages/HomePages";
import { LibraryPage } from "../pages/LibraryPage/LibraryPage";
import { getGenres } from "../redux/genresThunk";
import NotFound from "./NotFound/NotFound";

export const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/library/:libName' element={<LibraryPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

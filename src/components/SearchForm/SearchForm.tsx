import { SetStateAction, useState } from "react";
import css from "./SearchForm.module.css";

export const SearchForm = (props:{setSearch: (search:string) => void}) => {

  const [search, setSearch] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (e:React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    props.setSearch(search);
  }

  return (
    <form action="" className={css.searchForm} onSubmit={handleSubmit}>
      <div className={css.searchContainer}>
        <input
          className={css.searchInput}
          type="text"
          name="search"
          placeholder="Movie search"
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className={css.searchBtn}></button>
        <p className={css.searchError}>
          Search result not successful. Enter the correct movie name and
        </p>
      </div>
    </form>
  );
};

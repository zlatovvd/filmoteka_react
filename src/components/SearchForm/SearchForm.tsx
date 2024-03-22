import { useState } from "react";
import { usePageParams } from "../../hookes/usePageParams";
import css from "./SearchForm.module.css";

export const SearchForm = (props:{error:string}) => {

  const [search, setSearch] = useState<string>('')

  const {updateQuery} = usePageParams();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (e:React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    updateQuery(search);
    setSearch('');
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
          {props.error}
        </p>
      </div>
    </form>
  );
};

import { useState } from "react";
import style from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query", {
        duration: 3000,
        position: "top-left",
      });
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

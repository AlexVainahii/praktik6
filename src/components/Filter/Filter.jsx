import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPosts = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={(e) => {
            filterPosts(e);
          }}
        />
      </div>
    </div>
  );
};

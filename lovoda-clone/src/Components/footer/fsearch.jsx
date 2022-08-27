import React from "react";
import Footer from "./footer";
import styles from "../styles/footer.module.css"

const Search = () => {
    return (
      <div className={styles.searchheader}>
        <h1>Search</h1>
        <div className={styles.searchbox}>
          <input type="email" name="" id={styles.searchboxemail} placeholder="Search" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XzsueQAlVow7ZLmE846NEqUqjGqqsb-0RA&usqp=CAU"
            alt=""
            className={styles.lensimage}
          />
        </div>
      </div>
    );
}

export default Search;
import React from "react";
import SearchForm from "./SearchForm";

import styles from "../../styles/Header.module.css";

function Header(props){
    return (
        <div className={styles.Header}>
            <h1>Stock Images</h1>
            <SearchForm searchImagesByWord = {props.searchImagesByWord}/>
        </div>
    )
}

export default Header;
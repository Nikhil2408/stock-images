import React, {useState} from "react";

import styles from "../../styles/SearchForm.module.css";

function SearchForm(props){

    const [wordInput, setWordInput] = useState("");

    function changeHandler(eventObj){
        setWordInput(eventObj.target.value);
    }

    function submitHandler(eventObj){
        eventObj.preventDefault();
        props.searchImagesByWord(wordInput);
    }

    return (
        <form className={styles.SearchForm} onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder="Enter a keyword to filter search results"
                name="wordInput"
                value = {wordInput}
                onChange = {changeHandler}
            />
            <button className={styles.searchBtn}>Search Images</button>
        </form>
    )
}

export default SearchForm;
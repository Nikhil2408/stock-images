import React, { useState, useEffect, useCallback } from "react";
import Image from "./Image";

import styles from "../../styles/ImagesList.module.css";

function ImagesList(props){

    const [images, setImages] = useState([]);
    const [wordImages, setWordImages] = useState([]);
    const [pageNum, setPageNum] = useState(0);
 
    const getImages = useCallback (async pageNo => {
        let response;
        if(props.wordInput.length === 0){
            response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${pageNo}`);
        }
        else{
            response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${pageNo}&query=${props.wordInput}`);
        }
        const data = await response.json();

        if(props.wordInput.length === 0){
            setImages(function(currentState){
                return [...currentState, ...data];
            });
        }
        else{
            setWordImages(function(currentState){
                return [...currentState, ...data.results];
            });
        }

        setPageNum(function(currentState){
            return currentState + 1;
        });
    }, [props.wordInput]);

    useEffect(() => {
        setPageNum(0);
        setWordImages([]);
        getImages(Math.floor(Math.random() * 100) + 1);
    }, [props.wordInput, getImages]);

    useEffect(() => {

        function fetchImages(){
            if((window.innerHeight + window.scrollY) === document.body.scrollHeight){
                getImages(pageNum);
            }
        }
        window.addEventListener("scroll", fetchImages);
        return () => {
            window.removeEventListener("scroll", fetchImages)
        }
    }, [pageNum, getImages]);

    
    return (
        <div className={styles.ImagesList}>
            {
                props.wordInput.length === 0
                ?
                images.map((image, index) => {
                    return <Image key = {index} image = {image}/>
                })
                :
                wordImages.map((wordImage, index) => {
                    return <Image key = {index} image = {wordImage}/>
                })
            }
        </div>
    )
}

export default ImagesList;
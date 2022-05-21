import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header/Header';
import ImagesList from './ImagesList/ImagesList';

function App() {

  const [wordInput, setWordInput] = useState("");

  function searchImagesByWord(word){
    setWordInput(word);
  }

  return (
    <div className="App">
      <Header searchImagesByWord = {searchImagesByWord}/>
      <ImagesList wordInput = {wordInput}/>
    </div>
  );
}

export default App;

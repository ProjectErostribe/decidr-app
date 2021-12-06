import React from "react";
import { useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ChooseModal from './components/ChooseModal';
import Footer from "./components/Footer";
import './App.css';



function App() {
  const [listContainer, setListContainer] = useState([]);
  

  
  


  
  console.log('listContainer',listContainer);
  

  
  return (
    <><><div className="App">
      <Header />
    </div>
      
      <div>
        <AddItem
          listContainer={listContainer}
          setListContainer={setListContainer} />
          
      </div></>
    
      
      
      
    <div>
      <ChooseModal listContainer={listContainer} />
    </div>
      <div>
        <Footer />
      </div></>
  );
  } 

export default App;

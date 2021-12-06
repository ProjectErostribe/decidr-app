import React from "react";
import { useState } from "react";
import Randomiser from "./Randomiser";

function Modal(props) {
const [selectedItem, setSelectedItem] = useState('');
const [listContainer, setListContainer] = useState([]);

const selectItem = () => {
    
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem( listContainer.length > 0 ? listContainer[random] : '' );


    
    }
  

  
  


    return (
       <><><main>
            {selectedItem.length > 0
                ? <p id="selected">{selectedItem}</p>
                : DisplayList(listContainer)
                 }
        </main></><div>
                <button id="choose-item" onClick={Randomiser}>Choose A Random Item</button>

            </div></>
    )
    
    }



  
export default function DisplayList( {listContainer} ) {

    var displayList = listContainer.map(
      (item, index) => (
        <li key={index}>{item}</li>
      )
    );
  
    return (
      <ol id="display-list">
        {displayList}
      </ol>
    )
}
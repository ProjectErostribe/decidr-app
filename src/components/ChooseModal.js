import React from "react";
import { useState } from "react";
import Randomiser from "./Randomiser";

function DisplayList({ listContainer }) {

    const displayList = listContainer.map(
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

function ChooseModal({listContainer,setListContainer, onCloseClicked}) {
const [selectedItem, setSelectedItem] = useState('');


const selectItem = () => {
    
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem( listContainer.length > 0 ? listContainer[random] : '' );

    const displayList = listContainer.map(
        (item, index) => (
            <li key={index}>{item}</li>
        )
    );

    
    }
  

  
  


    return (
       <div><main>
            {selectedItem.length > 0
                ? <p id="selected">{selectedItem}</p>
                : <DisplayList
                    listContainer={listContainer} />}
        </main><div>
                <button id="choose-item" onClick={selectItem}>Choose A Random Item</button>

            </div>
            <button onClick={onCloseClicked} >Close</button>
            </div>
    )
    
    }
/* 

I need to find a way to make the Randomiser function work on the Modal instead of the separate container.
    export default function Randomiser({listContainer}) {
    const [selectedItem, setSelectedItem] = useState([]);
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem(listContainer[random]); 

    return (
        {selectedItem}
    )

}

*/

export default ChooseModal;

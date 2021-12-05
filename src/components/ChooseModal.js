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
       <><main>
            {selectedItem.length > 0
                ? <p id="selected">{selectedItem}</p>
                : <ChooseModal
                    listContainer={listContainer} />}
        </main><div>
                <button id="choose-item" onClick={Randomiser}>Choose A Random Item</button>

            </div></>
    )
    
    }
 

/*I need to find a way to make the Randomiser function work on the Modal instead of the separate container.
    export default function Randomiser({listContainer}) {
    const [selectedItem, setSelectedItem] = useState([]);
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem(listContainer[random]); 

    return (
        {selectedItem}
    )

}
*/



  
export default function DisplayList({ listContainer }) {

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

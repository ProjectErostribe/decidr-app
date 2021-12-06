import { useState } from 'react';

import Randomiser from './Randomiser';


export default function AddItem({listContainer,setListContainer}) {
    const [newItem, setNewItem] = useState('');
    const [show, setShow] = useState(false);

    const formSubmit = (event) => {
        event.preventDefault();
        setListContainer([...listContainer, newItem]);
        setNewItem('');

        console.log('listContainer',listContainer);
    }

    return (
        <form>
            <div>
            <input 
                id="add-item" 
                value={newItem} 
                onChange={event => setNewItem(event.target.value)} 
                placeholder="Add an item"
            />
            <button id="submit-item" 
            
            onClick= {() => {
                setShow(true);
            formSubmit();} }>Add Item
            </button>
            
            
            </div>
        </form>
    );       
}  
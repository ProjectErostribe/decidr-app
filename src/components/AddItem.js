import { useState } from 'react';
import ChooseModal from './ChooseModal';



export default function AddItem({listContainer,setListContainer, setModal}) {
    const [newItem, setNewItem] = useState('');
    

    const formSubmit = (event) => {
        event.preventDefault();
        setListContainer([...listContainer, newItem]);
        setNewItem('');

        console.log('listContainer',listContainer);
    }

    return (
        <form onSubmit= {(e) => {
            setModal(true);
        formSubmit(e);} }>
            <div>
            <input 
                id="add-item" 
                value={newItem} 
                onChange={event => setNewItem(event.target.value)} 
                placeholder="Add an item"
            />
            <button id="submit-item" 
            
            >Add Item
            </button>
            
            
            </div>
        </form>
    );       
}  
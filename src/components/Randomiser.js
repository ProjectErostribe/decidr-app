import { useState } from 'react';


export default function Randomiser({listContainer}) {
    const [selectedItem, setSelectedItem] = useState([]);
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem(listContainer[random]); 

    return (
        {selectedItem}
    )

}
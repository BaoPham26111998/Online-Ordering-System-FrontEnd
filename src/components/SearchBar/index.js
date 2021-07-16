import React from 'react'
import { useState } from "react";

export default function SearchBar(props) {
    const { onSearch } = props;

    const { searchText, setSearchText } = useState('');

    const handleInput = (e) => {
        setSearchText(e.target.value);

        if(!onSearch) return;

        const formValues = {
            
        }
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText);
        }
    }

    return (
        <div className="control">
            <input 
                placeholder="Search event..." 
                className="input" 
                type="text"
                onChange={handleInput} 
                value={searchText} 
                onKeyPress={handleEnterKeyPressed}>
            </input>
        </div>
    )
}

import React from 'react'
import { useState } from "react";

export default function Search(props) {
    const { onSearch } = props;

    const { searchText, setSearchText } = useState('');

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText);
        }
    }

    return (
        <div className="row no-gutters">
            <div className="col">
                <input className="form-control border-secondary border-right-0 rounded-0" type="search" placeholder="Search event..." id="example-search-input4" onChange={handleInput} value={searchText} onKeyPress={handleEnterKeyPressed} />
            </div>
            <div className="col-auto">
                <button className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" type="button">
                    <i className="fa fa-search" />
                </button>
            </div>
        </div>
    )
}

import React from 'react';

function Sort({ option, onSortChange }) {
    return (
        <div className="sort-options">
            <label htmlFor="sort">Sort By: </label>
            <select value={option} onChange={onSortChange}>
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
}

export default Sort;
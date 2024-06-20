import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FilterComponent = () => {
    const navigate = useNavigate();
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilterChange = () => {
        const searchParams = new URLSearchParams();
        if (minPrice) searchParams.set('minPrice', minPrice);
        if (maxPrice) searchParams.set('maxPrice', maxPrice);
        navigate({ search: searchParams.toString() });
    }

    return (
        <div className="filter-container">
            <input
                type="number"
                placeholder="Min Fiyat"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="filter-input"
            />
            <input
                type="number"
                placeholder="Max Fiyat"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="filter-input"
            />
            <button onClick={handleFilterChange} className="filter-button">Filtrele</button>
        </div>
    );
}

export default FilterComponent;

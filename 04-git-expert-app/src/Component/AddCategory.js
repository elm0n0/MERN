import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ( {setCategories} ) => {

    const estadoInicialInputValue = 'Escribe algo aquí';
    
    const [inputValue, setInputValue] = useState(estadoInicialInputValue)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue !== undefined && inputValue.length > 0 && inputValue.trim().length > 0) {
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }
    }

    const handleOnFofus = (e) => {
        if (e.target.value === estadoInicialInputValue ) {
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleOnFofus}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

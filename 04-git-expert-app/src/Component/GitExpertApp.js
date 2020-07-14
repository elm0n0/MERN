import React, {useState} from 'react'

import { AddCategory } from "./AddCategory";
import { GifGrid } from './GifGrid';

const GitExpertApp = () => {

    const [categories, setCategories] = useState(["A"])

    return (
    <>
        <h2>GitExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
            {
            categories.map( category => (
                <GifGrid 
                    key={category}
                    category={category} 
                />
            )
        )}
        </ol>
    </>
    )
};

export default GitExpertApp;
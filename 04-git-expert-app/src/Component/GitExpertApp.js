import React, {useState} from 'react'

import { AddCategory } from "./AddCategory";

const GitExpertApp = () => {

    const [categories, setCategories] = useState(["A","B","C"])

    // const handleApp = () => {
    //     setCategories(cats => [...cats,'D'])
    // }

    return (
    <>
        <h2>GitExpertApp</h2>
        <AddCategory />
        <hr/>
        <ol>
            {categories.map( (category,i) => (<li key={category}> {category}</li>))}
        </ol>
    </>
    )
};

export default GitExpertApp;
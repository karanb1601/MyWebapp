import React, { useState } from "react";

function AddDynamicInput() {
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [] = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangevalue, i) => {
        const inputdata = [...val];
        inputdata[i] = onChangevalue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal.splice(i, 1)
        setVal(deleteVal)
    }
    console.log(val + " :data")
    return (
        <>
            <button onClick={() => handleAdd()}>Add</button>
            {
                val.map((data, i) => {
                    return (
                        <>
                            <div className="m-2">
                                <input value={data} onChange={e => handleChange(e, i)} />
                                <button onClick={() => handleDelete(i)}>Remove</button>
                            </div>
                            <div>
                                <h2>{val[1]}</h2>
                            </div>
                        </>
                    )
                })
            }
        </>

    )
}
export default AddDynamicInput;
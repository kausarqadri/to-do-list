import React, {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    console.log(count);
    console.log(setCount);
    

    function handleClick(){
        setCount(count+1)
        console.log(setCount);
        
    }
    
    return(
        
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>+</button>

        </div>
    )

}
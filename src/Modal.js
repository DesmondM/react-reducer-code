import React, {useState, useReducer} from 'react'
const initState =0;

const reducerFxn = (state, action)=>{
    switch (action.type){
        case "increment":
        return state+1;
        case "decrement":
        return state-1;
        default:
        throw new Error();
    }
}
const Modal = () => {
    /* const [counter, setCounter] = useState(0); */
    const [state, dispatchFxn] = useReducer(reducerFxn, initState)
    
  /*   const increment =()=>{
        setCounter(counter+1)
    }
 Dispatch functiondispatches ourr action
    const decrement =()=>{
        setCounter(counter-1)
    } */

    return (
        <div>
            This is the counter
            <h1>{state}</h1>
           
            <p><button onClick={()=>dispatchFxn({type:"increment"})}>+</button>
            <button onClick={()=>dispatchFxn({type:"decrement"})}>-</button></p>
        </div>
    )
}

export default Modal

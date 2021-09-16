import React, {useReducer} from 'react'

const reducerFxn =(state, action)=>{
    switch (action.type){
        case "Increment":
            return {count:state.count+1, showText:state.showText}
        case "Toggle":
             return {count:state.count, showText:!state.showText}
        default:
             return state
    }
}

const ReducerComp = () => {
    const [state, dispatch]= useReducer(reducerFxn, {count:1, showText:true})
    return (
        <div>
            <h1>Counting Reducer</h1>
            <h2>{state.count}</h2>
            <button onClick={()=>{
                dispatch({type:"Increment"});
                 dispatch({type:"Toggle"});
            }}>Count</button>
            {state.showText && <p>This is an odd number</p>}
            {!state.showText && <p>This is an even number</p>}

        </div>
    )
}

export default ReducerComp

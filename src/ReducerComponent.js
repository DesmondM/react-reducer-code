import React, {useState, useReducer} from 'react';

const initState = [
    {id: Date.now(),
     name: "Desmond",
     email: "des@gmail.com"
    },
];

const reducerFxn = (state, action)=>{
    switch (action.type){
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((contact)=>{
                return contact.id!==action.payload.id;
            });
        default:
            throw new Error();
    }
}


const ReducerComponent = () => {
    const [state, dispatchFxn]= useReducer(reducerFxn, initState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log(state);
    
    const addContact =(e)=>{
        e.preventDefault();
        const contact ={
            id: Date.now(),
            name,
            email,
        };
        setName("");
        setEmail("");
        dispatchFxn({type:"add", payload:contact});
    };
    return (
        <div>
            <h1>Reducer Hook</h1>
            <form onSubmit ={addContact}>
                <input type="text"
                placeholder="name"
                value ={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input type="text"
                placeholder="email"
                value ={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

        <div>
            <button>Add Contact</button>
        </div>
            </form>
        <div>
            <ul>
                {state.map((contact)=>{
                    return(
                        <li key ={contact.id}>
                            <h2>{contact.name} - {contact.email} <button onClick={()=> dispatchFxn({type:"delete", payload:{id: contact.id}})}>Delete</button></h2>
                        
                        </li>
                    );
                })}
            </ul>
        </div>
        </div>
    )
}

export default ReducerComponent

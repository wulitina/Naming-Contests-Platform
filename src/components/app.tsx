import {useEffect, useState} from "react";

import Header from "./header";
const App = () => {
    const [counter,setCounter]=useState(0)
    useEffect(
        // ()=>{
        // const intervalId = setInterval(()=>{
        //         setCounter(counter + 1)
        //     },1000)
        //     return ()=>{
        //         clearInterval(intervalId)
        //     };
        // }
        ()=>{
            console.log("....")
        },[counter])

    return (
        <div className="container">
            <Header message = "Naming Contests"/>
            <button onClick={()=>{
                setCounter(counter+1);
            }}>{counter}</button>
        </div>
    );
};
export default App;
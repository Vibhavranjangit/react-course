import react,{useState} from 'react';

function Newcontact(props){
    const [val,setVal]=useState("Yadav")
    const test =(e)=>{
        console.warn("text function", e.target.value)
        setVal(e.target.value)
    }
    return(
        <div>
           
            <h1>Naya Contact </h1>
            <button onClick={()=>{console.warn("Hello on click")}}>daba de</button>
            <input type="text" value={val} onChange={test}></input>
            <button onClick={()=>alert(val)}> test function</button>
        </div>
    )
}

export default Newcontact;


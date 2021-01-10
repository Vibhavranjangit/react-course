import react,{useEffect,useState} from 'react';

function Contact(props){
    const [name,setName]=useState("Vipul");
    const [age,setAge]=useState(2);
    useEffect(()=>{
        // console.warn("hello from hook");
        console.warn("check props 2 for update",props.name)
    },[])
    let data="contact us component";
    return(
        <div>
            <h1>{data}</h1>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <button onClick={()=>setName("Ranjan Vipul")}>Update Name</button>
            <button onClick={()=>setAge("62")}>Update age</button>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Contact;


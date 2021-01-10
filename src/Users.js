import React,{useState, useEffect , Fragment} from 'react'
import {Button, Table} from 'react-bootstrap';
function Users(){

    // const [user, setUser]=useState([
    //     {name:'anil',age:'26',address:'Noida'},
    //     {name:'Vipul',age:'24'},
    //     {name:'Vibhav',age:'23'},
    //     {name:'Ranjan',age:'22'},
    //     {name:'Pankaj',age:'21'}
    // ])
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2").then((data)=>{
            console.warn("data",data)
            data.json().then(result=>{
                console.warn("result", result)
                setUser(result.data)
            })
        })
    },[])
    return(
        <Fragment>
            <h1>Users</h1>
            {
                // user.map((item,i)=>
                // <div key={i}>
                //     <span>{item.name},</span>
                //     <span>{item.age},</span>
                //     <span>{item.address}</span>
                // </div>
                // )
            }
            {
                user.length===5?<div>Yes , this is right</div>:<div>No length should be 5</div>
            }

            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>email</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    </tr>
                </thead>
                {/* <tbody>{
                        user.map((item,index)=><tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                            </tr>
                        )
                    }
                </tbody> */}
                {
                    user.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                        </tr>
                    )
                }
                <tbody>

                </tbody>
            </Table>
        </Fragment>
    )
}

export default Users
import React from 'react';

class About extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Vibhav Ranjan',
            age:26
        }

        // console.warn("consturctor called")
        
    }
    componentDidMount(){
        console.warn("Props", this.props.name);
        console.warn("consturctor called")

    }
    componentDidUpdate(){
        console.warn("props in update" , this.props.name);
        // alert("name is updated ");
    }
    render(){
        console.warn("render is called");
        return(
            <div>
                <h1>About us Component</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>
                <button onClick={()=>{this.setState({name: 'Ranjan Vibhav'})}}>Update state</button>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default About;

// constructor(){

// }
// componentDidMount(){

// }
// componentDidUpdate(){

// }
// componentWillUnmount(){

// }
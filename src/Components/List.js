import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store from '../redux/store'

class List extends Component {
    constructor(){
        super()
        const reduxState= store.getState()
        this.state={
            list: reduxState.list
        }
    }

componentDidMount=()=>{
    store.subscribe(()=>{
        this.setState({
            list: store.getState()
        })
    })
}

render(){
    const mappedList= this.state.list.map((item, i)=>{
        return <h1>{item}</h1>
    })
    return(
        <div>
        <h1>List Component</h1>
        {mappedList}
        <Link to='/input'><button>Input</button></Link>
        </div>
    )
}
}


export default List

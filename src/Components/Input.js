import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_LIST} from '../redux/store'
class Input extends Component{
    constructor(){
        super()
        this.state={
            item: ''
        }
    }


    handleInput=(val)=>{
        this.setState({
            item: val
        })
    }

    handleSubmit=()=>{
        console.log('hit')
        store.dispatch({
            type: UPDATE_LIST,
            payload: this.state.item

        })
        this.setState({
            item: ''
        })
    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Input Component</h1>
                <input onChange={(e)=> this.handleInput(e.target.value)} value={this.state.item}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <Link to='/'><button>Back to List</button></Link>
            </div>
        )
    }
}

export default Input
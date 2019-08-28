import React from 'react'
import {Switch, Route} from 'react-router-dom'

import List from './Components/List'
import Input from './Components/Input';

export default(
    <Switch>
        <Route exact path='/' component={List}/>
        <Route path='/input' component={Input}/>
    </Switch>
)
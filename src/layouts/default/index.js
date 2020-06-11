import React from 'react'
import {Switch, Route} from 'react-router'

import Phones from '../../pages/phones'

const routes = (
    <Switch>
        <Route path='/' component={Phones} exact/>
    </Switch>
)

export default () => {
    return <div>{ routes }</div>
}
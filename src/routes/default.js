import React from 'react'
import {Switch, Route} from 'react-router'

import Phones from '../pages/phones'

export const routes = (
    <Switch>
        <Route path='/' component={Phones} exact/>
    </Switch>
)
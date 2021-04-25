import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import IndexPage from '../pages/index'
import EmailPage from '../pages/email'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={IndexPage}></Route>
            <Route path="/email" exact component={EmailPage}></Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes
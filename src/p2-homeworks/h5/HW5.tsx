import React from 'react'
import Header from './Header'
import  {RoutesComponent} from './Routes'
import {BrowserRouter} from 'react-router-dom';


function HW5() {
    return (
        <div>
            <BrowserRouter basename={'IgnatHomeTasks'}>
                <Header/>
                <RoutesComponent/>
            </BrowserRouter>
        </div>
    )
}

export default HW5

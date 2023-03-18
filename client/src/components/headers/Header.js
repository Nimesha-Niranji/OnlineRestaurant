import React/*, {useContext, useState}*/ from 'react'
//import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
//import Close from './icon/close.svg'

function Header() {
    //const value = userContext(GlobalState)
  return (
    //<header>
        <div className= "menu">
          <img src={Menu} alt="" width="30" color='black'/>
         
        </div>
    //</header>
  )
}

export default Header

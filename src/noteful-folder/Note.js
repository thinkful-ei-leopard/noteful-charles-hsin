import React from 'react';
import Header from './Header';
import Addnote from './Addnote'
import './Main.css'

export default function Note(props) {

   return(
   <Header />,
       <div key={props.id}>
          {props.name}
          <br></br>
          {props.modified}
      </div>
 
   )

   
 
}
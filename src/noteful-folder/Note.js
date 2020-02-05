import React from 'react';
import Header from './Header';
import './Main.css'


export default function Note(props) {

   return(
   <Header />,
       <div key={props.id}>
          <a href={`/note/${props.id}`}>{props.name}</a>
          <br></br>
          {props.modified}
      </div>
 
   )

   
 
}
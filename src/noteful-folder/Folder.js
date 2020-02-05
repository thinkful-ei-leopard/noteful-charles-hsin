import React from 'react';
import Header from './Header';
import './Main.css'



export default function Folder (props){

   return(
       <Header />,
       <div key={props.id}>
          <a href={`/folder/${props.id}`}>{props.name} </a>  
      </div>
       
   )
 }

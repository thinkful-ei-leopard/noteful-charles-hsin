import React from 'react';
import Header from './Header';
import './Main.css'



export default function Folder (props){

   return(
       <Header />,
       <div key={props.id}>
          {props.name}   
      </div>
       
   )
 }

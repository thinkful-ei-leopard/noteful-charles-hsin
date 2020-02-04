import React from 'react';
import Header from './Header';
import MainMain from './MainMain';
import MainSidebar from './MainSidebar';
import RenderFolder from './RenderFolder';
import RenderNote from './RenderNote'


function Main (props){
 
    return(
      <div >
        <header>
        <Header />
        </header>
        <span id='mainSection'>
          <section id='folders' className="side">
            <RenderFolder />
          <MainSidebar folders={props.folders}/>
          </section>
          <section id='cards'className ="main">
          <RenderNote />
          <MainMain />
          </section>
        </span>
      </div>
      
    );
    
}


export default Main;


import React from 'react';
import Header from './Header';
import MainMain from './MainMain';
import MainSidebar from './MainSidebar';
import RenderFolder from './RenderFolder';


function Main (props){
 
    return(
      <div>
      <header>
      <Header />
      </header>
      <section className="side">
      <MainSidebar folders={props.folders}/>
      </section>
      <section className ="main">
      <MainMain />
      </section>
      <RenderFolder />
      </div>
      
    );
    
}


export default Main;


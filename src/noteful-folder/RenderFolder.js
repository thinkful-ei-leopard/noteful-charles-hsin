import React from 'react';
import Folder from './Folder';
import store from './store';


export default function RenderFolder (props) {
  console.log(store.folders)
  
  return (
    <section className='FolderMain'>
      <ul>
        {store.folders.map(folder =>
          <li key={folder.id}>
            <Folder
              id={folder.id}
              name={folder.name}
            />
          </li>
        )}
      </ul>
    </section>
)}


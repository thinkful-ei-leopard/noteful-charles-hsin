import React from 'react';
import Note from './Note';
import store from './store';


export default function RenderFolder (props) {
  console.log(props.notes)
  
  return (
    <section className='FolderMain'>
      <ul>
        {props.notes.map(note =>
          <li key={note.id}>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
    </section>
)}


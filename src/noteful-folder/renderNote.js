import React from 'react';
import Note from './Note';
import store from './store';


export default function RenderNotes(props) {
  console.log(store.notes)
  
  return (
    <section className='NotesMain'>
      <ul>
        {store.notes.map(note =>
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
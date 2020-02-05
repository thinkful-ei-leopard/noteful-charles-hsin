import React from 'react';
import Note from './Note';
import store from './store';
import Moment from 'moment';

export default function RenderNotes(props) {
 
  
  
  

  return (
    <section className='NotesMain'>
      <ul>
        {store.notes.map(note =>
          <li key={note.id}>
            <Note
              id={note.id}
              name={note.name}
              modified= {Moment(note.modified).format("Do MMM YYYY")} 
            />
          </li>
        )}
      </ul>
    </section>
)}
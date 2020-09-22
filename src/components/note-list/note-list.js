import React, { useContext } from 'react';
import './note-list.scss';
import NoteListItem from '../note-list-item';
import { DataContext } from '../app/app';

const NoteList = () => {

    const data = useContext(DataContext);

    const items = data.map(el => {
        return <NoteListItem key={el.id} noteItem={el} />
    });

    return (
        <ul className='note-list'>
            {items}
        </ul>
    );
};

export default NoteList;

import React, { useState } from 'react';
import './app.scss';
import NoteList from '../note-list';
import AddNote from '../add-note';
import DeleteNotes from '../delete-notes';

export const DataContext = React.createContext();
export const ItemDelete = React.createContext();
export const ItemEdit = React.createContext();
export const ItemCheck = React.createContext();

const App = () => {

    const [noteData, setNoteData] = useState([
        {id: 1, value: 'Learn HTML', checked: false},
        {id: 2, value: 'Learn CSS', checked: false},
        {id: 3, value: 'Learn JS', checked: false},
        {id: 4, value: 'Learn React', checked: false}
    ]);

    const shortid = require('shortid');

    const onNoteAdded = (noteText) => {
        if (noteText !== '') {
            setNoteData(data => {
                return [
                    ...data,
                    {
                        id: shortid.generate(),
                        value: noteText,
                        checked: false
                    }
                ];
            });
        }
    };

    const onDeleteItem = (id) => {
        setNoteData(prevData => {
            const delIndex = prevData.findIndex(el => el.id ===id);
            return [
                ...prevData.slice(0, delIndex),
                ...prevData.slice(delIndex + 1)
            ];
        });
    };

    const onEditItem = (id, editedValue) => {
        setNoteData(data => {
            const editIndex = data.findIndex(el => el.id === id);
            data[editIndex].value = editedValue;
            return [...data];
        })
    }

    const onCheckItem = (id, checkedValue) => {
        setNoteData(data => {
            const checkIndex = data.findIndex(el => el.id ===id);
            data[checkIndex].checked = checkedValue;

            return data;
        });
    }

    const onDeleteChecked = () => {
        setNoteData(data => {
            const newData = data.filter(el => el.checked === false);
            return newData;
        });
    }

    return (
        <DataContext.Provider value={noteData} >
        <ItemDelete.Provider value={onDeleteItem} >
        <ItemEdit.Provider value={onEditItem} >
        <ItemCheck.Provider value={onCheckItem} >
            <div className='app'>
                <h2>AdMotion Note App</h2>
                {noteData.length > 0 ? 
                    <NoteList /> : 
                    <p>Add some notes</p>}
                <AddNote onNoteAdded={onNoteAdded} />
                <DeleteNotes onDeleteChecked={onDeleteChecked}  />
            </div>
        </ItemCheck.Provider>
        </ItemEdit.Provider>
        </ItemDelete.Provider>
        </DataContext.Provider>
    );
};

export default App;

import React, { useState, useContext } from 'react';
import { ItemCheck, ItemDelete, ItemEdit } from '../app/app';
import './note-list-item.scss';

const NoteListItem = ({noteItem}) => {
    const [editMode, setEditMode] = useState(false);

    const { id, value } = noteItem;

    const [editValue, setEditValue] = useState(value);
    const [checkedValue, setCheckedValue] = useState(false);

    const onDeleteItemFn = useContext(ItemDelete);
    const onEditItemFn =  useContext(ItemEdit);
    const onCheckItemFn = useContext(ItemCheck);

    const onChecked = (e) => {
        setCheckedValue(e.target.checked);
        onCheckItemFn(id, e.target.checked);
    };

    const onEdit = () => {
        setEditMode(prevMode => !prevMode);
    };

    const onDeleteItem = () => {
        onDeleteItemFn(id);
    };

    const onEditSubmit = (e) => {
        e.preventDefault();
        onEditItemFn(id, editValue);
        onEdit();
    }

    const editForm = (
        <form className='edit-form' onSubmit={onEditSubmit}>
            <input 
                type='text' 
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)} 
                autoFocus />
            <button>Submit</button>
        </form>
    );

    return (
        <li className='note-list-item'>
            <input className='note-list-checkbox' type='checkbox' checked={checkedValue} onChange={onChecked} />
            
            {editMode ? editForm : <span className='title'>{value}</span>}

            <button onClick={onDeleteItem}>Delete</button>

            <button onClick={onEdit}>Edit</button>
        </li>
    );
};

export default NoteListItem;

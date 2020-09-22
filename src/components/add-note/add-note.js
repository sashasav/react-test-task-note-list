import React, {useState} from 'react';
import './add-note.scss';

const AddNote = ({ onNoteAdded }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        onNoteAdded(inputValue);
        setInputValue('');
    }

    return (
        <div className='add-note'>
            <form onSubmit={onFormSubmit}>
                <input type='text' placeholder='New note' onChange={onInputChange} value={inputValue} />
                <button type='submit'>Add note</button>
            </form>
        </div>
    );
};

export default AddNote;

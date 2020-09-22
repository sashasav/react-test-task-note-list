import React from 'react';

const DeleteNotes = ({onDeleteChecked}) => {
    return (
        <button onClick={onDeleteChecked}>Delete marked notes</button>
    );
};

export default DeleteNotes;

import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">Doc Number: {note.document_number}</h5>
                    <p className="card-text">City: {note.city}</p>
                    <p className="card-text">Consignee: {note.consignee}</p>
                    <p className="card-text">Consignor: {note.consignor}</p>
                    <p className="card-text">Date: {note.date}</p>
                    <i className="fa-solid fa-trash-can mx-2 " onClick={()=>{ deleteNote (note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem

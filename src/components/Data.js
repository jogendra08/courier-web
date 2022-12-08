import React, { useContext, useEffect, useRef, useState } from 'react'
import Addnote from './Addnote';
import noteContext from '../context/notes/noteContext'
import Noteitem from './Items';
import { useNavigate } from 'react-router-dom'


const Notes = () => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem('token')){
      getNotes()
    }
    else{
      navigate("/login")
    }
    
  })

  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ id: '', edocumentNumber: '', ecity: '', econsignee: '', econsignor: '', eweight: '', etotal: '' })

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, edocumentNumber: currentNote.documentNumber, ecity: currentNote.city, econsignee: currentNote.consignee, econsignor: currentNote.consignor, eweight: currentNote.weight, etotal: currentNote.total })

  }

  const handleClick = (e) => {
    editNote(note.id, note.edocumentNumber, note.ecity, note.econsignee, note.econsignor, note.eweight, note.etotal)
    refClose.current.click();
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Addnote />
      {/* <!-- Button trigger modal --> */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Document</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='container'>
                <div className='row'>
                  <div className="col-sm-4 mb-3">
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Date" />
                  </div>
                  <div className="col-sm-4 mb-3">
                    <input type="text" className="form-control" id="edocumentNumber" name='edocumentNumber' value={note.edocumentNumber} onChange={onChange} placeholder="Document Number" minLength={3} required />
                  </div>
                  <div className="col-sm-4 mb-3">
                    <input type="text" className="form-control" id="ecity" name='ecity' value={note.ecity} onChange={onChange} placeholder="City" minLength={3} required />
                  </div>
                </div>
                <div className='row'>
                  <div className="col-sm-4 mb-3">
                    <input type="text" className="form-control" id="econsignee" name='econsignee' value={note.econsignee} onChange={onChange} placeholder="Consignee" minLength={2} required />
                  </div>
                  <div className="col-sm-4 mb-3">
                    <input type="text" className="form-control" id="econsignor" name='econsignor' value={note.econsignor} onChange={onChange} placeholder="Consignor" minLength={2} required />
                  </div>
                  <div className="col-sm-2 mb-3">
                    <input type="text" className="form-control" id="eweight" name='eweight' value={note.eweight} onChange={onChange} placeholder="Weight" />
                  </div>
                  <div className="col-sm-2 mb-3">
                    <input type="doc" className="form-control" id="etotal" name='etotal' value={note.etotal} onChange={onChange} placeholder="Total Amount" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        <h2>Your data</h2>
        {notes.length===0 && "No data to display"}
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </div>
  )
}

export default Notes

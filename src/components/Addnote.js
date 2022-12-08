import React, { useContext, useState } from 'react'

import noteContext from '../context/notes/noteContext'


const Addnote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ documentNumber: "", city: "", consignee: "", consignor: "", weight: "", total: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.documentNumber, note.city, note.consignee, note.consignor, note.weight, note.total);
        setNote({documentNumber: "", city: "", consignee: "", consignor: "", weight: "", total: ""})
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-sm-4 mb-3">
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Date" />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <input type="text" className="form-control" id="documentNumber" name='documentNumber' value={note.documentNumber} onChange={onChange} placeholder="Document Number" minLength={3} required />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <input type="text" className="form-control" id="city" name='city' value={note.city} onChange={onChange} placeholder="City" minLength={3} required />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4 mb-3">
                        <input type="text" className="form-control" id="consignee" name='consignee' value={note.consignee} onChange={onChange} placeholder="Consignee" minLength={2} required />
                    </div>
                    <div className="col-sm-4 mb-3">
                        <input type="text" className="form-control" id="consignor" name='consignor' value={note.consignor} onChange={onChange} placeholder="Consignor" minLength={2} required />
                    </div>
                    <div className="col-sm-2 mb-3">
                        <input type="text" className="form-control" id="weight" name='weight' value={note.weight} onChange={onChange} placeholder="Weight" />
                    </div>
                    <div className="col-sm-2 mb-3">
                        <input type="doc no" className="form-control" id="total" name='total' value={note.total} onChange={onChange} placeholder="Total Amount" />
                    </div>
                </div>
                <div className='submitButton' style={{ textAlign: "center", paddingBottom: "20px" }}>
                    <div className=''>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Upload</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addnote

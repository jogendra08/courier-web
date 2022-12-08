import NoteContext from "./noteContext";

import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // get all a notes
    const getNotes = async () => {
        // api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });

        const json = await response.json()
        console.log(json)
        setNotes(json)
    }

    // add a note
    const addNote = async (document_number, city, consignee, consignor, weight, total) => {
        // api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ document_number, city, consignee, consignor, weight, total })
        });
        const note = await response.json()
        setNotes(notes.concat(note))
    }

    // delete a note
    const deleteNote =async (id) => {
        // api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json =await response.json();
        console.log(json)

        console.log("Deleting a note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // update a note
    const editNote = async (id, document_number, city, consignee, consignor, weight, total) => {
        // api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ document_number, city, consignee, consignor, weight, total })
        });

        const json = await response.json()
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        // logic to edit in clint 
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].document_number = document_number;
                newNotes[index].city = city;
                newNotes[index].consignee = consignee;
                newNotes[index].consignor = consignor;
                newNotes[index].weight = weight;
                newNotes[index].total = total;
                break;
            }
        }
        setNotes(newNotes);
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
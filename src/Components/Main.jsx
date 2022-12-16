import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Card from './Card';

const Main = (
    {
        Add, NoteHeadingInput, NoteDescriptionInput, HandleNoteHeading, HandleNoteDescription, NotesStrorage, DeleteNote,
        EditNote, AddBtnTxt, CancelBtn, clear , NoNotes
    }
) => {

    useEffect(() => {


    }, []);

    return (
        <>
            <div>
                <h1 className="text-center my-2">NOTES</h1>
                <section className="add-notes container">
                    <div className="d-flex justify-content-between align-items-start">
                        <input type="text" className="form-control mx-1" value={NoteHeadingInput} onChange={(e) => HandleNoteHeading(e)} id="inputHeading" placeholder="Title" />
                        <input type="text" className="form-control mx-1" value={NoteDescriptionInput} onChange={(e) => HandleNoteDescription(e)} id="inputDescription" placeholder="Note" />
                        <div className="d-flex">
                            <button type="button" className=" btn btn-success mx-2" onClick={Add} id="addBtn">{AddBtnTxt}</button>
                            <button type="button" id="cancelBtn" className={`${CancelBtn} btn btn-warning mx-2`} onClick={clear}>Cancel</button>
                        </div>
                    </div>
                </section>
                <h2 className='container my-3' id="">{NoNotes}</h2>
                <section className="notes container my-4">
                    <div className="row my-4" id="NotesContainer">
                        <Card NotesStrorage={NotesStrorage} DeleteNote={DeleteNote} EditNote={EditNote} />
                    </div>
                </section>
            </div>
        </>

    )
}

export default Main
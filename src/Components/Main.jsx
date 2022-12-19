import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Card from './Card';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Main = (
    {
        Add, NoteHeadingInput, NoteDescriptionInput, HandleNoteHeading, NotesStrorage, DeleteNote, // , HandleNoteDescription
        EditNote, AddBtnTxt, CancelBtn, clear, NoNotes, setNoteDescriptionInput
    }
) => {

    const TitleRef = useRef(null)

    useEffect(() => {
        if (!NotesStrorage || NotesStrorage.length <= 0) {
            TitleRef.current.focus()
        }
    }, []);

    return (
        <>
            <div>
                <h1 className="text-center my-2">NOTES</h1>
                <section className="add-notes container">
                    <div className="">
                        <input type="text" className="form-control mb-1" value={NoteHeadingInput} onChange={(e) => HandleNoteHeading(e)} id="inputHeading" placeholder="Title" ref={TitleRef} />
                        {/* <input type="text" className="form-control mx-1" value={NoteDescriptionInput} onChange={(e) => HandleNoteDescription(e)} id="inputDescription" placeholder="Note" /> */}
                        <ReactQuill theme="snow" value={NoteDescriptionInput} onChange={setNoteDescriptionInput} id="inputDescription" placeholder="Note" />
                        <div className="d-flex mt-1">
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
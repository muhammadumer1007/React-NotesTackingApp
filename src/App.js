import { useState, useEffect } from 'react'
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [IsEdit, setIsEdit] = useState(false)
  const [NoteHeadingInput, setNoteHeadingInput] = useState('')
  const [NoteDescriptionInput, setNoteDescriptionInput] = useState('')
  const [NotesStrorage, setNotesStrorage] = useState(JSON.parse(localStorage.getItem('NotesArray')))
  const [AddBtnTxt, setAddBtnTxt] = useState('Add')
  const [CancelBtn, setCancelBtn] = useState('d-none')
  const [EditIndex, setEditIndex] = useState(null)
  const [ShowAlert, setShowAlert] = useState(false)
  const [ShowAlertMsg, setShowAlertMsg] = useState('')
  let NoNotes = NotesStrorage ? (NotesStrorage.length > 0 ? '' : 'Nothing To show') : 'Nothing To show'
  let NotesObj = new Object;
  let NotesArr = []

  const clear = () => {
    NotesObj = null;
    NotesArr = null;
    setNoteHeadingInput('')
    setNoteDescriptionInput('')
    setNotesStrorage(JSON.parse(localStorage.getItem('NotesArray')))
    setAddBtnTxt('Add')
    setCancelBtn('d-none')
    setIsEdit(false)
    NoNotes = NotesStrorage ? (NotesStrorage.length > 0 ? '' : 'Nothing To show') : 'Nothing To show'
    // setEditIndex(null)
  }

  const Add = () => {
    if (NoteHeadingInput === '' && NoteDescriptionInput === '') {
      handleShowAlert("Can Not Save An Empty Note")
    }
    else {
      if (IsEdit == true) {
        let EditPush = NotesStrorage[EditIndex]
        let { NoteHeading, NoteDescription } = NotesStrorage[EditIndex]
        NotesObj = {
          NoteHeading: NoteHeadingInput,
          NoteDescription: NoteDescriptionInput
        }
        setNotesStrorage(NotesStrorage.splice(EditIndex, 1, NotesObj))
        localStorage.setItem('NotesArray', JSON.stringify(NotesStrorage))
        handleShowAlert("Note Edited")
      }
      else {
        if (!NotesStrorage) {
          localStorage.setItem('NotesArray', '[]')
          setNotesStrorage(() => JSON.parse(localStorage.getItem('NotesArray')))
        }

        NotesObj = {
          NoteHeading: NoteHeadingInput,
          NoteDescription: NoteDescriptionInput
        }

        NotesArr = JSON.parse(localStorage.getItem('NotesArray'))
        NotesArr.push(NotesObj)


        localStorage.setItem('NotesArray', JSON.stringify(NotesArr))
        handleShowAlert("Note Added")
      }
    }
    clear()
  }

  const DeleteNote = (e) => {
    setNotesStrorage(NotesStrorage.splice(e, 1))
    localStorage.setItem('NotesArray', JSON.stringify(NotesStrorage))
    handleShowAlert("Note Deleted")
    clear()
  }

  const EditNote = (e) => {
    let EditArrSpc = NotesStrorage[e]
    let { NoteHeading, NoteDescription } = EditArrSpc
    setNoteHeadingInput(NoteHeading)
    setNoteDescriptionInput(NoteDescription)
    setAddBtnTxt('Edit')
    setCancelBtn('d-block')
    setIsEdit(true)
    setEditIndex(e)
  }


  const HandleNoteHeading = (event) => {
    setNoteHeadingInput(event.target.value)
  }
  const HandleNoteDescription = (event) => {
    setNoteDescriptionInput(event.target.value)
  }

  const handleShowAlert = (msg) => {
    setShowAlert(true)
    setShowAlertMsg(msg)
    setTimeout(() => {
      setShowAlert(false)
      setShowAlert(false)
      setShowAlertMsg('')
    }, 2000);
  }

  return (

    <div className="App">
      <Header />
      <Main
        Add={Add}
        NoteHeadingInput={NoteHeadingInput} NoteDescriptionInput={NoteDescriptionInput} HandleNoteHeading={HandleNoteHeading} HandleNoteDescription={HandleNoteDescription}
        NotesStrorage={NotesStrorage} DeleteNote={DeleteNote} EditNote={EditNote} AddBtnTxt={AddBtnTxt} CancelBtn={CancelBtn}
        clear={clear} NoNotes={NoNotes}
      />
      {ShowAlert && <Alert ShowAlertMsg={ShowAlertMsg} />}
    </div>
  );
}
export default App;
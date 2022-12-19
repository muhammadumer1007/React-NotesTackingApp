import React from 'react'

function Card({ NotesStrorage, DeleteNote, EditNote }) {

    if (NotesStrorage != null) {
        return (
            <>

                {
                    NotesStrorage.map((e, i) => {
                        return (
                            <div className="col-xl-4 col-md-4 col-sm-12  my-1" key={i}>
                                <div className="card mx-auto" style={{ width: '15rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{e.NoteHeading}</h5>
                                        <div className="card-text" dangerouslySetInnerHTML={{ __html: e.NoteDescription }}></div>
                                        <button type="button" className=" btn btn-info" id="EditBtn" onClick={(e) => EditNote(i)}>Edit</button>
                                        <button type="button" className=" btn btn-danger" id="DeleteBtn" onClick={(e) => DeleteNote(i)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </>
        )
    }



}

export default Card
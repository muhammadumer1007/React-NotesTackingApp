import React from 'react'

function Alert({ ShowAlertMsg }) {
    return (
        <>
            <div className='show' id="snackbar">
                {ShowAlertMsg}
            </div>
        </>
    )
}

export default Alert
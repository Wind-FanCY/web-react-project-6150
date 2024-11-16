// import { useState } from "react"
import './Reorder.css'

function Reorder( { onReorder } ) {
    
    return (
        <>
            <button className="buttons__reorder" onClick={onReorder}>Reorder</button>
        </>
    )
}

export default Reorder
import React from 'react'
import './TodoNote.css'

function TodoNote({todoNote, handleCheckboxChange, handleDeleteTrue = false, handleDelete = () => {}}) {
  return (
    <div key={todoNote.id} className="todoNote">
            <div style={{display: "flex", flexDirection: "row"}}>
                <input 
                    type="checkbox"
                    id="completed" 
                    name="completed"
                    className='checkbox'
                    checked={todoNote.completed}
                    value={todoNote.completed}
                    onChange={() => handleCheckboxChange(todoNote.id)}
                />
                <p>{todoNote.completed 
                    ? <span style={{textDecoration: "line-through"}}>{todoNote.title}</span>  
                    : todoNote.title}
                </p>
                { handleDeleteTrue && 
                    <>
                        <button className='btn-delete' style={{marginLeft: "auto"}} onClick={() => handleDelete(todoNote.id)}>Delete</button> 
                    </>
                }
                {/* <button onClick={() => handleDelete(todoNote.id)}>Delete</button> */}
            </div>
        </div>
  )
}

export default TodoNote
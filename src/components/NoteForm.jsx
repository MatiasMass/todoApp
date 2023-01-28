import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { add_todo } from '../features/todo/todoNoteSlice'
import { v4 as uuid } from 'uuid';

import './NoteForm.css'

function NoteForm({createTodoNote}) {

    const dispatch = useDispatch()
    // const [titleInput, setTitleInput] = useState("")

    const unique_id = uuid();

    const [todoNote, setTodoNote] = useState({
        id: unique_id,
        title: "",
        completed: false
    })

    const handleChange = (event) => {
        setTodoNote({
            ...todoNote,
            title: event.target.value
        })
    }

    const addTodoNote = (event) => {
        // event.preventDefault()
        
        // const unique_id = uuid();
        // const small_id = unique_id.slice(0,8)

        // setTodoNote({
        //     ...todoNote,
        //     id: small_id,
        // })

        // console.log(todoNote)
        
        // createTodoNote(todoNote)
        // dispatch(add_todo(todoNote))

        // setTodoNote({
        //     id: 0,
        //     title: "",
        //     completed: false
        // })
        event.preventDefault()
        
        // setTodoNote({
        //     ...todoNote,
        //     id: unique_id,
        // })

        // console.log(todoNote)
        
        createTodoNote(todoNote)
        dispatch(add_todo(todoNote))
        
        const unique_id = uuid();

        setTodoNote({
            id: unique_id,
            title: "",
            completed: false
        })
    }

  return (
    <form action="" onSubmit={addTodoNote} className="form">
        <input 
            type="text" 
            name="title"
            className='input-text'
            id="title"
            placeholder='add details'
            value={todoNote.title}
            onChange={handleChange}
        />
        <button type='submit' className='btn'>Add</button>
    </form>
  )
}

export default NoteForm
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// useSelector es una función de React Hook que se utiliza para acceder al estado de un almacén de Redux desde un componente de React. Se utiliza junto con la función useDispatch para conectar un componente de React a un almacén de Redux y actualizar el estado de la aplicación en respuesta a las acciones que se disparen.
import todoNotesService from '../services/todoNotes'
import { setInitialNotes, toggle_todo, delete_todo} from '../features/todo/todoNoteSlice'
import { useLocation } from 'react-router-dom'
import NoteForm from './NoteForm'
import './ListNotes.css'
import TodoNote from './TodoNote'


function ListOfTodoNotes() {
    const location = useLocation();
//   console.log(location.pathname);

  const dispatch = useDispatch()
  const todoNotes = useSelector(state => state.todoNote.todoNote)

  useEffect(() => {
    todoNotesService.getAll().then((response) => {
      dispatch(setInitialNotes(response))
    })
  }, [])

    const handleCheckboxChange = (id) => {
        // console.log(todoNote)

        // let todoNoteChanged = {
        //     ...todoNote,
        //     completed: !todoNote.completed
        // }

        // todoNotesService.toggleImportance(todoNoteChanged.id, todoNoteChanged)
        dispatch(toggle_todo(id))
    }
    
    const handleDelete = (id) => {
        
        todoNotesService.deleteTodoNote(id)
        dispatch(delete_todo(id))
    }

    const activeTodoNotes = todoNotes.filter(todoNote => todoNote.completed === false)
    const completedTodoNotes = todoNotes.filter(todoNote => todoNote.completed === true)

  return (
    <div className="todoList">
       
        {location.pathname === '/'

        &&  (<> <NoteForm createTodoNote={todoNotesService.create} />
         {todoNotes.map(todoNote => {
        return(
            <TodoNote 
                key={todoNote.id} 
                todoNote={todoNote} 
                handleCheckboxChange={handleCheckboxChange}
            />
        )
        })}</>)}

     {location.pathname === '/active/' 
     &&  (<><NoteForm createTodoNote={todoNotesService.create} /> 
     {activeTodoNotes.map(todoNote => {
      return(
        <TodoNote 
            key={todoNote.id} 
            todoNote={todoNote} 
            handleCheckboxChange={handleCheckboxChange}
        />
      )
     })}</>)}

    {location.pathname === '/completed/' && completedTodoNotes.map(todoNote => {
      return(
        
        <TodoNote 
                key={todoNote.id} 
                todoNote={todoNote} 
                handleCheckboxChange={handleCheckboxChange}
                handleDeleteTrue={true}
                handleDelete={handleDelete}
            />

        // <div key={todoNote.id}>
        //     <div style={{display: "flex", flexDirection: "row"}}>
        //         <p>{todoNote.completed 
        //             ? <span style={{textDecoration: "line-through"}}>{todoNote.title}</span>  
        //             : todoNote.title}</p>
        //         <input 
        //             type="checkbox" 
        //             id="completed" 
        //             name="completed"
        //             // checked={todoNote.completed}
        //             value={todoNote.completed}
        //             checked={todoNote.completed}
        //             onChange={() => handleCheckboxChange(todoNote.id)}
        //         />
        //     </div>
        //   <button onClick={() => handleDelete(todoNote.id)}>x</button>
        // </div>
      )
     })}
    </div>
  )
}

export default ListOfTodoNotes

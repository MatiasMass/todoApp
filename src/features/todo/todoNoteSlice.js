// los reducers son las formas en que se pueden actualizar el estado de la aplicación
import {createSlice} from '@reduxjs/toolkit';
// import taskReducer from '../features/tasks/taskSlice';
// un slice es una parte del estado de la aplicación
// en este caso el estado de la calculadora
// el estado de la calculadora es un número


export const todoNoteSlice = createSlice({
    name: 'todoNote',
    initialState: {
        todoNote: []
    },
    reducers: {
        setInitialNotes: (state, action) => {
            state.todoNote = action.payload
        },
        add_todo: (state, action) => {
            state.todoNote.push(action.payload)
        },
        toggle_todo: (state, action) => {
            // console.log(action.payload)
            state.todoNote.map((todo) => {
                if(todo.id === action.payload){
                    // console.log(todo.id)
                    todo.completed = !todo.completed
                }
            })
            
        },
        delete_todo: (state, action) => {
            state.todoNote = state.todoNote.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { 
    setInitialNotes,
    add_todo,
    toggle_todo,
    delete_todo
} = todoNoteSlice.actions

export default todoNoteSlice.reducer
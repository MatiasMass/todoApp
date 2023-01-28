/*
"Reducer" es un término que se utiliza en el contexto de la librería Redux, que es una herramienta para manejar el estado de aplicaciones JavaScript. Un "reducer" es una función que toma el estado actual de la aplicación y una acción, y devuelve un nuevo estado actualizado.

En Redux Toolkit, un "reducer" es una función que es responsable de actualizar una porción específica del estado global de la aplicación. Esta función se ejecuta cada vez que se dispatche una acción, y su objetivo es determinar cómo debe cambiar el estado en función de la acción recibida.

Un "reducer" en Redux Toolkit se define con la función createSlice() de la librería, esta función recibe como primer parametro un objeto con el estado inicial y el segundo parametro es un objeto con las funciones que modificaran el estado, estas funciones se llaman "reducers".
*/

import { configureStore } from '@reduxjs/toolkit'
import { todoNoteSlice } from '../features/todo/todoNoteSlice'

export const store = configureStore({
  reducer: {
    todoNote: todoNoteSlice.reducer,
  },
})
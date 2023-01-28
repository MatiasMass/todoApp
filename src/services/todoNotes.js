import axios from 'axios'

const baseUrl = 'http://localhost:3004/todo'


const getAll = async () => {
    const data = await axios.get(baseUrl)

    return data.data
}

const create = async (newTodo) => {
    const data = await axios.post(baseUrl, newTodo)

    return data.data
}

const toggleImportance = async (id, todoNoteChanged) => {
    const data = await axios.put(`${baseUrl}/${id}`, todoNoteChanged)

    return data.data
}

const deleteTodoNote = async (id) => {
    const data = await axios.delete(`${baseUrl}/${id}`)

    return data.data
}


export default { 
    getAll, 
    create, 
    toggleImportance, 
    deleteTodoNote 
}

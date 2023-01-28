import ListOfTodoNotes from "./components/ListNotes"
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import styled from "styled-components"


function App() {
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333333;

    &:visited {
      // color: green;
      background-color: yellow;
    }
   `

  return (
    <div className="App">
      <div className="container">
        <h1>#todo</h1>
        <nav className="navbar">
          <ul>
            <li><StyledLink  to="/" className="link">All</StyledLink></li>
            <li><StyledLink to='/active/' className="link" >Active</StyledLink></li>
            <li><StyledLink to='/completed/' className="link">Completed</StyledLink></li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<ListOfTodoNotes />} />
          <Route exact path="/active/" element={<ListOfTodoNotes />} />
          <Route exact path="/completed/" element={<ListOfTodoNotes />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

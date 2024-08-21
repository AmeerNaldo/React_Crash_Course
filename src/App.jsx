import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav.jsx";
import Users from "./pages/Users.jsx";
// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
// import Counter from "./components/Counter.jsx";
// import React, { useState, useEffect } from "react";

function App() {
  return (
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:username" element={<Users />}></Route>
        </Routes>
      </Router>
  );
}

export default App;

// const [showModal, setShowModal] = useState(false);

// function onTodoDelete() {
//   setShowModal(true);
// }

// function cancelModal() {
//   setShowModal(false);
// }

// function confirmModal() {
//   setShowModal(false);
// }

// useEffect(() => {
//   console.log(`ONLY on mount`)
// }, [])

// useEffect(() => {
//   console.log(`on mnount and on ${showModal} change`)
// }, [showModal])

// useEffect(() => {
//   console.log(`EVERY render`)
// })

// return (
//   <div>
//     <Title />
//     <div>
//       <input
//         type="text"
//         onChange={(event) => {
//           console.log(event.target.value);
//         }}
//       />
//       <button onClick={() => setShowModal(true)}>Add todo</button>
//     </div>
//     <div className="todo__wrapper">
//       <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
//       <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
//       <Todo onTodoDelete={onTodoDelete} title="Land a 100k Job" />
//     </div>
//     {showModal && (
//       <Modal
//         cancelModal={cancelModal}
//         confirmModal={confirmModal}
//         title="Are you sure you want to delete?"
//       />
//     )}
//   </div>
// );

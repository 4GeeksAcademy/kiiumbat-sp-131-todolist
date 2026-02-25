import React, { useState } from "react";
// 1. Importamos el componente y el icono específico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>Mi Lista</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputValue.trim() !== "") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder='What do you need to do?'
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}> 
            {item}
            {/* 2. Sustituimos el <i> por el componente FontAwesomeIcon */}
           <FontAwesomeIcon 
            icon={faXmark} 
            className="delete-icon"
            style={{ color: "white", cursor: "pointer" }} // <--- Añade esto
             onClick={() => {
             setTodos(todos.filter((t, currentIndex) => index !== currentIndex));
              }} 
            />
          </li>
        ))}
      </ul>
      {/* Corregido el div del contador */}
      <div>{todos.length} {todos.length === 1 ? "task" : "tasks"}</div>
    </div>
  );
};

export default Home;

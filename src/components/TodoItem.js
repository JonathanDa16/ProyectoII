import { useState } from "react";   
import './TodoItem.css'
import { TodoModal } from "./TodoModal/TodoModal";

const style = {
    marginBottom: "15px",
    paddingLeft: "max(20px, 2vw)",
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "12px",
    borderColor: "#E0E0E0",
    listStyleType: "none",
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
};

const fontSubtitleStyle = {
    color: "#B6B6B6",
}

const verticalLine = {
    borderLeft: '6px solid green',
    height: '80px',
}

function TodoItem({setIsModalOpen}) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <li style={style} >
                <div className="todo-item__container" onClick={() => setIsModalOpen(true)}>
                <p className={`todo-item__title${ isChecked ? "--completed" : ""}`}>Actividad</p>
                <p style={fontSubtitleStyle}>Categoria</p>
                </div>
                <input 
                    type="checkbox" 
                    className="todo-item__checkbox .todo-item__checkbox--checked"
                    onChange={() => setIsChecked(!isChecked)}
                />
            </li>
        </>
    );
}

export { TodoItem };
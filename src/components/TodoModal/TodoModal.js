import { useState } from "react";   
import './TodoModal.css'

function TodoModal({isVisible}) {
    const difficultyOptions = [
        {value: 1, name: "Muy Fácil"},
        {value: 2, name: "Fácil"},
        {value: 3, name: "Intermedio"},
        {value: 4, name: "Dificil"},
        {value: 5, name: "Muy Dificil"},
    ];

    const importanceOptions = [
        {value: 1, name: "Nada Importante"},
        {value: 2, name: "Poco Importante"},
        {value: 3, name: "Algo Importante"},
        {value: 4, name: "Importante"},
        {value: 5, name: "Muy Importante"},
    ];

    const knowledgeOptions = [ 
        { value: 1, name: "Sin conocimiento" },
        { value: 2, name: "Básico" },
        { value: 3, name: "Intermedio" },
        { value: 4, name: "Avanzado" },
        { value: 5, name: "Experto" }
    ];    

    return (
        <div className={`todo-modal ${!isVisible ? 'hide' : ''}`}>
            <h2>Nueva Tarea</h2>

            <form>
                <div className="todo-modal__input-group">
                <label>Titulo</label>
                <input type="text"></input>
                </div>

                <div className="todo-modal__input-group">
                <label>Descripción</label>
                <textarea rows="4" cols="50"></textarea>
                </div>

                <div className="todo-modal__input-group">
                <label>Fecha de entrega</label>
                <input type="date"></input>
                </div>

                <div className="todo-modal__input-group">
                    <label>Estimación en horas</label>
                    <input type="number"></input>
                </div>

                <div className="todo-modal__input-group">
                    <label>Dificultad</label>
                    <select name="select">
                        {difficultyOptions.map(option => <option value={option.value}>{option.name}</option>)}
                    </select>
                </div>

                <div className="todo-modal__input-group">
                    <label>Importancia</label>
                    <select name="select">
                        {importanceOptions.map(option => <option value={option.value}>{option.name}</option>)}
                    </select>
                </div>

                <div className="todo-modal__input-group">
                    <label>Conocimiento del tema</label>
                    <select name="select">
                        {knowledgeOptions.map(option => <option value={option.value}>{option.name}</option>)}
                    </select>
                </div>

                <input type="submit" value="Añadir"></input>
            </form>
        </div>
    );
}

export { TodoModal };
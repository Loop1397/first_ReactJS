import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import styles from "./DoApp.module.css";

function DoApp() {
    let timer = null;
    const [time, setTime] = useState(moment());
    const [name, setName] = useState("");
    const [nameInput, setNameInput] = useState(false);
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const getTime = () => {
        setTime(moment());
    };
    useEffect(() => {
        setInterval(getTime, 1000);
        return () => {
            setInterval(getTime, 1000);
        };
    }, []);

    const onChangeName = e => setName(e.target.value);
    const onSubmitName = e => {
        e.preventDefault();
        if (name === "") {
            return;
        }
        setNameInput(true);
    };

    const onChangeTodo = e => setTodo(e.target.value);
    const onSubmitTodo = e => {
        e.preventDefault();
        if (todo === "") {
            return;
        }
        setTodos(currentArray => [...currentArray, todo]);
        setTodo("");
    };
    const deleteTodo = e => {
        setTodos(todos.filter(item => item !== e.target.value));
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__box}>
                <h1>현재 시간 : {time.format("HH:mm:ss")}</h1>
                <div>
                    {!nameInput ? (
                        <form onSubmit={onSubmitName} method="post">
                            <input className={styles.input__box} type="text" value={name} onChange={onChangeName} placeholder="insert name" />
                        </form>
                    ) : (
                        <h2>Hello, {name}!</h2>
                    )}
                </div>
                <form onSubmit={onSubmitTodo} method="post">
                    <input className={styles.input__box} type="text" value={todo} onChange={onChangeTodo} placeholder="Write a To Do here" />
                </form>
                <ul>
                    {todos.map((item, index) => (
                        <li key={index}>
                            {item}

                            <button className={styles.delete__button} value={item} onClick={deleteTodo}>
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DoApp;

import React, {MutableRefObject, useRef, useState} from "react";

interface ITask {
    id: number,
    task: string
}

export default function ToDo() {

    // const [task, setTask] = useState<ITask>({id: 0, task: ""});
    const [list, setList] = useState<ITask[]>([]);

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    function removeTask(id: number): void {
        setList(prev => prev.filter((task: ITask) => task.id !== id))
    }

    function addList(newTask: ITask): void {
        newTask.task.trim() ? setList(prev => [...prev, newTask]) : "" ;
         inputRef.current.value = "";
    }



    return (
        <div>
            <input type="text" ref={inputRef}  />
            <button type="submit" onClick={() => addList({id: Math.floor(Math.random() * 100), task: inputRef.current.value})}>add</button>

            <ul>
                {
                    list.map(item => {
                        return (
                            <li key={item.id}>
                                {item.task}
                                <button onClick={() => removeTask(item.id)}>remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
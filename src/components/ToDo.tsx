import React, {useState} from "react";

interface ITask {
    id: number,
    task: string
}

export default function ToDo() {

    const [task, setTask] = useState<ITask>({id: 0, task: ""});
    const [list, setList] = useState<ITask[]>([]);


    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setTask({id: Math.floor(Math.random() * 100), task: e.target.value});

    }

    function removeTask(id: number): void {
        setList(prev => prev.filter((task: ITask) => task.id !== id))
    }

    function addList(newTask: ITask): void {
        newTask.task.trim() !== "" ? setList(prev => [...prev, newTask]) : "";
        setTask({id: 0, task: ""})
    }


    return (
        <div>
            <input type="text" onChange={handleChange} value={task.task}/>
            <button type="submit" onClick={() => addList(task)}>add</button>

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
import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api'
import {TaskCard} from './TaskCard'

export function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const response = await getAllTasks()
            setTasks(response.data)
        }
        loadTasks()
    }, [])

    return <div className='grid m-3 md:grid-cols-3 lg:grid-cols-2 gap-3'>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task}/>
        ))}
    </div>
}

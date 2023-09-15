import { useNavigate } from 'react-router-dom'


export function TaskCard({ task }) {
    const navigate = useNavigate()
    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 rounded-lg'
            onClick={() => {
                navigate(`/tasks/${task.id}`)
            }}>
            <h1 className='font-bold uppercase text-xl'>{task.title}</h1>
            <p className='mt-3'>{task.description}</p>
        </div>
    )
}
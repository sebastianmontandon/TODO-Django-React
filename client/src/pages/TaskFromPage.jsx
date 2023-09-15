import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-hot-toast'

export function TaskFromPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('Task updated', {
                position: 'top-right',
                style:{
                    background: "#101010",
                    color: 'white',
                    font:'status-bar'
                }
            })
        } else {
            await createTask(data)
            toast.success('Task create successfully!', {
                position: 'top-right',
                style:{
                    background: "#101010",
                    color: 'white',
                    font:'status-bar'
                }
            })
        }
        navigate('/tasks/')
    })


    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const { data } = await getTask(params.id)
                setValue('title', data.title)
                setValue('description', data.description)
            }
        }

        loadTask()
    }, [])

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title"
                    {...register('title', { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />

                {errors.title && <span className='text-red-400'>Title is required</span>}

                <textarea rows="3" placeholder="Description"
                    {...register('description', { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                ></textarea>

                {errors.description && <span className='text-red-400'>Description is required</span>}

                <button className='bg-indigo-600 hover:bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
            </form>
            {params.id && 
                <div className='flex justify-end'>
                    <button className='bg-red-600 hover:bg-red-500 rounded-lg p-3 w-48 mt-3'
                    onClick={async () => {
                        const accepted = window.confirm('Are you sure?')
                        if (accepted) {
                            await deleteTask(params.id)
                            toast.error('Task Deleted', {
                                position: 'top-right',
                                style:{
                                    background: "#101010",
                                    color: 'white',
                                    font:'status-bar'
                                }
                            })
                            navigate('/tasks/')
                        }
                    }}>Delete</button>
                </div>
            }
        </div>
    )
}
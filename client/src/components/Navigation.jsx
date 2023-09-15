import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export function Navigation() {
    return (
        <div className='flex justify-between py-3'>
            <Link to='/tasks'>
                <div className='flex justify-center gap-2'>
                    <img className='ml-2' src={logo}/>
                    <h1 className='justify-center font-bold text-3xl'>
                        Task App
                    </h1>
                </div>
            </Link>
            <button className='bg-indigo-600 hover:bg-indigo-500 px-3 py-2 rounded-lg mr-3'>
                <Link to='/tasks-create'> Create Task</Link>
            </button>
        </div>
    )
}
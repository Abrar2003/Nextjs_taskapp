import Image from 'next/image'
import AddTasks from './components/AddTasks'
import TaskList from './components/TaskList'

export default function Home() {
  return (
    <main className='max-w-3xl mx-auto mt-5'>
      <div className='text-center flex flex-col my-5 gap-4'>
        <h1 className='text-2xl font-bold'>My Task App</h1>
        <AddTasks />
      </div>
      <TaskList />
    </main>
  )
}

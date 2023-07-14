import AddTasks from './components/AddTasks'
import TaskList from './components/TaskList'

export default function Home() {
  const tasks = [
    {
      id: "1",
        title: "Feed the cat",
        description: "feed the cat",
        status: "Completed",
    },
    {
      id:"2",
        title: "Water the plants",
        description: "Water plants on the roof and on the balcony",
        status: "In Progress",
    }
]
  return (   
    <main className='max-w-3xl mx-auto mt-5'>
      <div className='text-center flex flex-col my-5 gap-4'>
        <h1 className='text-2xl font-bold'>My Task App</h1>
        <AddTasks />
      </div>
      <TaskList tasks={tasks} />
    </main>
  )
}

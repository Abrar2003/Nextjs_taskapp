import { ITask } from "@/types/task"

interface TasklistProp {
    tasks: ITask[]
}

const TaskList: React.FC<TasklistProp> = ({tasks}) => {
  return (
    <div className="grid gap-4">
        {tasks.map( task => <div className="card m-auto text-white w-96 bg-accent shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Title: {task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" disabled={task.status == "Completed"}>{
                task.status == "To Do"? "Start Task" : task.status == "In Progress"? "Complete Task" : "Completed"
              }</button>
            </div>
          </div>
        </div> )}
    </div>
  )
}

export default TaskList
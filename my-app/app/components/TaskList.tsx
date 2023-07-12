
const TaskList = () => {
    const tasks = [
        {
            title: "Feed the cat",
            description: "feed the cat",
            status: "To Do",
        },
        {
            title: "Water the plants",
            description: "Water plants on the roof and on the balcony",
            status: "To Do",
        }
    ]
    
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Cy Ganderton</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default TaskList
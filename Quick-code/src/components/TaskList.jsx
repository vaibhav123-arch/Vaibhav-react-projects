import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks,deleteTask,toggleTask,editTask}) => {

    //If no tasks

    if(tasks.length===0) {
      return(
      <p className="text-center text-green-600 font-medium text-lg">No tasks found </p>
    )}

  return (
    <div>
    {tasks.map((task)=>(
      <TaskItem
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      editTask={editTask}
      />
    ))}
      
    </div>
  );
};


export default TaskList

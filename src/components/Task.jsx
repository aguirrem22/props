const task = ({ task, deleteTask, toggleTaskCompleted }) => {
    return ( 
        <div>
            <span onClick={() => toggleTaskCompleted(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
                {task.text}
            </span>{' '}
            <button onClick={() => deleteTask(task.id)}>Borrar</button>
        </div>
        );
};

export default task;    


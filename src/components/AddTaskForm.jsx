import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
	const [taskText, setTaskText] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!taskText.trim()) {
			return;
		}

		addTask(taskText.trim());
		setTaskText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Escribe una tarea"
				value={taskText}
				onChange={(event) => setTaskText(event.target.value)}
			/>
			<button type="submit">Agregar</button>
		</form>
	);
};

export default AddTaskForm;

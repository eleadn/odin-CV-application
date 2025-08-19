import { useState } from "react";

export default function EducationForm({ isEditing }) {
	const [education, setEducation] = useState([]);

	const addEducation = () => {
		const id = crypto.randomUUID();
		const name = "";
		const title = "";
		const date = null;
		setEducation([...education, { id, name, title, date }]);
	};

	if (isEditing) {
		return (
			<div>
				<button onClick={addEducation}>Add</button>
				{education.map((school) => (
					<div key={school.id}>
						<div>----------</div>
						<label htmlFor={`school-name-${school.id}`}>
							School Name:{" "}
						</label>
						<input
							id={`school-name-${school.id}`}
							type="text"
							value={school.name}
						/>
						<div>----------</div>
					</div>
				))}
			</div>
		);
	}
}

import { useState } from "react";

export default function EducationForm() {
	const [education, setEducation] = useState([]);
	const [draft, setDraft] = useState([...education]);

	const [isEditing, setIsEditing] = useState(false);

	const addEducation = () => {
		const id = crypto.randomUUID();
		const name = "";
		const title = "";
		const date = null;

		const newDraft = [...draft];
		newDraft.push({ id, name, title, date });
		setDraft(newDraft);
	};

	const removeEducation = (id) => {
		const newDraft = [...draft].filter((school) => school.id !== id);
		setDraft(newDraft);
	};

	const onSchoolNameChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].name = event.target.value;
		setDraft(newDraft);
	};

	const onSchoolTitleChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].title = event.target.value;
		setDraft(newDraft);
	};

	const onSchoolDateChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].date = event.target.value;
	};

	const setEditMode = () => {
		setDraft([...education]);
		setIsEditing(true);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setIsEditing(false);
		setEducation([...draft]);
	};

	if (isEditing) {
		return (
			<form onSubmit={onSubmit}>
				<h2>Education</h2>
				<button type="button" onClick={addEducation}>
					Add
				</button>
				{draft.map((school, index) => (
					<div key={school.id}>
						<div>----------</div>
						<div>
							<label htmlFor={`school-name-${school.id}`}>
								School Name:{" "}
							</label>
							<input
								id={`school-name-${school.id}`}
								type="text"
								onChange={(event) =>
									onSchoolNameChange(event, index)
								}
								value={school.name}
							/>
						</div>
						<div>
							<label htmlFor={`school-title-${school.id}`}>
								Diploma obtained:{" "}
							</label>
							<input
								id={`school-title-${school.id}`}
								type="text"
								onChange={(event) =>
									onSchoolTitleChange(event, index)
								}
								value={school.title}
							/>
						</div>
						<div>
							<label htmlFor={`school-date-${school.id}`}>
								Date of obtention:{" "}
							</label>
							<input
								id={`school-date-${school.id}`}
								type="date"
								onChange={(event) =>
									onSchoolDateChange(event, index)
								}
								value={school.date}
							/>
						</div>
						<div>
							<button
								type="button"
								onClick={() => removeEducation(school.id)}
							>
								Remove
							</button>
						</div>
						<div>----------</div>
					</div>
				))}
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		);
	}

	return (
		<>
			<h2>Education</h2>
			<button type="button" onClick={setEditMode}>
				Edit
			</button>
			{education.map((school) => (
				<div key={school.id}>
					<div>----------</div>
					<h3>{school.name}</h3>
					<div>
						{school.title}
						{school.date !== null && school.title !== ""
							? " - "
							: ""}
						{school.date}
					</div>
					<div>----------</div>
				</div>
			))}
		</>
	);
}

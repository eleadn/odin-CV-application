import { useState } from "react";

export default function EducationForm() {
	const [education, setEducation] = useState([]);
	const [draft, setDraft] = useState([...education]);

	const [isEditing, setIsEditing] = useState(false);

	const addEducation = () => {
		const id = crypto.randomUUID();
		const name = "";
		const title = "";
		const date = "";

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

		if (event.target.value) {
			newDraft[index].date = event.target.value;
		} else {
			newDraft[index].date = "";
		}

		setDraft(newDraft);
	};

	const setEditMode = () => {
		setDraft([...education]);
		setIsEditing(true);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		setIsEditing(false);
		setEducation([...draft]);
	};

	if (isEditing) {
		return (
			<form onSubmit={onSubmit} className="CV-category">
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
								required
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
						{index === draft.length - 1 ? (
							<div>----------</div>
						) : null}
					</div>
				))}
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		);
	}

	return (
		<div className="CV-category">
			<h2>Education</h2>
			<button type="button" onClick={setEditMode}>
				Edit
			</button>
			{education.map((school, index) => (
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
					{index === education.length - 1 ? (
						<div>----------</div>
					) : null}
				</div>
			))}
		</div>
	);
}

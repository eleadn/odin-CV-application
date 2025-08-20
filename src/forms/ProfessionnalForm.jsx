import { useState } from "react";

export default function ProfessionnalForm() {
	const [profession, setProfession] = useState([]);
	const [draft, setDraft] = useState([...profession]);

	const [isEditing, setIsEditing] = useState(false);

	const addProfession = () => {
		const id = crypto.randomUUID();
		const name = "";
		const title = "";
		const description = "";
		const dateFrom = null;
		const dateTo = null;

		const newDraft = [
			...draft,
			{ id, name, title, description, dateFrom, dateTo },
		];
		setDraft(newDraft);
	};

	const removeProfession = (id) => {
		const newDraft = draft.filter((p) => p.id !== id);
		setDraft(newDraft);
	};

	const onNameChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].name = event.target.value;
		setDraft(newDraft);
	};

	const onTitleChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].title = event.target.value;
		setDraft(newDraft);
	};

	const onDescriptionChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].description = event.target.value;
		setDraft(newDraft);
	};

	const onStartDateChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].dateFrom = event.target.value;
		setDraft(newDraft);
	};

	const onEndDateChange = (event, index) => {
		const newDraft = [...draft];
		newDraft[index].dateTo = event.target.value;
		setDraft(newDraft);
	};

	const setEditMode = () => {
		setDraft([...profession]);
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
		setProfession([...draft]);
	};

	if (isEditing) {
		return (
			<form onSubmit={onSubmit}>
				<h2>Professionnal Experience</h2>
				<button type="button" onClick={addProfession}>
					Add
				</button>
				{draft.map((p, index) => (
					<div key={p.id}>
						<div>----------</div>
						<div>
							<label htmlFor={`profession-name-${p.id}`}>
								Company name :{" "}
							</label>
							<input
								id={`profession-name-${p.id}`}
								type="text"
								onChange={(event) => onNameChange(event, index)}
								value={p.name}
								required
							/>
						</div>
						<div>
							<label htmlFor={`profession-title-${p.id}`}>
								Position title:{" "}
							</label>
							<input
								id={`profession-title-${p.id}`}
								type="text"
								onChange={(event) =>
									onTitleChange(event, index)
								}
								value={p.title}
								required
							/>
						</div>
						<div>
							<label htmlFor={`profession-description-${p.id}`}>
								Description:
							</label>
							<div>
								<input
									id={`profession-desc-${p.id}`}
									type="text"
									onChange={(event) =>
										onDescriptionChange(event, index)
									}
									value={p.description}
								/>
							</div>
						</div>
						<div>
							<label htmlFor={`profession-start-${p.id}`}>
								Start date :{" "}
							</label>
							<input
								id={`profession-start-${p.id}`}
								type="date"
								onChange={(event) =>
									onStartDateChange(event, index)
								}
								value={p.dateFrom}
								required
							/>
						</div>
						<div>
							<label htmlFor={`profession-end-${p.id}`}>
								End date:{" "}
							</label>
							<input
								id={`profession-end-${p.id}`}
								type="date"
								onChange={(event) =>
									onEndDateChange(event, index)
								}
								value={p.dateTo}
							/>
						</div>
						<div>
							<button
								type="button"
								onClick={() => removeProfession(p.id)}
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
		<>
			<h2>Professionnal Experience</h2>
			<button type="button" onClick={setEditMode}>
				Edit
			</button>
			{profession.map((p, index) => (
				<div key={p.id}>
					<div>----------</div>
					<h3>{p.name}</h3>
					<h4>{p.title}</h4>
					<div>{p.description}</div>
					<div>
						{`${p.dateFrom} - `}
						{p.dateTo !== null ? p.dateTo : "Today"}
					</div>
					{index === profession.length - 1 ? (
						<div>----------</div>
					) : null}
				</div>
			))}
		</>
	);
}

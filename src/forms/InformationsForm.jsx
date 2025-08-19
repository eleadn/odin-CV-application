import { useState } from "react";

export default function InformationsForm() {
	const [informations, setInformations] = useState({
		name: "",
		lastname: "",
		profession: "",
		mail: "",
		phone: "",
		adress: "",
	});
	const [draft, setDraft] = useState(informations);

	const [isEditing, setIsEditing] = useState(false);

	const onNameChange = (event) =>
		setDraft({ ...draft, name: event.target.value });
	const onLastnameChange = (event) =>
		setDraft({ ...draft, lastname: event.target.value });
	const onProfessionChange = (event) =>
		setDraft({ ...draft, profession: event.target.value });
	const onMailChange = (event) =>
		setDraft({ ...draft, mail: event.target.value });
	const onPhoneChange = (event) =>
		setDraft({ ...draft, phone: event.target.value });
	const onAdressChange = (event) =>
		setDraft({ ...draft, adress: event.target.value });

	const setEditMode = () => {
		setDraft(informations);
		setIsEditing(true);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setInformations(draft);
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<form onSubmit={onSubmit}>
				<h2>General Informations</h2>
				<div>
					<label htmlFor="name">Name: </label>
					<input
						id="name"
						type="text"
						onChange={onNameChange}
						value={draft.name}
					/>
					<label htmlFor="lastname">Lastname: </label>
					<input
						id="lastname"
						type="text"
						onChange={onLastnameChange}
						value={draft.lastname}
					/>
				</div>
				<div>
					<label htmlFor="profession">Profession: </label>
					<input
						id="profession"
						type="text"
						onChange={onProfessionChange}
						value={draft.profession}
					/>
				</div>
				<div>
					<label htmlFor="mail">Mail: </label>
					<input
						id="mail"
						type="email"
						onChange={onMailChange}
						value={draft.mail}
					/>

					<label htmlFor="phone">Phone: </label>
					<input
						id="phone"
						type="tel"
						onChange={onPhoneChange}
						value={draft.phone}
					/>

					<label htmlFor="adress">Adress: </label>
					<input
						id="adress"
						type="text"
						onChange={onAdressChange}
						value={draft.adress}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}

	return (
		<>
			<h2>General Informations</h2>
			<button type="button" onClick={setEditMode}>
				Edit
			</button>
			<div>
				{informations.name} {informations.lastname}
			</div>
			<div>{informations.profession}</div>
			<div>{informations.mail}</div>
			<div>{informations.phone}</div>
			<div>{informations.adress}</div>
		</>
	);
}

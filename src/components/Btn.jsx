import { useStore } from "@nanostores/react";
import { isOpen, user } from "../sotre";
export default function Btn() {
	// lee el valor del store con el hook `useStore`
	const $isCartOpen = useStore(isOpen);
	const MyUser = useStore(user);
	// escribe en el store importado usando `.set`

	console.log(MyUser);
	const handleClick = () => {
		isOpen.set(!$isCartOpen);
		user.set({ ...MyUser, name: "pepe" });
	};

	return (
		<>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleClick}
			>
				Cartaaa
			</button>
			<h1>{MyUser.name}</h1>
		</>
	);
}

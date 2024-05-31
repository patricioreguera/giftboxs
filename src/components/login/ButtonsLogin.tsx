import { isLogin, user } from "../../sotre";
import { useStore } from "@nanostores/react";

const ButtonsLogin = () => {
	const isUserLogin = useStore(isLogin);
	const User = useStore(user);

	const handleClick = () => {
		isLogin.set(!isUserLogin);
	};

	return isLogin.get() ? (
		<button onClick={handleClick}>
			<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-600  rounded-full dark:bg-blue-600">
				<span className="font-medium text-white ">{User.name.slice(0, 1)}</span>
			</div>
		</button>
	) : (
		<div className="flex flex-row gap-5">
			<button
				onClick={handleClick}
				type="button"
				className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
			>
				Login
			</button>
			<button
				onClick={handleClick}
				type="button"
				className="cursor-pointer inline-flex p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
			>
				<span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Sign up
				</span>
			</button>
		</div>
	);
};

export default ButtonsLogin;

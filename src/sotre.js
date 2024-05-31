import { atom } from "nanostores";

export const isLogin = atom(false);
export const user = atom({
	name: "Patricio",
	age: 40,
});

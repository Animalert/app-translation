//in app function. Here just to statisfies TS compiler and for context :)

export const getEmoji = (specie: string) => {
	const random = Math.random() < 0.5 ? 0 : 1;
	if (random)
		return ("🐶");
	return ("🐾");
}

export const Platform: {
	OS: "android" | "ios";
} = {
	OS: "android"
}

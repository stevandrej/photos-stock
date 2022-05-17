export const formatClasses = (classes = []) => {
	let formatedClasses = [];

	formatedClasses = classes.filter((item) => item !== null).join(' ');

	return formatedClasses;
};

export const fixUrlTitle = (title: string) => {
	return title.replace(/ /g, '-').toLowerCase();
};

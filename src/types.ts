export type SongType = {
	alteration?: string;
	artist: string;
	barChords?: boolean;
	genres: string[];
	link: string;
	lyrics: () => React.JSX.Element;
	strumPattern?: string;
	title: string;
};

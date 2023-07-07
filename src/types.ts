export type SongType = {
	title: string;
	artist: string;
	barChords?: boolean;
	genres: string[];
	link: string;
	lyrics: () => React.JSX.Element;
};

export type SongType = {
	artist: string;
	barChords?: boolean;
	genres: string[];
	link: string;
	lyrics: () => React.JSX.Element;
	title: string;
};

import { DIFFICULTY } from './const/difficulty';

export type ChordType = {
	flat: boolean;
	major: boolean;
	sharp: boolean;
	title: string;
	url: string;
};

export type SongType = {
	alteration?: string;
	artist: string;
	barChords?: boolean;
	difficulty: DIFFICULTY;
	eras: string[];
	genres: string[];
	link: string;
	lyrics: string[];
	strumPattern?: string;
	title: string;
};

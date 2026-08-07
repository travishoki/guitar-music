import { DIFFICULTY } from './const/difficulty';

export type ChordType = {
	flat: boolean;
	major: boolean;
	sharp: boolean;
	title: string;
	url: string;
};

export type SongType = {
	artist: string;
	barChords?: boolean;
	capo?: string;
	difficulty: DIFFICULTY;
	eras: string[];
	genres: string[];
	link: string;
	lyrics: string[];
	strumPattern?: string;
	title: string;
};

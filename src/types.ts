import { DIFFICULTY } from './const/difficulty';
import { STRUM_PATTERN } from './const/strumPattern';

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
	strumPattern?: STRUM_PATTERN;
	title: string;
};

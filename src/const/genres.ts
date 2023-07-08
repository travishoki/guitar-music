import { ERA_LIST } from './eras';

export const ALL = 'All';
export const UNCATEGORIZED = 'Uncategorized';

export const COUNTRY = 'Country';
export const FOLK = 'Folk';
export const KIDS = 'Kids';
export const PATRIOTIC = 'Patriotic';
export const RELIGIOUS = 'Religious';
export const ROCK = 'Rock';
export const TRADITIONAL = 'Traditional';

export const GENRE_LIST = [
	COUNTRY,
	FOLK,
	KIDS,
	PATRIOTIC,
	ROCK,
	RELIGIOUS,
	TRADITIONAL,
];

export const FILTER_LIST = [ALL, ...GENRE_LIST, ...ERA_LIST /*UNCATEGORIZED*/];

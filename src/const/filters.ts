export const ALL = 'All';
export const UNCATEGORIZED = 'Uncategorized';

import { ERA_LIST } from './eras';
import { GENRE_LIST } from './genres';

export const FILTER_LIST = [ALL, ...GENRE_LIST, ...ERA_LIST, UNCATEGORIZED];

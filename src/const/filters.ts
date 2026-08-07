export const ALL = 'All';
export const UNCATEGORIZED = 'Uncategorized';

import { ERAS } from './eras';
import { GENRES } from './genres';

export const FILTER_LIST = [ALL, ...GENRES, ...ERAS, UNCATEGORIZED];

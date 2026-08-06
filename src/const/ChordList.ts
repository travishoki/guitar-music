import A from '../images/chords/A.png';
import Ab from '../images/chords/Ab.png';
import Am from '../images/chords/Am.png';
import B from '../images/chords/B.png';
import Bb from '../images/chords/Bb.png';
import Bbm from '../images/chords/Bbm.png';
import Bm from '../images/chords/Bm.png';
import CSharpm from '../images/chords/C#m.png';
import C from '../images/chords/C.png';
import D from '../images/chords/D.png';
import D7 from '../images/chords/D7.png';
import DoverFSharp from '../images/chords/D:F#.png';
import Db from '../images/chords/Db.png';
import Dm from '../images/chords/Dm.png';
import Dm7 from '../images/chords/Dm7.png';
import Dsus4 from '../images/chords/Dsus4.png';
import E from '../images/chords/E.png';
import E7 from '../images/chords/E7.png';
import EoverGSharp from '../images/chords/E:G#.png';
import Em from '../images/chords/Em.png';
import Em7 from '../images/chords/Em7.png';
import FSharp from '../images/chords/F#.png';
import FSharpm from '../images/chords/F#m.png';
import F from '../images/chords/F.png';
import Fm from '../images/chords/Fm.png';
import GSharp from '../images/chords/G#.png';
import G from '../images/chords/G.png';
import G6 from '../images/chords/G6.png';
import G7 from '../images/chords/G7.png';
import Gb from '../images/chords/Gb.png';
import { ChordType } from '../types';

export const ChordList: ChordType[] = [
	{ flat: false, major: true, sharp: false, title: 'A', url: A },
	{ flat: true, major: true, sharp: false, title: 'Ab', url: Ab },
	{ flat: false, major: false, sharp: false, title: 'Am', url: Am },
	{ flat: false, major: true, sharp: false, title: 'B', url: B },
	{ flat: true, major: true, sharp: false, title: 'Bb', url: Bb },
	{ flat: true, major: false, sharp: false, title: 'Bbm', url: Bbm },
	{ flat: false, major: false, sharp: false, title: 'Bm', url: Bm },
	{ flat: false, major: true, sharp: false, title: 'C', url: C },
	{ flat: false, major: false, sharp: true, title: 'C#m', url: CSharpm },
	{ flat: false, major: true, sharp: false, title: 'D', url: D },
	{ flat: false, major: true, sharp: false, title: 'D7', url: D7 },
	{ flat: false, major: true, sharp: false, title: 'D/F#', url: DoverFSharp },
	{ flat: true, major: true, sharp: false, title: 'Db', url: Db },
	{ flat: false, major: false, sharp: false, title: 'Dm', url: Dm },
	{ flat: false, major: false, sharp: false, title: 'Dm7', url: Dm7 },
	{ flat: false, major: true, sharp: false, title: 'Dsus4', url: Dsus4 },
	{ flat: false, major: true, sharp: false, title: 'E', url: E },
	{ flat: false, major: true, sharp: false, title: 'E7', url: E7 },
	{ flat: false, major: true, sharp: false, title: 'E/G#', url: EoverGSharp },
	{ flat: false, major: false, sharp: false, title: 'Em', url: Em },
	{ flat: false, major: false, sharp: false, title: 'Em7', url: Em7 },
	{ flat: false, major: true, sharp: false, title: 'F', url: F },
	{ flat: false, major: true, sharp: true, title: 'F#', url: FSharp },
	{ flat: false, major: false, sharp: true, title: 'F#m', url: FSharpm },
	{ flat: false, major: false, sharp: false, title: 'Fm', url: Fm },
	{ flat: false, major: true, sharp: false, title: 'G', url: G },
	{ flat: false, major: true, sharp: true, title: 'G#', url: GSharp },
	{ flat: false, major: true, sharp: false, title: 'G6', url: G6 },
	{ flat: false, major: true, sharp: false, title: 'G7', url: G7 },
	{ flat: true, major: true, sharp: false, title: 'Gb', url: Gb },
];

import * as ERAS from './eras';
import * as GENRE from './genres';
import LYRIC_LIST from '../components/lyrics';
import { SongType } from '../types';

const CAPO_2 = 'Capo 2nd';
const CAPO_5 = 'Capo 5th';

export const SongList: SongType[] = [
	// - B -
	{
		artist: 'Raffi Cavoukian',
		barChords: true,
		genres: [GENRE.KIDS, ERAS.EIGHTIES],
		link: 'https://tabs.ultimate-guitar.com/r/raffi/baby_beluga_crd.htm',
		lyrics: LYRIC_LIST.BabyBaluga,
		title: 'Baby Baluga',
	},
	{
		artist: 'Peter Frampton',
		barChords: true,
		genres: [ERAS.NINETIES],
		link: 'https://tabs.ultimate-guitar.com/p/peter_frampton/baby_i_love_your_way_crd.htm',
		lyrics: LYRIC_LIST.BabyILoveYourWay,
		title: 'Baby I Love Your Way',
	},
	{
		artist: 'Bob Dylan',
		genres: [ERAS.SIXTIES],
		link: 'https://tabs.ultimate-guitar.com/tab/bob-dylan/blowin-in-the-wind-chords-14835',
		lyrics: LYRIC_LIST.BlowinInTheWind,
		title: "Blowin' in the Wind",
	},
	{
		artist: 'Bob Carlisle',
		barChords: true,
		genres: [ERAS.NINETIES],
		link: 'https://tabs.ultimate-guitar.com/tab/bob-carlisle/butterfly-kisses-chords-64393',
		lyrics: LYRIC_LIST.ButterflyKisses,
		title: 'Butterfly Kisses',
	},
	// - C -
	{
		alteration: CAPO_2,
		artist: 'Semisonic',
		genres: [ERAS.NINETIES],
		link: 'https://tabs.ultimate-guitar.com/tab/semisonic/closing-time-chords-1743417',
		lyrics: LYRIC_LIST.ClosingTimeChords,
		title: 'Closing Time',
	},
	{
		artist: 'John Denver',
		genres: [ERAS.SEVENTIES, GENRE.COUNTRY],
		link: 'https://tabs.ultimate-guitar.com/tab/john-denver/take-me-home-country-roads-chords-1101747',
		lyrics: LYRIC_LIST.CountryRoads,
		title: 'Country Roads',
	},
	// - E -
	{
		artist: 'Bob Carlisle',
		genres: [ERAS.NINETIES],
		link: 'https://tabs.ultimate-guitar.com/tab/misc-musicals/the-sound-of-music-edelweiss-chords-168569',
		lyrics: LYRIC_LIST.Edelweiss,
		title: 'Edelweiss',
	},
	// - G -
	{
		artist: "Plain White T's",
		genres: [ERAS.TENS],
		link: 'https://tabs.ultimate-guitar.com/tab/plain-white-ts/the-giving-tree-chords-1240804',
		lyrics: LYRIC_LIST.GivingTree,
		title: 'The Giving Tree',
	},
	{
		artist: 'Lee Greenwood',
		barChords: true,
		genres: [ERAS.EIGHTIES, GENRE.PATRIOTIC],
		link: 'https://tabs.ultimate-guitar.com/tab/lee-greenwood/god-bless-the-usa-chords-825566',
		lyrics: LYRIC_LIST.GodBlessTheUSA,
		title: 'God Bless the USA',
	},
	// - H -
	{
		artist: 'Misc Praise',
		genres: [GENRE.TRADITIONAL, GENRE.RELIGIOUS],
		link: 'https://tabs.ultimate-guitar.com/m/misc_praise_songs/hes_got_the_whole_world_in_his_hands_crd.htm',
		lyrics: LYRIC_LIST.HesGotTheWholeWorldInHisHands,
		title: "He's Got the Whole World in His Hands",
	},
	{
		alteration: CAPO_5,
		artist: 'Kenny Loggins',
		barChords: true,
		genres: [GENRE.KIDS, ERAS.SEVENTIES],
		link: 'https://qcukes.com/music2/music.php?action=Song&song=House%20At%20Pooh%20Corner',
		lyrics: LYRIC_LIST.HouseAtPoohCorner,
		title: 'House At Pooh Corner',
	},
	// - I -
	{
		artist: 'Bonnie Raitt',
		genres: [ERAS.NINETIES],
		link: 'https://tabs.ultimate-guitar.com/tab/bonnie-raitt/i-cant-make-you-love-me-chords-611294',
		lyrics: LYRIC_LIST.ICantMakeYouLoveMe,
		title: 'I Cant Make You Love Me',
	},
	{
		artist: 'Tim McGraw',
		genres: [ERAS.NINETIES, GENRE.COUNTRY],
		link: 'https://tabs.ultimate-guitar.com/tab/tim-mcgraw/its-your-love-chords-76292',
		lyrics: LYRIC_LIST.ItsYourLove,
		strumPattern: 'DxDxDxDU',
		title: "It's Your Love",
		// https://www.youtube.com/watch?v=BOibmAAqWuo
	},
	// - L -
	{
		artist: 'John Denver',
		genres: [ERAS.SIXTIES, GENRE.ROCK],
		link: 'https://tabs.ultimate-guitar.com/tab/john-denver/leaving-on-a-jet-plane-chords-32979',
		lyrics: LYRIC_LIST.LeavingOnAJetPlane,
		title: 'Leaving on a Jet Plane',
	},
	// - M -
	{
		artist: 'Misc Traditional',
		genres: [GENRE.TRADITIONAL, GENRE.KIDS],
		link: 'https://tabs.ultimate-guitar.com/tab/misc-children/michael-finnegan-chords-1721165',
		lyrics: LYRIC_LIST.MichaelFinnegan,
		title: 'Michael Finnegan',
	},
	{
		artist: 'Misc Traditional',
		barChords: true,
		genres: [GENRE.TRADITIONAL],
		link: 'https://tabs.ultimate-guitar.com/tab/highwaymen/michael-row-the-boat-ashore-chords-1813491',
		lyrics: LYRIC_LIST.MichaelRowTheBoatAshore,
		title: 'Michael Row the Boat Ashore',
	},
	{
		artist: 'Misc Traditional',
		genres: [GENRE.TRADITIONAL],
		link: 'https://tabs.ultimate-guitar.com/m/mother_goose/hush_little_baby_crd.htm',
		lyrics: LYRIC_LIST.Mockingbird,
		title: 'Mockingbird',
	},
	// - N -
	{
		artist: 'One Direction',
		barChords: true,
		genres: [ERAS.TENS],
		link: 'https://tabs.ultimate-guitar.com/tab/one-direction/night-changes-chords-1678440',
		lyrics: LYRIC_LIST.NightChanges,
		title: 'Night Changes',
	},
	// - O -
	{
		artist: 'The Original Caste',
		barChords: true,
		genres: [ERAS.SIXTIES],
		link: 'https://tabs.ultimate-guitar.com/tab/the-original-caste/one-tin-soldier-chords-980986',
		lyrics: LYRIC_LIST.OneTinSoldier,
		title: 'One Tin Soldier',
	},
	{
		artist: "Israel Kamakawiwo'ole",
		barChords: true,
		genres: [ERAS.NINETIES],
		link: 'https://tabs.ultimate-guitar.com/tab/2135261',
		lyrics: LYRIC_LIST.OverTheRainbow,
		title: 'Over the Rainbow',
	},
	// - P -
	{
		artist: 'Peter, Paul & Mary',
		barChords: true,
		genres: [ERAS.SIXTIES, GENRE.FOLK, GENRE.KIDS],
		link: 'https://tabs.ultimate-guitar.com/p/peter_paul_and_mary/puff_the_magic_dragon_ver3_crd.htm',
		lyrics: LYRIC_LIST.PuffTheMagicDragon,
		title: 'Puff The Magic Dragon',
	},
	// - R -
	{
		artist: 'Richard Marx',
		barChords: true,
		genres: [ERAS.EIGHTIES],
		link: 'https://tabs.ultimate-guitar.com/tab/richard-marx/right-here-waiting-chords-93388',
		lyrics: LYRIC_LIST.RightHereWaitingChords,
		title: 'Right Here Waiting',
	},
	// - S -
	{
		artist: 'Jonathan Edwards',
		genres: [ERAS.SEVENTIES],
		link: 'https://tabs.ultimate-guitar.com/tab/jonathan-edwards/sunshine-chords-105167',
		lyrics: LYRIC_LIST.Sunshine,
		title: 'Sunshine',
	},
	// - T -
	{
		artist: 'Harry S Miller',
		genres: [GENRE.KIDS],
		link: 'https://tabs.ultimate-guitar.com/h/harry_s_miller/the_cat_came_back_crd.htm',
		lyrics: LYRIC_LIST.TheCatCameBack,
		title: 'The Cat Came Back',
	},
	{
		artist: 'Simon & Garfunkel',
		barChords: true,
		genres: [ERAS.SIXTIES, GENRE.FOLK],
		link: 'https://tabs.ultimate-guitar.com/s/simon_garfunkel/the_sound_of_silence_ver4_crd.htm',
		lyrics: LYRIC_LIST.TheSoundsOfSilence,
		title: 'The Sounds of Silence',
	},
	{
		artist: 'Woody Guthrie',
		genres: [ERAS.FOURTIES, GENRE.PATRIOTIC],
		link: 'http://www.guitaretab.com/w/woody-guthrie/223617.html',
		lyrics: LYRIC_LIST.ThisLandIsYourLand,
		title: 'This Land is your Land',
	},
	{
		artist: 'Rolf Harris',
		genres: [ERAS.SIXTIES, GENRE.KIDS],
		link: 'https://tabs.ultimate-guitar.com/r/rolf_harris/tie_me_kangaroo_down_sport_ver4_crd.htm',
		lyrics: LYRIC_LIST.TieMeKangarooDownSport,
		title: 'Tie Me Kangaroo Down Sport',
	},
	{
		artist: 'The Byrds',
		barChords: true,
		genres: [ERAS.SIXTIES, GENRE.FOLK],
		link: 'https://tabs.ultimate-guitar.com/tab/the-byrds/turn-turn-turn-to-everything-there-is-a-season-chords-1055233',
		lyrics: LYRIC_LIST.TurnTurnTurn,
		title: 'Turn" Turn" Turn',
	},
	// - W -
	{
		artist: 'Katrina and the Waves',
		genres: [ERAS.EIGHTIES],
		link: 'https://tabs.ultimate-guitar.com/tab/katrina-and-the-waves/walking-on-sunshine-chords-595283',
		lyrics: LYRIC_LIST.WalkingOnSunshine,
		title: 'Walking On Sunshine',
	},
	{
		artist: 'Jackie DeShannon',
		barChords: true,
		genres: [ERAS.SIXTIES],
		link: 'https://tabs.ultimate-guitar.com/j/jackie_deshannon/what_the_world_needs_now_is_love_crd.htm',
		lyrics: LYRIC_LIST.WhatTheWorldNeedsNowIsLove,
		title: 'What the World Needs Now is Love',
	},
	{
		artist: 'Pete Seeger',
		barChords: true,
		genres: [ERAS.SIXTIES, GENRE.FOLK],
		link: 'https://tabs.ultimate-guitar.com/p/peter_paul_and_mary/where_have_all_the_flowers_gone_ver2_crd.htm',
		lyrics: LYRIC_LIST.WhereHaveAllTheFlowersGone,
		title: 'Where Have All the Flowers Gone',
	},
	// - Y -
	{
		artist: 'The Beatles',
		genres: [ERAS.SIXTIES],
		link: 'https://tabs.ultimate-guitar.com/t/the_beatles/yellow_submarine_ver2_crd.htm',
		lyrics: LYRIC_LIST.YellowSubmarine,
		title: 'Yellow Submarine',
	},
	{
		artist: 'Chris Stapleton',
		genres: [GENRE.TRADITIONAL],
		link: 'https://tabs.ultimate-guitar.com/tab/morgane-stapleton/you-are-my-sunshine-chords-1843946',
		lyrics: LYRIC_LIST.YouAreMySunshine,
		title: 'You Are My Sunshine',
	},
	{
		artist: 'Shania Twain',
		genres: [ERAS.NINETIES],
		link: 'https://tabs.ultimate-guitar.com/tab/shania-twain/youre-still-the-one-chords-1345',
		lyrics: LYRIC_LIST.YoureStillTheOne,
		title: "You're Still The One",
	},
];

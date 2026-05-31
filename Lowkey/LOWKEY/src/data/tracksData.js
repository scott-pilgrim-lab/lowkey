import danielCover from '../assets/daniel.png';
import childish from '../assets/childish.jpg';
import kendrick from '../assets/kendrick.jpg';
import ravyn from '../assets/rav.jpg';
import snoop from '../assets/snoop.jpg';
import sigur from '../assets/sigur.jpg';
import brian from '../assets/brian.jpg';
import bicep from '../assets/bicep.jpg';
import bon from '../assets/bon.jpg';
import lauryn from '../assets/lauryn.jpg';
import radio from '../assets/radio.png';
// Default cover generator for each mood
const defaultCovers = {
  chill: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='chill' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233a2f47;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%231a1028;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23chill)' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='80' fill='rgba(101,176,242,0.3)'/%3E%3Ccircle cx='150' cy='150' r='60' fill='rgba(101,176,242,0.15)'/%3E%3Ctext x='150' y='155' font-size='18' fill='%236db0f2' text-anchor='middle' font-family='serif'%3EChill%3C/text%3E%3C/svg%3E",
  energetic: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='energetic' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238b5a2b;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%231a0a00;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23energetic)' width='300' height='300'/%3E%3Crect x='50' y='50' width='60' height='200' fill='rgba(255,179,84,0.4)'/%3E%3Crect x='130' y='80' width='60' height='170' fill='rgba(255,179,84,0.6)'/%3E%3Crect x='210' y='60' width='60' height='190' fill='rgba(255,179,84,0.4)'/%3E%3Ctext x='150' y='275' font-size='18' fill='%23ffb354' text-anchor='middle' font-family='serif'%3EEnergetic%3C/text%3E%3C/svg%3E",
  ambient: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='ambient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23361a47;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%230f0c09;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23ambient)' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='100' fill='none' stroke='rgba(147,112,219,0.3)' stroke-width='2'/%3E%3Ccircle cx='150' cy='150' r='70' fill='none' stroke='rgba(147,112,219,0.2)' stroke-width='2'/%3E%3Ccircle cx='150' cy='150' r='40' fill='none' stroke='rgba(147,112,219,0.15)' stroke-width='2'/%3E%3Ctext x='150' y='155' font-size='18' fill='%239370db' text-anchor='middle' font-family='serif'%3EAmbient%3C/text%3E%3C/svg%3E",
  melancholic: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='melancholic' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%235a3a5a;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%230a0a0f;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23melancholic)' width='300' height='300'/%3E%3Cpath d='M 100 120 Q 150 100 200 120' fill='none' stroke='rgba(184,134,11,0.4)' stroke-width='3'/%3E%3Cpath d='M 100 180 Q 150 220 200 180' fill='none' stroke='rgba(184,134,11,0.3)' stroke-width='3'/%3E%3Ccircle cx='11０' cy='１１０' r='８' fill='rgba(１８４,１３４,１１,０.５)'/%３Ｅ%３Ｃcircle cx='１９０' cy='１１０' r='８' fill='rgba(１８４,１３４,１１,０.５)'/%３Ｅ%３Ｃtext x='１５０' y='２７５' font-size='１８' fill='%２３ｂ８８６０ｂ' text-anchor='middle' font-family='serif'%３ＥMelancholic%３Ｃ/text%３Ｅ%３Ｃ/svg%３Ｅ",
};
export const tracksData = [
  // === CHILL MOOD ===
  {
    id: 1,
    title: 'Midnight Dreame',
    artist: 'Mac Miller',
    mood: 'chill',
    duration: '2:42',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Mac_Miller_-_Swimming.png',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 2,
    title: 'Mellow Rhythms',
    artist: 'Daniel Caesar ft. H.E.R.',
    mood: 'chill',
    duration: '3:29',
    coverUrl: danielCover,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 3,
    title: 'Neo-Soul Sessions',
    artist: 'Childish Gambino',
    mood: 'chill',
    duration: '5:26',
    coverUrl: childish,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 4,
    title: 'Starlight Acoustic',
    artist: 'Ravyn Lenae',
    mood: 'chill',
    duration: '3:44',
    coverUrl: ravyn,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },

  // === ENERGETIC MOOD ===
  {
    id: 5,
    title: 'Neon Lights',
    artist: 'The Weeknd',
    mood: 'energetic',
    duration: '6:01',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    id: 6,
    title: 'Urban Pulse',
    artist: 'Kendrick Lamar',
    mood: 'energetic',
    duration: '3:15',
    coverUrl: kendrick,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 7,
    title: 'Motion Waves',
    artist: 'Drake',
    mood: 'energetic',
    duration: '3:18',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: 8,
    title: 'Premium Grooves',
    artist: 'Snoop Dogg',
    mood: 'energetic',
    duration: '3:31',
    coverUrl: snoop,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },

  // === AMBIENT MOOD ===
  {
    id: 9,
    title: 'Floating Spaces',
    artist: 'Erik Satie',
    mood: 'ambient',
    duration: '3:07',
    coverUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  {
    id: 10,
    title: 'Ethereal Echoes',
    artist: 'Sigur Rós',
    mood: 'ambient',
    duration: '9:14',
    coverUrl: sigur,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  },
  {
    id: 11,
    title: 'Sonic Sanctuary',
    artist: 'Brian Eno',
    mood: 'ambient',
    duration: '4:24',
    coverUrl: brian,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'
  },
  {
    id: 12,
    title: 'Dusk Horizons',
    artist: 'Bicep',
    mood: 'ambient',
    duration: '5:33',
    coverUrl: bicep,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  },

  // === MELANCHOLIC MOOD ===
  {
    id: 13,
    title: 'Bittersweet Symphony',
    artist: 'Bon Iver',
    mood: 'melancholic',
    duration: '3:59',
    coverUrl: bon,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
  },
  {
    id: 14,
    title: 'Rainy Day Vinyl',
    artist: 'Ms. Lauryn Hill',
    mood: 'melancholic',
    duration: '5:26',
    coverUrl: lauryn,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
  },
  {
    id: 15,
    title: 'Echoes of Heartbreak',
    artist: 'Frank Ocean',
    mood: 'melancholic',
    duration: '4:09',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
  },
  {
    id: 16,
    title: 'Shadowed Melodies',
    artist: 'Radiohead',
    mood: 'melancholic',
    duration: '3:56',
    coverUrl: radio,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'
  }
];

export const moodCategories = [
  { id: "all", label: "All Moods", color: "bg-lowkey-text-secondary" },
  { id: "chill", label: "Chill", color: "bg-blue-500" },
  { id: "energetic", label: "Energetic", color: "bg-lowkey-accent" },
  { id: "ambient", label: "Ambient", color: "bg-purple-500" },
  { id: "melancholic", label: "Melancholic", color: "bg-indigo-500" },
];

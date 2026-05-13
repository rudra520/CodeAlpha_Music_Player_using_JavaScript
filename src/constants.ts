export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string;
  duration: number; // in seconds
}

export const PLAYLIST: Song[] = [
  {
    id: '1',
    title: 'Midnight Forest',
    artist: 'Luna Solaris',
    coverUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 372,
  },
  {
    id: '2',
    title: 'Solar Wind',
    artist: 'Nebula',
    coverUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: 425,
  },
  {
    id: '3',
    title: 'Cyber Drift',
    artist: 'Digital Ghost',
    coverUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: 395,
  },
  {
    id: '4',
    title: 'Deep Echoes',
    artist: 'Sonar',
    coverUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: 410,
  }
];

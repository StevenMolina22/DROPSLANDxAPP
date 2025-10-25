export interface Artist {
  id: string;
  name: string;
  avatar: string;
  genre: string;
  followers: number;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  audioUrl: string;
}

export interface Genre {
  id: string;
  name: string;
  icon: string;
  artists: number;
}

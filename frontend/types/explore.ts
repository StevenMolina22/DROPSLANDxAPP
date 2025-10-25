export interface Artist {
  id: string;
  name: string;
  avatar: string;
  genre: string;
  followers: number;
}

export interface Genre {
  id: string;
  name: string;
  icon: string;
  artists: number;
}

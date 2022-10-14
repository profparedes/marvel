export type ThumbnailType = {
  path: string;
  extension: string;
};

export type CharacterComicType = {
  name: string;
};

export type CharacterURL = {
  type: string;
  url: string;
};

export type CharacterType = {
  id: number;
  name: string;
  thumbnail: ThumbnailType;
  description: string;
  comics: {
    available: number;
    items: CharacterComicType[];
  };
  urls: CharacterURL[];
};

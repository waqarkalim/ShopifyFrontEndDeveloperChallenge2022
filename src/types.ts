export type Image = {
  id: number;
  imageUrl: string;
  isLiked: boolean;
  resource: {
    image_set: string;
    planet: string;
  };
  concept_tags: boolean;
  title: string;
  date: string;
  url: string;
  hdurl: string;
  media_type: string;
  explanation: string;
  concepts: Record<number, string>;
  thumbnail_url: string;
  copyright: string;
  service_version: string;
};

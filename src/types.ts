type Resource = {
	image_set?: string;
	planet?: string;
};

type Concepts = Record<number, string>;

enum MEDIA_TYPE {
	IMAGE = 'image',
	VIDEO = 'video',
}

export type Image = {
	id?: number;
	imageUrl?: string;
	isLiked?: boolean;
	resource?: Resource;
	concept_tags?: boolean;
	title?: string;
	date?: string;
	url?: string;
	hdurl?: string;
	media_type?: MEDIA_TYPE;
	explanation?: string;
	concepts?: Concepts;
	thumbnail_url?: string;
	copyright?: string;
	service_version?: string;
};

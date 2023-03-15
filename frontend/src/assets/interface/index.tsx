export interface Gallery {
	title: string;
	videos: Video[];
	pictures: Picture[];
}

export interface Video {
	id: string;
	name: string;
	description: string;
	video_url: string;
}

export interface Picture {
	id: string;
	name: string;
	description: string;
	image_url: string;
}

export interface Detail {
	title: string;
	subtitle: string;
	by: string;
	at: string;
	on: string;
	like_count: string;
	comment_count: string;
	comments: Comments[];
}

export interface Comments {
	id: number;
	name: string;
	profile_pic_url: string;
	comment: string;
	time: string;
	total_likes: number;
	total_comments: number;
}

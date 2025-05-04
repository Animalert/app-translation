export interface userPlace {
	emoji: string;
	id: "home" | "work" | "fav1" | "fav2" | "user";
	title: string;
	lat: number;
	lng: number;
	geohash: string;
};

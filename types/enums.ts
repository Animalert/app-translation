export enum pet_status {
	WAITING_APPROVAL,
	APPROVED,
	DELETED,
	DENIED,
	FOUND
}

export enum pet_report_steps {
	INFOS,
	PLACE,
	EXTRA_INFOS,
	REVIEW
}

export enum contact_method {
	PHONE,
	MAIL,
	INSTAGRAM
}

export enum share_format {
	POSTER_STORY = 1,
	POST_SQUARE
}

export enum share_color {
	COLOR = 1,
	BLACK_AND_WHITE
}

export enum share_template {
	ANIMALERT = 1,
	URGENCY
}

export enum pet_specie {
	NONE = -1,
	CUSTOM = 0,
	CAT,
	DOG,
	BIRD,
	COW,
	TURTLE,
	RABBIT,
	HAMSTER,
	SHEEP,
	HORSE,
	GOAT,
	FERRET,
	REPTILE,
	SNAKE,
	POULTRY
}

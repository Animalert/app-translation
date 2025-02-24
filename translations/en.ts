export const en = {
	AppNavigation: {
		ScreensTitles: {
			AddLostPetScreen: "Report a lost animal",
			EditPlaceScreen: "Place of disappearance"
		}
	},
	Map: {
		Wrapper: {
			GeolocationErrorCustomMessages: {
				1: {
					title: "Permission denied",
					message: "You denied access to location services. Please go to settings and reload application to retry."
				},
				2: {
					title: "Position unavailable",
					message: "Unable to retrieve location. Please reload the app or contact support if the error persist."
				},
				3: {
					title: "Timeout error",
					message: "The location request timed out. Please click the button below to retry or reload the app."
				}
			},
			FallBackErrorTitle: "Error",
			FallBackErrorMessage: "An error occured, please retry, restart the app, or contact support if the error persist.",
			FallBackErrorButtonText: "Retry",
			WaitingUser: "Connecting to Animalert...",
			LoggedOutErrorTitle: "You are logged out !",
			LoggedOutErrorMessage: "Please log in to access to all Animalert features.",
			LoggedOutErrorButtonContent: "Go to login",
			GoToSettings: "Go to settings"
		},
		Screen: {
			Title: "Animalert Map",
			NoLostPetsAround: "No lost animals nearby !",
			ErrorSearchingPets: "An error occurred when searching for animals lost in the area.",
			TryAgain: "try again ?",
			AnyAnimalAround: (petsInRadius: any[]) => {
				return (`${petsInRadius.length == 0 ? "No" : petsInRadius.length} ${(petsInRadius.length > 1) ? "pets" : "pets"} around`)
			},
			NotifyAnimalAroundTitle: (_is_male: boolean) => `lost nearby!`,
			NotifyAnimalAroundBody: (pet: {name: string; is_male: boolean;}) => `${pet.name} was reported lost near you, keep an eye out!`,
			NearToYou: "Near you"
		},
		AddLostPet: {
			AdUploadError: "An error occured while uploading the report, please try again",
			PetAddPpButton: "Pick an image",
			PetNamePlaceholder: "Pet name",
			ChooseXPicsOfPet: (x: number, maxPics: number, petName: string) => `Choose ${x}/${maxPics} pictures of ${petName ? petName : "your pet"}.`,
			AddPicturesButton: "Add pictures",
			PetDescriptionPlaceholder: "Pet detailled description goes here...",
			AddLostPlace: (petName: string) => `Add the place where ${petName ? petName : "your pet"} disappeared.`,
			EditPlace: "Edit place",
			EditReport: "Edit my report",
			UploadAd: "Upload report",
			UpdateAd: "Update report",
			Delete: "Delete",
			AdDeleted: "Report deleted",
			AdDeletedSuccessfully: "The report has successfully been deleted.",
			AdDeleteError: "An error occured while deleting the report, please try again",
			LostDate: "Date of disappearance",
			SpeciePlaceholder: "cat, dog",
			AgePlaceholder: "4 years old",
			SelectGalleryImages: {
				NoLibrairyPermission: "Animalert does not have access to your gallery, please allow the application to continue.",
				UnknownError: "Animalert was unable to access the gallery, please try again, or let us know if the bug persists.",
				PermissionName: "Gallery access",
				GoToSettings: "Go to settings"
			},
			Popup: {
				Updating: "Updating...",
				AdUpdated: "Report updated",
				Uploading: "Uploading...",
				AdUploaded: "Report published",
				AdUploadingMessage: (petName: string, uploadPercentage: number) => `Progression of ${petName}'s report upload: ${uploadPercentage}%.`,
				AdUploadedMessage: (petName: string) =>`The announcement of ${petName}'s missing`,
				AdUploadedMessageEdit: "has been successfully updated.",
				AdUploadedMessageNoEdit: "has been successfully published."
			},
			EssentialsKeysAlerts: {
				name: {
					title: "Name",
					content: "You must type the name of your pet."
				},
				images_files: {
					title: "Pictures",
					content: "You must add at least one large picture of your pet.."
				},
				lat: {
					title: "Location",
					content: "You must indicate the place where you lost your pet."
				},
				lng: {
					title: "Location",
					content: "You must indicate the place where you lost your pet."
				},
				description: {
					title: "Description",
					content: "You must write a detailed description of your pet."
				},
				age: {
					title: "Age",
					content: "You must tell the age of your pet in years."
				},
				type: {
					title: "Specie",
					content: "You must indicate the type of your pet."
				}
			}
		},
		SeeLostPet: {
			Edit: "Edit",
			InformationsAbout: (petName: string) => `Information about ${petName}:`,
			lostedDate: "Lost ",
			Categories: {
				keys: {
					specie: "specie",
					breed: "breed",
					age: "age",
					gender: "gender",
					castratedSterilized: "castrated/sterilized",
					microship: "microship"
				},
				values: {
					species: (specie: string) => {
						switch (specie) {
							case "cat":
								return "cat";
							case "dog":
								return "dog";
							default:
								return (specie);
						}
					},
					age: (age: number) => `${age} years old`,
					genderMale: "male",
					genderFemale: "female",
				}
			},
			EditModeWindowitle: "Preview my report"
		}
	},
	Discover: {
		MakeADonation: "Make a donation",
		PatchNoteScreen: {
			Title: "Version details",
			OverScrollText: "Written and maintained by Wayan NEEL 🚀"
		},
	},
	User: {
		Screen: {
			TitleAccount: "Account",
			MyAdsTitle: "My reports",
			LogOut: "Log out",
			SettingsBottomVersion: "beta release",
			LoadingMessage: "Loading your reports...",
			NoAdsMessage: "No report online",
			PublishReport: "publish a report",
			ProfileSettings: "settings",
			EditPlace: {
				WindowTitle: "Edit a place",
				ComeBackToPosition: "Come back to current position",
				LoadingUserPosition: "Loading your position...",
				Save: "Save",
				HomeDefaultName: "Home",
				WorkDefaultName: "Work",
				FavDefaultName: "Add a place",
				PermanentWarning: "Always-on alerts",
				AddPermanentWarningDescription: "Add the places you frequent regularly to be informed directly of alerts."
			},
		},
		LoginRegister: {
			DefaultPhoneLocale: "+44",
			InvalidPhoneNumber: "Invalid phone number.",
			OTPSent: "Verification code has been sent to your phone.",
			SuccessfulAuth: "Phone authentication successful 👍",
			Error: "Error",
			WaitingUserMessage: "Connecting...",
			SendingSms: "Sending you a text message...",
			ScreenTitle: "Connect to Animalert",
			PhoneNumberInputContent: "Phone number",
			PhoneNumberButtonContent: "Send verification code",
			OTPInputContent: "Verification Code",
			OTPButtonContent: "Confirm code",
			GoBack: "Go back",
			authErrors: {
				"invalid-phone-number": "Invalid phone number",
				"too-many-requests": "The maximum number of connection attempts has been reached, please try again later or contact us.",
				"invalid-verification-code": "The verification code is invalid, please try again.",
				"code-expired": "The verification code has expired, please try again.",
				"missing-client-identifier": "We are unable to validate the integrity of your device, please restart the app or contact us.",
				"popup-closed-by-user": "The captcha was cancelled, please retry"
			},
		},
		Settings: {
			AppSettings: {
				Blocs: {
					lang: "Language",
					langEmoji: "🇬🇧",
					notif: "Notifications",
					rateUs: "Rate the app",
					writeUs: "Write us",
					bugReport: "Report a bug",
					security: "Security & privacy",
					thanks: "Acknowledgements"
				},
				WriteUsScreen: {
					title: "Write us",
					OverScrollText: "Thanks in advance for your message 😻",
					IntroTitle: "Would you like to contact us?",
					IntroDescription: "Question, feedback, interview or just pure curiosity? You've come to the right place!\n\nIf you'd like us to get back to you, please leave your contact details.\nWe'll try to get back to you as soon as possible 😉",
					TextInputPlaceholder: "Your message",
					SendMessageButton: "Send my message",
					SendingState: {
						title: "Postman on his way...",
						message: "your message is being sent",
						ButtonText: "Sending..."
					},
					DoneState: {
						title: "That's it!",
						message: "Thank you for your message. We have received it and will be reading it very carefully very soon ☺️",
						ButtonText: "Go back to settings"
					},
					ErrorState: {
						title: "An error occured",
						rateLimitMessage: "You've sent a lot of messages recently, so once we've read them all you can send new ones!",
						defaultMessage: "Your message could not be sent for a reason we do not know. If the problem persists, please do not hesitate to contact us by e-mail: contact@animalert.app !"
					}
				},
				NotificationsScreen: {
					title: "Notifications",
					OverScrollText: "Tick them all!",
					IntroDescription: "Customise your notification options,\n\nwe'll only send what's necessary 😉",
					RingTypes: {
						LostPet: "lost 🐶 nearby!",
						HurtPet:  "injured 🐱 nearby!",
						OwnAdsUpdate: "Your report has been published!",
						News: "New version now available!",
						Funding: "Launch of a fund-raising campaign!"
					}
				},
				LanguageScreen: {
					title: "Language",
					SelectedLangTitle: "Selected language: ",
					LanguagesSearchInput: "Search a language",
					LanguagesListTitle: "List of available languages:",
					EmptyResultText: "No results found.\n\nIf the language you're looking for isn't available, don't hesitate to contribute!",
					HelpTranslation: "Help us translate!",
				},
			}
		}
	},
	Commons: {
		Ok: "Ok",
		No: "No",
		Yes: "Yes",
		Error: "Error",
		Cancel: "Cancel",
		Confirm: "Confirm",
		Close: "Close",
		ErrorOccuredPeaseRetry: "An error occured, please retry.",
		CantLoadImage: "the image could not be loaded",
		PleaseWait: "please wait"
	},
	data: {
		name: "English",
		flag: "🇬🇧"
	}
} as const;

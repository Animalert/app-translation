import { pet_status } from "../types/enums";
import { userPlace } from "../types/types";
import { getEmoji } from "../utils/utils";

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
					message: "You have denied access to location services. Please go to settings and reload the application to retry."
				},
				2: {
					title: "Position unavailable",
					message: "Unable to retrieve location. Please reload the app or contact support if the error persists."
				},
				3: {
					title: "Timeout error",
					message: "The location request timed out. Please click the button below to retry or reload the app."
				}
			},
			FallBackErrorTitle: "Error",
			FallBackErrorMessage: "An error occurred, please retry, restart the app, or contact support if the error persists.",
			FallBackErrorButtonText: "Retry",
			WaitingUser: "Connecting to Animalert...",
			LoggedOutErrorTitle: "You are logged out!",
			LoggedOutErrorMessage: "Please log in to access all Animalert features.",
			LoggedOutErrorButtonContent: "Go to login",
			GoToSettings: "Go to settings"
		},
		Screen: {
			LoadingPosition: "Loading position...",
			LoadingLostsPets: "Searching for lost pets around you...",
			NoLostPetsAround: "No lost animals nearby!",
			ErrorSearchingPets: "An error occurred when searching for animals lost in the area.",
			TryAgain: "Try again?",
			AnyAnimalAround: (petsInRadius: number) => {
				return (`${petsInRadius == 0 ? "No" : petsInRadius} ${(petsInRadius > 1) ? "pets" : "pets"} around`)
			},
			NearToYou: "Near you"
		},
		AddLostPet: {
			AdUploadError: "An error occurred while uploading the report, please try again",
			PetAddPpButton: "Pick an image",
			PetNamePlaceholder: "Pet name",
			ChooseXPicsOfPet: (x: number, maxPics: number, petName: string) => `Choose ${x}/${maxPics} pictures of ${petName ? petName : "your pet"}.`,
			AddPicturesButton: "Add pictures",
			PetDescriptionPlaceholder: "Pet detailed description goes here...",
			AddLostPlace: (petName: string) => `Add the place where ${petName ? petName : "your pet"} disappeared.`,
			EditPlace: "Edit place",
			EditReport: "Edit my report",
			UploadAd: "Upload report",
			UpdateAd: "Update report",
			Delete: "Delete",
			AdDeleted: "Report deleted",
			AdDeletedSuccessfully: "The report has been successfully deleted.",
			AdDeleteError: "An error occurred while deleting the report, please try again",
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
					content: "You must add at least one large picture of your pet."
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
					content: "You must tell the age of your pet."
				},
				type: {
					title: "Specie",
					content: "You must indicate the type of your pet."
				}
			},
			ImageSizeError: {
				title: "Image too big",
				message: (image_index: number) => `Your ${image_index}${ image_index == 1 ? "st" : image_index == 2 ? "nd" : image_index == 3 ? "rd" : "th"} image is too big, please compress it or choose another photo.`
			}
		},
		SeeLostPet: {
			LoadingPet: "Loading the report...",
			Edit: "Edit",
			InformationsAbout: (petName: string) => `Information about ${petName}:`,
			TestReportMessage: "Please note that this is a test report; this pet is not really in danger.",
			lostedDate: "Lost ",
			FeedbackTitles: {
				why_denied: "Reason for rejection",
				why_blocked: "Reason for blocking",
				improvements: "Possible improvements",
				message: "Animalert's message",
				testing: "Beta report"
			},
			StatusMessages: {
				[pet_status.APPROVED]: (pet_name: string) => `${pet_name}'s report is online, and users can view it in the application`,
				[pet_status.FOUND]: (pet_name: string) => `${pet_name}'s report is no longer visible on the map, users who saved it will be notified of the reunion`,
				[pet_status.WAITING_APPROVAL]: (pet_name: string) => `${pet_name}'s report will be published as soon as it has been approved by a moderator.`,
				updated: (pet_name: string) => `${pet_name}'s report is online. Your updates will be published as soon as a moderator has approved them.`,
				[pet_status.DELETED]: (pet_name: string) => `${pet_name}'s report has been removed, so you're the only one who can see it.`,
				[pet_status.DENIED]: (pet_name: string) => `${pet_name}'s report has been rejected, so you're the only one who can see it`
			},
			Categories: {
				keys: {
					specie: "specie",
					breed: "breed",
					age: "age",
					gender: "gender",
					castratedSterilized: "castrated/sterilized",
					microship: "microchip",
					is_testing: "Is this a test report?",
					is_owner: "Are you the pet owner?"
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
					age: (age: number, is_years: boolean) => `${Math.abs(age)} ${is_years ? "years" : "months"} old`,
					genderMale: "male",
					genderFemale: "female",
				}
			},
			YouWillBeNotified: (pet_name: string, _is_male: boolean) => `We'll let you know when ${pet_name} is found`,
			NotifyMe: (pet_name: string, _is_male: boolean) => `Notify me when ${pet_name} is found`,
			IFoundPet: (pet_name: string) => `I recovered ${pet_name}`,
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
			PublishReport: "Publish a report",
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
			OTPSent: "The verification code has been sent to your phone.",
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
				"popup-closed-by-user": "The captcha was cancelled, please retry",
				"user-disabled": "You are banned from the Animalert organisation and all of its features."
			},
		},
		Settings: {
			AppSettings: {
				Blocs: {
					savedReports: "Saved reports",
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
					OverScrollText: "Thanks in advance for your message 😻",
					IntroTitle: "Would you like to contact us?",
					IntroDescription: "Question, feedback, interview or just pure curiosity? You've come to the right place!\n\nIf you'd like us to get back to you, please leave your contact details.\nWe'll try to get back to you as soon we can 😉",
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
						title: "An error occurred",
						rateLimitMessage: "You've sent a lot of messages recently, so once we've read them all you can send new ones!",
						defaultMessage: "Your message could not be sent for an unknown reason. If the problem persists, please do not hesitate to contact us by e-mail: contact@animalert.app!"
					}
				},
				BugReportScreen: {
					OverScrollText: "It'll be fixed in the next version",
					IntroTitle: "You found a bug?",
					IntroDescription: "You've come to the right place to report it!\n\nIf possible, please attach a screenshot of your problem.\n\nPlease also take a screenshot of the information below to help us fix the problem :)",
					ContactText: "Choose the contact method that suits you best:",
					Mail: "mail",
					Thanks: "We'd like to thank you in advance for your feedback, which will help us to continually improve the application"
				},
				NotificationsScreen: {
					title: "Notifications",
					OverScrollText: "Tick them all!",
					IntroDescription: "Customise your notification options, we'll only send what's necessary 😉",
					GoToHistory: "Previously received notifications",
					RingTypes: {
						LostPet: "lost 🐶 nearby!",
						HurtPet:  "injured 🐱 nearby!",
						OwnAdsUpdate: "Your report has been published!",
						News: "New version now available!",
						Funding: "Launch of a fund-raising campaign!",
						Testing: "🧪 - lost 🐶 nearby! (beta test notifications)"
					}
				},
				NotificationHistoryScreen: {
					title: "Past notifications",
					OverScrollText: "we never spam :)",
					NoNotifHistory: "No notification received",
					SendAt: (date: string) => `Sent on ${date} at `
				},
				LanguageScreen: {
					title: "Language",
					SelectedLangTitle: "Selected language: ",
					LanguagesSearchInput: "Search a language",
					LanguagesListTitle: "List of available languages:",
					EmptyResultText: "No results found.\n\nIf the language you're looking for isn't available, don't hesitate to contribute!",
					HelpTranslation: "Help us translate!",
				},
				SavedReportsScreen: {
					loadingSavedReports: "loading saved reports...",
					overScrollText: "Please don't forget them, they rely on you, and so do we",
					title: "Find your saved reports here",
					reportsNotification: "if any of them are found, you will be notified.",
					reportsAccess: "you can have access to these reports at any time.",
					noSavedReport: "No reports saved at the moment."
				},
			}
		}
	},
	Notifications: {
		AppUpdate: {
			title: "New version now available!",
			body: (version: string) => `Update the application to enjoy version ${version}!`
		},
		LostPetFound: {
			title: (specie: string, _is_male: boolean) => `${getEmoji(specie)} recovered!`,
			body: (pet_name: string, _is_male: boolean) => `${pet_name} was reunited with her owners today :)`
		},
		PetLostAround: {
			title: (_specie: string, _is_male: boolean) => `lost nearby!`,
			body: (pet_name: string, _is_male: boolean) => `${pet_name} was reported lost near you, keep an eye out!`,
		},
		NewPetReport: {
			title: (specie: string, _is_male: boolean) => `${getEmoji(specie)} reported lost!`,
			body: (pet_name: string, _is_male: boolean, placeID: userPlace["id"], place_name: string) => `${pet_name} has been reported lost near ${
				placeID == "user" ? "you" : `${place_name}`
			}${placeID == "user" ? ", keep an eye out" : ""}!`
		},
		ReportDenied: {
			title: "Report denied by a moderator!",
			body: (pet_name: string) => `The report on ${pet_name}'s loss was rejected.`
		},
		ReportApproved: {
			title: "Your report has been published!",
			body: (pet_name: string, is_male: boolean) => `All users in the area around ${pet_name} will be notified of ${is_male ? "his" : "her"} loss!`,
		}
	},
	Popup: {
		UpdateAvailable: {
			title: "New version available",
			description: "You must update Animalert to continue!",
			buttonText: "update!",
		},
		WelcomeToVersion: {
			title: "New version",
			description: (version_name: string) => `Welcome to version ${version_name} of Animalert!`,
			buttonText: "See what's new!",
		},
	},
	Commons: {
		Ok: "Ok",
		No: "No",
		Yes: "Yes",
		Error: "Error",
		Cancel: "Cancel",
		Confirm: "Confirm",
		Close: "Close",
		ErrorOccuredPeaseRetry: "An error occurred, please retry.",
		CantLoadImage: "the image could not be loaded",
		PleaseWait: "please wait",
		Now: "now",
		TimeAgo: (time_amount: string) => `${time_amount} ago`,
		Day: "day",
		Days: "days"
	},
	data: {
		name: "English",
		flag: "🇬🇧"
	}
} as const;

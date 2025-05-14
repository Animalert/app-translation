import { pet_status } from "../types/enums";
import { userPlace } from "../types/types";
import { getEmoji } from "../utils/utils";

export const fr = {
	AppNavigation: {
		ScreensTitles: {
			AddLostPetScreen: "Déclarer un animal perdu",
			EditPlaceScreen: "Lieu de disparition"
		}
	},
	Map: {
		Wrapper: {
			GeolocationErrorCustomMessages: {
				1: {
					title: "Permission refusée",
					message: "Animalert n'a pas accès à votre localisation. Activez l'accès à la localisation dans les paramètres et relancez l'application pour réessayer."
				},
				2: {
					title: "Position indisponible",
					message: "Animalert n'arrive pas à récuperer votre position. Relancez l'application pour réessayer ou contactez le support si le problème persiste."
				},
				3: {
					title: "Position expirée",
					message: "Votre appareil n'est pas en mesure de nous fournir l'accès à votre position. Relancez l'application pour réessayer ou contactez le support si le problème persiste."
				}
			},
			FallBackErrorTitle: "Erreur",
			FallBackErrorMessage: "Une erreur est survenue, veuillez réessayer, relancer l'app, ou nous contacter si le problème persiste.",
			FallBackErrorButtonText: "Réessayer",
			WaitingUser: "Connexion en cours...",
			LoggedOutErrorTitle: "Vous êtes déconnecté",
			LoggedOutErrorMessage: "Veuillez vous connecter pour accéder à toutes les fonctionnalités d'Animalert.",
			LoggedOutErrorButtonContent: "Se connecter",
			GoToSettings: "Paramètres"
		},
		Screen: {
			LoadingPosition: "Chargement de la position...",
			LoadingLostsPets: "Recherche d'animaux perdus autour de vous...",
			NoLostPetsAround: "Aucun animal perdu à proximité !",
			ErrorSearchingPets: "Une erreur est survenue lors de la recherche des animaux perdus à proximité.",
			TryAgain: "réessayer ?",
			AnyAnimalAround: (petsInRadius: number) => {
				return (`${petsInRadius == 0 ? "Aucun" : petsInRadius} ${(petsInRadius > 1) ? "Animaux" : "Animal"} à proximité`)
			},
			NearToYou: "Proche de vous"
		},
		AddLostPet: {
			AdUploadError: "Une erreur est survenue lors de la mise en ligne de l'annonce, veuillez rééssayer",
			PetAddPpButton: "Choisissez une image",
			PetNamePlaceholder: "Nom de votre animal",
			ChooseXPicsOfPet: (x: number, maxPics: number, petName: string) => `Choisissez ${x}/${maxPics} photos de ${petName ? petName : "votre animal"}.`,
			AddPicturesButton: "Add pictures",
			PetDescriptionPlaceholder: "Description détaillée de votre animal...",
			AddLostPlace: (petName: string) => `Ajouter le lieu de disparition de ${petName ? petName : "mon animal"}.`,
			EditPlace: "Modifier le lieu",
			EditReport: "Modifier mon annonce",
			UploadAd: "Mettre en ligne",
			UpdateAd: "Mettre à jour",
			Delete: "Supprimer",
			AdDeleted: "Annonce supprimée",
			AdDeletedSuccessfully: "L'annonce à bien été supprimée.",
			AdDeleteError: "Une erreur est survenue lors de la suppression de l'annonce, veuillez rééssayer",
			LostDate: "Date de disparition",
			SpeciePlaceholder: "chat, chien",
			AgePlaceholder: "4 ans",
			SelectGalleryImages: {
				NoLibrairyPermission: "Animalert de dispose pas de l'accès à votre gallerie, veuillez autoriser l'application pour continuer.",
				UnknownError: "Animalert n'a pas réussi à accéder à la gallerie, veuillez réessayer, ou nous le signaler si le bug persiste.",
				PermissionName: "Accès à la gallerie",
				GoToSettings: "Paramètres"
			},
			Popup: {
				Updating: "Mise à jour...",
				AdUpdated: "Annonce mise à jour",
				Uploading: "Mise en ligne...",
				AdUploaded: "Annonce publiée",
				AdUploadingMessage: (petName: string, uploadPercentage: number) => `Progression de la mise en ligne de l'annonce de ${petName}: ${uploadPercentage}%.`,
				AdUploadedMessage: (petName: string) =>`L'annonce signalant la disparition de ${petName}`,
				AdUploadedMessageEdit: "à bien été mise à jour.",
				AdUploadedMessageNoEdit: "à bien été mise en ligne."
			},
			EssentialsKeysAlerts: {
				name: {
					title: "Nom",
					content: "Vous devez mentionner le nom de votre animal."
				},
				images_files: {
					title: "Photos",
					content: "Vous devez ajouter au minimum une photo grand format de votre animal."
				},
				lat: {
					title: "Localisation",
					content: "Vous devez ajouter un lieu de disparition pour votre animal."
				},
				lng: {
					title: "Localisation",
					content: "Vous devez ajouter un lieu de disparition pour votre animal."
				},
				description: {
					title: "Description",
					content: "Vous devez ajouter une description détaillée de votre animal."
				},
				age: {
					title: "Âge",
					content: "Vous devez indiquer l'âge de votre animal en années."
				},
				type: {
					title: "Espèce",
					content: "Vous devez indiquer de quel type d'animal il s'agit."
				}
			},
			ImageSizeError: {
				title: "Image trop lourde",
				message: (image_index: number) => `Votre ${image_index}${image_index == 1 ? "r" : ""}e image est trop lourde, veuillez la compresser ou choisir une autre photo.`
			}
		},
		SeeLostPet: {
			LoadingPet: "Chargement de l'annonce...",
			Edit: "Modifier",
			InformationsAbout: (petName: string) => `Informations concernant ${petName}:`,
			TestReportMessage: "Attention ceci est une annonce de test, cet animal n'est pas réellement en danger.",
			lostedDate: "Perdu ",
			FeedbackTitles: {
				why_denied: "Motif du refus",
				why_blocked: "Motif du bloquage",
				improvements: "Améliorations possibles",
				message: "Message d'Animalert",
				testing: "Annonce bêta"
			},
			StatusMessages: {
				[pet_status.APPROVED]: (pet_name: string) => `L'annonce de ${pet_name} est en ligne, les utilisateurs peuvent la voir dans l'application`,
				[pet_status.FOUND]: (pet_name: string) => `L'annonce de ${pet_name} n'est plus visible sur la carte, les utilisateurs l'ayant enregistrée seront prévenus des retrouvailles`,
				[pet_status.WAITING_APPROVAL]: (pet_name: string) => `L'annonce de ${pet_name} sera mise en public dès qu'un modérateur l'aura approuvée`,
				updated: (pet_name: string) => `L'annonce de ${pet_name} est en ligne. Vos mises à jour seront mises en public dès qu'un modérateur les aura approuvées`,
				[pet_status.DELETED]: (pet_name: string) => `L'annonce de ${pet_name} à été supprimée, vous êtes le seul à pouvoir la voir`,
				[pet_status.DENIED]: (pet_name: string) => `L'annonce de ${pet_name} à été refusée, vous êtes le seul à pouvoir la voir`
			},
			Categories: {
				keys: {
					specie: "espèce",
					breed: "race",
					age: "âge",
					gender: "sexe",
					castratedSterilized: "castré/stérilisé",
					microship: "puce éléctronique",
					is_testing: "Est-ce une annonce de test ?",
					is_owner: "Êtes-vous le propriétaire de l'animal ?"
				},
				values: {
					species: (specie: string) => {
						switch (specie) {
							case "cat":
								return "chat";
							case "dog":
								return "chien";
							default:
								return (specie);
						}
					},
					age: (age: number, is_years: boolean) => `${Math.abs(age)} ${is_years ? "ans" : "mois"}`,
					genderMale: "mâle",
					genderFemale: "femelle",
				}
			},
			YouWillBeNotified: (pet_name: string, is_male: boolean) => `Vous serez informé.e quand ${pet_name} sera retrouvé${is_male ? "" : "e"}`,
			NotifyMe: (pet_name: string, is_male: boolean) => `Me prévenir quand ${pet_name} sera retrouvé${is_male ? "" : "e"}`,
			IFoundPet: (pet_name: string) => `J'ai retrouvé.e ${pet_name}`,
			EditModeWindowitle: "Aperçu de mon annonce"
		}
	},
	Discover: {
		MakeADonation: "Faire un don",
		PatchNoteScreen: {
			Title: "Détails de la version",
			OverScrollText: "Rédigé et maintenu par Wayan NEEL 🚀"
		},
	},
	User: {
		Screen: {
			TitleAccount: "Compte",
			MyAdsTitle: "Mes annonces",
			LogOut: "Se déconnecter",
			SettingsBottomVersion: "version bêta",
			LoadingMessage: "Chargement de vos annonces...",
			NoAdsMessage: "Aucune annonce publiée",
			PublishReport: "Publier une annonce",
			ProfileSettings: "paramètres",
			EditPlace: {
				WindowTitle: "Éditer un lieu",
				ComeBackToPosition: "Revenir à la position actuelle",
				LoadingUserPosition: "Chargement de votre position...",
				Save: "Sauvegarder",
				HomeDefaultName: "Maison",
				WorkDefaultName: "Travail",
				FavDefaultName: "Ajouter un lieu",
				PermanentWarning: "Alertes permanentes",
				AddPermanentWarningDescription: "Ajoutez les lieux que vous fréquentez régulièrement pour être informé en direct des signalements."
			},
		},
		LoginRegister: {
			DefaultPhoneLocale: "+33",
			InvalidPhoneNumber: "Numéro de téléphone invalide.",
			OTPSent: "Un code de vérification vous à été envoyé par SMS.",
			SuccessfulAuth: "Connexion par téléphone réussie 👍",
			Error: "Erreur",
			WaitingUserMessage: "Connexion en cours...",
			SendingSms: "Envoi du sms en cours...",
			ScreenTitle: "Se connecter à Animalert",
			PhoneNumberInputContent: "Numéro de téléphone",
			PhoneNumberButtonContent: "Envoyer un code de vérification",
			OTPInputContent: "Code de vérification",
			OTPButtonContent: "Confirmer le code",
			GoBack: "Revenir en arrière",
			authErrors: {
				"invalid-phone-number": "Le numéro de téléphone renseigné est invalide",
				"too-many-requests": "Le nombre maximal de tentatives de connexions à été atteint, veuillez réessayer plus tard ou nous contacter.",
				"invalid-verification-code": "Le code de vérification est invalide, veuillez réessayer.",
				"code-expired": "Le code de vérification à expiré, veuillez recommencer.",
				"missing-client-identifier": "Nous n'arrivons pas à valider l'intégrité de votre appareil, veuillez relancer l'application ou nous contacter.",
				"popup-closed-by-user": "Le captcha à été annulé, veuillez rééssayer",
				"user-disabled": "Vous êtes banni de l'association Animalert et de ses différents services."
			}
		},
		Settings: {
			AppSettings: {
				Blocs: {
					savedReports: "Annonces enregistrées",
					lang: "Langue",
					langEmoji: "🇫🇷",
					notif: "Notifications",
					rateUs: "Noter l'app",
					writeUs: "Nous écrire",
					bugReport: "Signaler un bug",
					security: "Sécurité et confidentialité",
					thanks: "Remerciements"
				},
				WriteUsScreen: {
					OverScrollText: "Merci d'avance pour votre message 😻",
					IntroTitle: "Vous souhaitez nous contacter ?",
					IntroDescription: "Question, feedback, interview ou par curiosité ? Vous êtes au bon endroit !\n\nSi vous souhaitez être recontactés, veillez à laisser vos coordonées.\nNous essairons de vous répondre dans les plus bref délais 😉",
					TextInputPlaceholder: "Votre message",
					SendMessageButton: "Envoyer mon message",
					SendingState: {
						title: "Le facteur est en chemin...",
						message: "votre message est en cours d'envoi",
						ButtonText: "Envoi en cours..."
					},
					DoneState: {
						title: "C'est dans la boite !",
						message: "Merci pour votre message, nous l'avons bien reçu et allons le lire avec la plus grande attention très rapidement ☺️",
						ButtonText: "Revenir aux paramètres"
					},
					ErrorState: {
						title: "Une erreur est survenue",
						rateLimitMessage: "Vous avez envoyé beaucoup de messages récemment, une fois que nous les auront tous lus vous pourrez en envoyer à nouveau !",
						defaultMessage: "Votre message n'a pas pu être envoyé pour une raison que nous ignorons, si le problème persiste n'hésitez pas à nous contacter par mail: contact@animalert.app !"
					}
				},
				BugReportScreen: {
					OverScrollText: "Ça sera réglé dans la prochaine version",
					IntroTitle: "Vous avez trouvé un bug ?",
					IntroDescription: "Vous êtes au bon endroit pour le signaler !\n\nSi c'est possible, n'hésitez pas à joindre une capture d'écran de votre problème.\n\nMerci de prendre également une capture d'écran des informations ci-dessous pour nous aider à régler le problème :)",
					ContactText: "Choisissez le moyen de contact qui vous convient le mieux :",
					Mail: "mail",
					Thanks: "On vous remercie d'avance pour votre signalement, grâce à vos retours on peut améliorer l'application chaque jour"
				},
				NotificationsScreen: {
					title: "Notifications",
					OverScrollText: "Activez les toutes !",
					IntroDescription: "Personnalisez vos choix de notifications, promis on enverra que le nécessaire 😉",
					GoToHistory: "Notifications reçues précedemment",
					RingTypes: {
						LostPet: "🐶 perdu à proximité !",
						HurtPet:  "🐱 blessé à proximité !",
						OwnAdsUpdate: "Votre annonce à été publiée !",
						News: "Nouvelle version disponible !",
						Funding: "Lancement d'une collecte de dons !",
						Testing: "🧪 - 🐶 perdu à proximité ! (notifications de tests bêta)"
					}
				},
				NotificationHistoryScreen: {
					title: "Notifications reçues",
					OverScrollText: "jamais de spam :)",
					NoNotifHistory: "Aucune notification reçue",
					SendAt: (date: string) => `Envoyée le ${date} à `
				},
				LanguageScreen: {
					title: "Langue",
					SelectedLangTitle: "Langue séléctionée: ",
					LanguagesSearchInput: "Chercher une langue",
					LanguagesListTitle: "Liste des langues disponibles:",
					EmptyResultText: "Aucun résultat trouvé.\n\nSi la langue que vous cherchez n'est pas disponible, n'hésitez pas à contribuer !",
					HelpTranslation: "Participer à la traduction !",
				},
				SavedReportsScreen: {
					loadingSavedReports: "chargement des annonces...",
					overScrollText: "Merci de ne pas les oublier, ils comptent sur toi, et nous aussi",
					title: "Retrouvez ici vos annonces enregistrées",
					reportsNotification: "si l'un d'entre eux est retrouvé, vous serez notifié.",
					reportsAccess: "vous pouvez accéder à ces annonces à tout moment.",
					noSavedReport: "aucune annonce sauvegardée pour le moment."
				},
			}
		}
	},
	Notifications: {
		AppUpdate: {
			title: "Nouvelle version disponible !",
			body: (version: string) => `Mettez l'application à jour pour bénéficier de la version ${version} !`
		},
		PetLostAround: {
			title: (specie: string, is_male: boolean) => `${getEmoji(specie)} perdu${is_male ? "" : "e"} à proximité !`,
			body: (pet_name: string, is_male: boolean) => `${pet_name} a été déclaré${is_male ? "" : "e"} perdu${is_male ? "" : "e"} à proximité de vous, ouvrez l'œil !`
		},
		LostPetFound: {
			title: (specie: string, is_male: boolean) => `${getEmoji(specie)} retrouvé${is_male ? "" : "e"} !`,
			body: (pet_name: string, is_male: boolean) => `${pet_name} a été retrouvé${is_male ? "" : "e"} aujourd'hui par ses propriétaires :)`
		},
		NewPetReport: {
			title: (specie: string, is_male: boolean) => `${getEmoji(specie)} déclaré${is_male ? "" : "e"} perdu${is_male ? "" : "e"} !`,
			body: (pet_name: string, is_male: boolean, placeID: userPlace["id"], place_name: string) => `${pet_name} a été déclaré${is_male ? "" : "e"} perdu${is_male ? "" : "e"} à proximité de ${
				placeID == "user" ? "vous" : `${place_name}`
			}${placeID == "user" ? ", ouvrez l'œil" : ""} !`
		},
		ReportDenied: {
			title: "Annonce refusée par un modérateur !",
			body: (pet_name: string) => `L'annonce concernant la disparition de ${pet_name} a été refusée.`
		},
		ReportApproved: {
			title: "Votre annonce est en public !",
			body: (pet_name: string, _is_male: boolean) => `Tout les utilisateurs se trouvant à proximité de ${pet_name} seront notifiés de sa disparition !`,
		},
	},
	Popup: {
		UpdateAvailable: {
			title: "Nouvelle version disponible",
			description: "Vous devez mettre à jour Animalert pour continuer !",
			buttonText: "mettre à jour !",
		},
		WelcomeToVersion: {
			title: "Nouvelle version",
			description: (version_name: string) => `Bienvenue dans la version ${version_name} d'Animalert !`,
			buttonText: "Découvrir les nouveautés !",
		},
	},
	Commons: {
		Ok: "Ok",
		No: "Non",
		Yes: "Oui",
		Error: "Erreur",
		Cancel: "Annuler",
		Confirm: "Confirmer",
		Close: "Fermer",
		ErrorOccuredPeaseRetry: "Une erreur est survenue, veuillez réessayer.",
		CantLoadImage: "l'image n'a pu être chargée",
		PleaseWait: "veuillez patienter",
		Now: "maintenant",
		TimeAgo: (time_amount: string) => `il y a ${time_amount}`,
		Day: "jour",
		Days: "jours"
	},
	data: {
		name: "Français",
		flag: "🇫🇷"
	}
} as const;

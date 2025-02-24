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
					message: "Votre apareil n'est pas en mesure de nous fournir l'accès à votre position. Relancez l'application pour réessayer ou contactez le support si le problème persiste."
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
			Title: "Animalert Radar",
			NoLostPetsAround: "Aucun animal perdu à proximité !",
			ErrorSearchingPets: "Une erreur est survenue lors de la recherche des animaux perdus à proximité.",
			TryAgain: "réessayer ?",
			AnyAnimalAround: (petsInRadius: any[]) => {
				return (`${petsInRadius.length == 0 ? "Aucun" : petsInRadius.length} ${(petsInRadius.length > 1) ? "Animaux" : "Animal"} à proximité`)
			},
			NotifyAnimalAroundTitle: (is_male: boolean) => `perdu${is_male ? "" : "e"} à proximité !`,
			NotifyAnimalAroundBody: (pet: {name: string; is_male: boolean;}) => `${pet.name} a été déclaré${pet.is_male ? "" : "e"} perdu${pet.is_male ? "" : "e"} à proximité de vous, ouvrez l'œil !`,
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
				AdUploadedMessage: (petName: string) =>`L'annonce signalant la disparition de de ${petName}`,
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
			}
		},
		SeeLostPet: {
			Edit: "Modifier",
			InformationsAbout: (petName: string) => `Informations concernant ${petName}:`,
			lostedDate: "Perdu ",
			Categories: {
				keys: {
					specie: "espèce",
					breed: "race",
					age: "âge",
					gender: "sexe",
					castratedSterilized: "castré/stérilisé",
					microship: "puce éléctronique"
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
					age: (age: number) => `${age} ans`,
					genderMale: "mâle",
					genderFemale: "femelle",
				}
			},
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
			PublishReport: "publier une annonce",
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
				AddPermanentWarningDescription: "Ajoutez les lieux que vous fréquentez régulièrement pour être informé en direct des signalement."
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
				"popup-closed-by-user": "Le captcha à été annulé, veuillez rééssayer"
			},
		},
		Settings: {
			AppSettings: {
				Blocs: {
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
					title: "Nous écrire",
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
				NotificationsScreen: {
					title: "Notifications",
					OverScrollText: "Activez les toutes !",
					IntroDescription: "Personnalisez vos choix de notifications,\n\npromis on enverra que le nécessaire 😉",
					RingTypes: {
						LostPet: "🐶 perdu à proximité !",
						HurtPet:  "🐱 blessé à proximité !",
						OwnAdsUpdate: "Votre annonce à été publiée !",
						News: "Nouvelle version disponible !",
						Funding: "Lancement d'une collecte de dons !"
					}
				},
				LanguageScreen: {
					title: "Langue",
					SelectedLangTitle: "Langue séléctionée: ",
					LanguagesSearchInput: "Chercher une langue",
					LanguagesListTitle: "Liste des langues disponibles:",
					EmptyResultText: "Aucun résultat trouvé.\n\nSi la langue que vous cherchez n'est pas disponible, n'hésitez pas à contribuer !",
					HelpTranslation: "Participer à la traduction !",
				},
			}
		}
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
		PleaseWait: "veuillez patienter"
	},
	data: {
		name: "Français",
		flag: "🇫🇷"
	}
} as const;

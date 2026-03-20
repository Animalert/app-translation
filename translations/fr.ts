import { contact_method, pet_report_steps, pet_status } from "../types/enums";
import { userPlace } from "../types/types";
import { getEmoji, Platform } from "../utils/utils";

export const fr = {
	AppNavigation: {
		ScreensTitles: {
			AddLostPetScreen: "Déclarer un animal perdu",
			AddFoundPetScreen: "Signaler un animal trouvé",
			AddDeadPetScreen: "Signaler un animal décédé",
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
					message: `Animalert n'arrive pas à récupérer votre position. Cela peut être du à un faible signal GPS, ou une mauvaise connexion.${Platform.OS == "android" ? " Avez-vous bien activé la localisation ?" : ""}`
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
			NoPetsAround: (report_type: string, place_id: userPlace["id"], place_name: string) => `Aucun animal ${report_type}à proximité de ${place_id == "user" ? "vous" : place_name} !`,
			ErrorSearchingPets: "Une erreur est survenue lors de la recherche des animaux perdus à proximité.",
			TryAgain: "Réessayer ?",
			AnyAnimalAround: (petsInRadius: number) => (`${petsInRadius == 0 ? "Aucun" : petsInRadius} ${(petsInRadius > 1) ? "Animaux" : "Animal"} à proximité`),
			NearTo: (place_id: userPlace["id"], place_name?: string) => `proche de ${place_id == "user" ? "vous" : place_name}`,
			Filters: {
				Title: "Filtres",
				FiltersDescription: "Sélectionnez les annonces à afficher en fonction des filtres.",
				ReportType: "Type d'annonces",
				LostPets: "Animaux perdus",
				FoundPets: "Animaux trouvés",
				DeadPets: "Animaux décédés",
				AllPets: "Tous les animaux"
			},
		},
		AddDeadPet: {
			FoundDate: "Quand avez vous trouvé l'animal ?",
			StepHeaderTitle: {
				[pet_report_steps.INFOS]: "Informations",
				[pet_report_steps.PLACE]: "Où se trouve l'animal ?",
				[pet_report_steps.EXTRA_INFOS]: "Informations optionelles",
				[pet_report_steps.REVIEW]: "Mise en ligne",
			},
			PlaceSection: {
				SupportTitle: "Prise en charge",
				ZoneCovered: "Zone couverte : Intervention rapide possible.",
				ZoneNotCovered: "Hors zone partenaire : Signalement citoyen.",
				AreaResponsible: "Responsable de la zone",
				GuaranteeSupport: "Pour garantir une prise en charge.",
				NoPartnerMatch: "Aucun des partenaires ci-dessus ne correspond.",
				SelectPartnerAlert: "Vous devez sélectionner un partenaire",
				WhyChoose: {
					title: "Pourquoi choisir ?",
					content: "Chaque service intervient uniquement sur son territoire.",
				}
			},
			CitizenReport: {
				title: "Signalement citoyen",
				description: "Aucun partenaire Animalert n'est encore actif ici. Votre signalement sera enregistré, et nous vous donnerons les numéros à appeler en fin d'étape.",
			},
			Popup: {
				NewReport: {
					DoneState: {
						message: (has_city: boolean, city_name?: string) => has_city ?
							`Merci pour votre signalement. Il a bien été transmis aux services de ${city_name}. L'annonce sera examinée, et ${city_name} reviendra vers vous si nécessaire.`
							: "Merci pour votre signalement. Ces informations sont précieuses : elles restent enregistrées dans notre base et permettront peut-être à un propriétaire de retrouver la trace de son animal.",
					}
				},
				ReportUploadedMessage: (petName: string) => `L'annonce concernant le décès de ${petName}`,
			},
		},
		AddFoundPet: {
			PetNamePlaceholder: "Espèce de l'animal",
			TheAnimal: "l'animal",
			FoundDate: "Date de la trouvaille",
			PetDescriptionPlaceholder: "Mentionnez ici toute information qui vous parait pertinente.",
			Popup: {
				ReportUploadedMessage: (petName: string) => `L'annonce signalant que ${petName} a été trouvé(e)`,
			},
		},
		AddLostPet: {
			AdUploadError: "Une erreur est survenue lors de la mise en ligne de l'annonce, veuillez réessayer",
			PetAddPpButton: "Choisissez une image",
			PetNamePlaceholder: "Nom de votre animal",
			ChooseXPicsOfPet: (x: number, maxPics: number, petName: string) => `Choisissez ${x}/${maxPics} photos de ${petName || "votre animal"}.`,
			AddPicturesButton: "Ajouter des photos",
			PetDescriptionPlaceholder: "Description détaillée de votre animal...",
			AddLostPlace: (petName?: string) => `Ajouter le lieu de disparition de ${petName || "l'animal"}.`,
			AddFoundPlace: () => "Ajouter le lieu où vous avez trouvé l'animal.",
			EditPlace: "Modifier le lieu",
			EditReport: "Modifier mon annonce",
			UploadAd: "Mettre en ligne",
			UpdateAd: "Mettre à jour",
			Delete: "Supprimer",
			AdDeleted: "Annonce supprimée",
			AdDeletedSuccessfully: "L'annonce a bien été supprimée.",
			AdDeleteError: "Une erreur est survenue lors de la suppression de l'annonce, veuillez réessayer",
			LostDate: "Date de disparition",
			SpeciePlaceholder: "chat, chien",
			AgePlaceholder: "4 ans",
			CloseReport: {
				title: "Attention",
				description: "Toutes les modifications en cours seront supprimées"
			},
			SelectGalleryImages: {
				NoLibrairyPermission: "Animalert ne dispose pas de l'accès à votre galerie, veuillez autoriser l'application pour continuer.",
				UnknownError: "Animalert n'a pas réussi à accéder à la galerie, veuillez réessayer, ou nous le signaler si le problème persiste.",
				PermissionName: "Accès à la galerie",
				GoToSettings: "Paramètres"
			},
			Popup: {
				NewReport: {
					SendingState: {
						title: "Mise en ligne...",
						message: (petName: string, uploadPercentage: number) => `Progression de la mise en ligne de l'annonce de ${petName}: ${uploadPercentage}%.`,
					},
					DoneState: {
						title: "Annonce publiée",
						message: (is_new: boolean, _?: string) => `Nous allons procéder à une vérification ${is_new ? "de l'annonce" : "des mises à jour"}. Nous vous informerons dès qu'${is_new ? "elle sera" : "elles seront"} visible${is_new ? "" : "s"} par les autres utilisateurs.`,
					}
				},
				UpdateReport: {
					SendingState: {
						title: "Mise à jour...",
					},
					DoneState: {
						title: "Annonce mise à jour",
					}
				},
				ErrorState: {
					rateLimitMessage: "Vous avez envoyé beaucoup d'annonces récemment, une fois que nous les aurons toutes lues vous pourrez en envoyer à nouveau !",
					defaultMessage: "Votre annonce n'a pas pu être envoyée pour une raison que nous ignorons, si le problème persiste, n'hésitez pas à nous contacter par mail: contact@animalert.app !"
				},
				ReportUploadedMessage: (petName: string) => `L'annonce signalant la disparition de ${petName}`,
				ReportUploadedMessageEdit: "a bien été mise à jour.",
				ReportUploadedMessageNoEdit: "a bien été mise en ligne."
			},
			EssentialsKeysAlerts: {
				name: {
					title: "Nom",
					content: "Vous devez mentionner le nom de votre animal."
				},
				images_files: {
					title: "Photos",
					content: (found?: boolean) => `Vous devez ajouter au minimum une photo de ${found ? "l'" : "votre "}animal.`,
				},
				lat: {
					title: "Localisation",
					content: (found?: boolean) => `Vous devez ajouter ${found ? "l'emplacement auquel vous avez trouvé l'" : "un lieu de disparition pour votre "}animal.`,
				},
				lng: {
					title: "Localisation",
					content: (found?: boolean) => `Vous devez ajouter ${found ? "l'emplacement auquel vous avez trouvé l'" : "un lieu de disparition pour votre "}animal.`,
				},
				description: {
					title: "Description",
					foundTitle: "Informations complémentaires",
					content: (found?: boolean) => `Vous devez ajouter ${found ? "du contexte pour nous aider a comprendre la situation" : "une description détaillée de votre animal"}.`
				},
				age: {
					title: "Âge",
					content: "Vous devez indiquer l'âge de votre animal."
				},
				type: {
					title: "Espèce",
					content: "Vous devez indiquer l'espèce de l'animal."
				}
			},
			ImageSizeError: {
				title: "Image trop lourde",
				message: (image_index: number) => `Votre ${image_index}${image_index == 1 ? "èr" : ""}e image est trop lourde, veuillez la compresser ou choisir une autre photo.`
			}
		},
		SeeFoundPet: {
			Found: (plural: boolean, is_male: boolean) => `Trouvé${is_male ? "" : "e"}${plural ? "s" : ""} `,
			Categories: {
				keys: {
					know_owner: "Connaissez vous le propriétaire ?",
					can_walk: "L'animal peut-il marcher ?",
					is_awake: "L'animal est il réveillé ?",
					is_injured: "L'animal est il blessé ?",
					is_healthy: "L'animal a t-il l'air en bonne santé ?\n(hors blessures)",
					is_agressive: "L'animal est il agressif ?",
					did_pickup: "Avez vous pris l'animal avec vous ?",
					bring_to_vet: "Allez vous emmener l'animal chez un vétérinaire ?"
				},
				values: {
					injured: "Blessé.e",
					safe: "Sauf",
					cant_walk: "Incapable de se déplacer",
					agressive: "Agressif"
				}
			},
			NotifyMe: (pet_name: string, is_male: boolean) => `Me prévenir quand ${pet_name} aura retrouvé${is_male ? "" : "e"} sa famille`,
			PetIsSafe: (pet_name: string) => `${pet_name} est maintenant en sécurité`,
			Poster: {
				Default: {
					HelpUs: (pet_name: string) => `On a besoin de vous pour aider ${pet_name}`,
					BeNotified: (pet_name: string) => `Soyez prévenus quand ${pet_name} aura retrouvé sa famille avec Animalert`
				}
			}
		},
		SeeDeadPet: {
			NotifyMe: () => "Me prévenir de l'avancement de la situation.",
			Dead: (plural: boolean, is_male: boolean) => `Décédé${is_male ? "" : "e"}${plural ? "s" : ""}`,
			Categories: {
				keys: {
					is_injured: "L'animal est il blessé ?",
					is_healthy: "L'animal avait t-il l'air en bonne santé ?\n(hors blessures)",
					did_pickup: "Avez vous pris l'animal avec vous ?",
				}
			},
			ContactCity: {
				title: "Contacter votre ville",
				YourCity: "Votre ville",
				CountryCapital: "Paris",
				QueryPhone: "téléphone",
				QueryTownHall: "mairie",
				AccessPhone: "Accéder au numéro",
				INotifiedCity: "J'ai prévenu la mairie"
			},
			Show: "Afficher",
			Hide: "Cacher",
			ProInfos: {
				Assigned: "Assigné",
				NonAssigned: "Non assigné"
			},
			Timeline: {
				Title: {
					CitizenReport: "Signalement enregistré (Hors zone)",
					CityNotified: "Action confirmée",
					Transmission: "Alerte transmise",
					TooLate: "Délai d'intervention dépassé",
					Accepted: "Prise en charge confirmée",
					NotFound: "Intervention terminée (Introuvable)",
					Found: "Récupération effectuée"
				},
				Description: {
					CitizenReport: "Votre signalement est bien enregistré.\n\nComme aucune ville partenaire n'est encore active ici, une action manuelle est nécessaire pour que l'animal soit pris en charge.",
					CityNotified: "Vous nous avez indiqué avoir contacté un service tiers. Merci pour votre action déterminante pour le respect de l'animal et la propreté des lieux.",
					Transmission: (org_name: string) => `Votre signalement a été envoyé instantanément aux services de : ${org_name}. Ils sont désormais officiellement informés de la situation.`,
					TooLate: (org_name: string) => `Malheureusement, ${org_name} n'a pas donné suite à votre alerte après 7 jours. Animalert prend désormais le relais pour signaler ce manquement.\n\nNous vous prions de nous excuser pour l'inaction des services concernés, et vous confirmons qu'Animalert a pris le relais.`,
					Accepted: (org_name: string) => `Bonne nouvelle : un agent de ${org_name} a validé votre signalement. Une équipe est désormais planifiée pour intervenir sur les lieux.`,
					NotFound: (org_name: string) => `Les services de ${org_name} se sont rendus sur place mais n'ont pas pu retrouver l'animal. Le signalement est désormais clôturé. Merci tout de même pour votre vigilance.`,
					Found: (org_name: string) => `L'animal a été récupéré par les services de ${org_name}. Grâce à votre signalement, l'animal sera traité dignement et la zone est de nouveau sécurisée. Merci pour votre civisme !`
				},
				ContactCity: "Prévenir la mairie"
			},
			AsAgent: {
				InterventionDelayExceeded: "Délai d'intervention dépassé.",
				TooLate: "Vous n'avez pas accepté l'annonce dans un délais de 7 jours",
				NotHandledYet: "Cette annonce n'est pas encore traitée",
				NotHandledDescription: "En prenant en charge l'annonce vous vous engagez a vous rendre sur place dans un délais de 7 jours suivant le signalement.",
				YouHandleReport: "Vous êtes en charge de l'annonce",
				YouHandleActions: "Veuillez vous rendre sur place pour confirmer la présence de l'animal.\n\nPour les actions suivantes rendez vous en bas de l'annonce.",
				SomeoneElseHandleReport: "Un autre agent est déjà sur le coup",
				Archive: "Archiver",
				Archived: "Annonce archivée",
				HandleReport: "Prendre en charge l'annonce",
				FoundPet: "J'ai trouvé l'animal et il va être récupéré",
				NotFoundPet: "Je suis sur place et l'animal n'est pas présent",
				FoundPetRecord: (time_ago: string) => `Vous avez déclaré avoir trouvé l'animal ${time_ago}.`,
				NotFoundPetRecord: (time_ago: string) => `Vous avez déclaré avoir ne pas avoir trouvé l'animal ${time_ago}.`
			},
		},
		SeeLostPet: {
			LoadingPet: "Chargement de l'annonce...",
			LoadingError: "Il semblerait que cette annonce n'existe plus. Il est possible que l'auteur l'ait supprimée.",
			Edit: "Modifier",
			InformationsAbout: (petName: string) => `Informations concernant ${petName}:`,
			TestReportMessage: "Attention ceci est une annonce de test, cet animal n'est pas réellement en danger.",
			Lost: (plural: boolean, is_male: boolean) => `Perdu${is_male ? "" : "e"}${plural ? "s" : ""} `,
			FeedbackTitles: {
				why_denied: "Motif du refus",
				why_blocked: "Motif du blocage",
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
					microship: "puce électronique",
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
			EditModeWindowTitle: "Aperçu de mon annonce",
			ShareReport: {
				ShareButton: "Partager",
				Title: "Partager l'annonce",
				Description: (pet_name?: string) => `Chaque partage peut aider ${pet_name ? `à retrouver ${pet_name}` : "cet animal"}, personnalisez ci-dessous l'affiche à partager.`,
				Format: {
					story: "Format affiche / story"
				},
				Poster: {
					Default: {
						LostSpecie: (lost: string, specie: string) => `${specie} ${lost}`, // ex: chien perdu
						FoundSpecie: (found: string, specie: string) => `${specie} ${found}`, // ex: chien trouvé
						HelpUsFind: (pet_name: string) => `Aidez nous à retrouver ${pet_name}`,
						ContactTitle: "Pour toute information, veuillez contacter :",
						BeNotified: (pet_name: string, is_male: boolean) => `Soyez prévenus quand ${pet_name} sera retrouvé${is_male ? "" : "e"} avec Animalert`
					},
					InstagramStory: "Story Instagram",
					FacebookStory: "Story Facebook",
					Other: "Autre"
				}
			}
		},
		Organization: {
			Popup: {
				Website: "Site internet",
				Select: "Séléctionner"
			},
		},
	},
	Report: {
		Screen: "Urgences & Signalements",
		LostPetDescription: "Vous avez perdu votre animal ou souhaitez signaler une disparition ?",
		FoundPetDescription: "Vous avez trouvé un animal errant, blessé ou en danger ?",
		DeadPetDescription: "Vous avez trouvé un animal décédé ?",
		AccessContactInfos: {
			ContactOwner: "Contacter le propriétaire",
			ContactAuthor: "Contacter l'auteur de l'annonce",
			ShowInfos: "Afficher les informations",
			ShowInfosDescription: (mode: "access" | "share") => `En continuant, vous acceptez que pour éviter les dérives, l'accès aux informations ${mode == "access" ? "de contact du propriétaire" : "de partage"} soit enregistré, et consultable par l'auteur de l'annonce.`,
			Title: "Informations de contact",
			Description: "Voici le numéro de téléphone de l'auteur de l'annonce :",
			Copied: "copié"
		},
		ViewWhoAccessed: {
			Title: "Voir qui a consulté mon numéro",
			NoOneAccessed: "Personne n'a affiché à votre numéro.",
			TheyAccessed: "Ces personnes ont consulté votre numéro",
			AccessedNumber: (time_ago: string) =>`a affiché votre numéro ${time_ago}`,
			SharedReport: (time_ago: string) => `a partagé l'annonce ${time_ago}`
		},
		ContactInfos: {
			Title: "Contact",
			ShowMyNumber: "Afficher mon numéro lors du partage de l'annonce ?",
			ChooseOtherMethod: "Choisir un autre moyen de contact à afficher lors du partage de l'annonce",
			[contact_method.PHONE]: {
				name: "Téléphone",
				addTitle: "Ajoutez votre numéro de téléphone",
			},
			[contact_method.MAIL]: {
				name: "Adresse mail",
				addTitle: "Ajoutez votre adresse mail",
			},
			[contact_method.INSTAGRAM]: {
				name: "Instagram",
				addTitle: "Ajoutez votre @ instagram",
			}
		},
	},
	Discover: {
		Title: "Découvrir",
		LatestNews: "Dernières actualités",
		SupportUs: "Nous soutenir",
		SupportData: {
			JoinTitle: "Adhérez à Animalert !",
			WriteTitle: "Rédigez des articles pour WikiPaw",
			DrawTitle: "Dessinez pour Animalert",
			TalkTitle: "Aidez nous à traduire l'application",
			Try_appTitle: "Faites un retour sur l'application",
			LegalTitle: "Apportez un soutien juridique",
			ThanksTitle: "Parlez de nous :)"
		},
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
				"popup-closed-by-user": "Le captcha à été annulé, veuillez réessayer",
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
					thanks: "Remerciements",
					privacy: "Politique de confidentialité",
					tos: "Conditions d'utilisation"
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
						rateLimitMessage: "Vous avez envoyé beaucoup de messages récemment, une fois que nous les aurons tous lus vous pourrez en envoyer à nouveau !",
						defaultMessage: "Votre message n'a pas pu être envoyé pour une raison que nous ignorons, si le problème persiste, n'hésitez pas à nous contacter par mail: contact@animalert.app !"
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
						HurtPet: "🐱 blessé à proximité !",
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
					reportsNotification: "Si l'un d'entre eux est retrouvé, vous serez notifié.",
					reportsAccess: "Vous pouvez accéder à ces annonces à tout moment.",
					noSavedReport: "Aucune annonce sauvegardée pour le moment."
				},
				AccountScreen: {
					Title: "Compte",
					MyNumber: "Mon numéro",
				},
			}
		}
	},
	Pro: {
		Onboarding: {
			FormTitle: (org_name: string) => `Rejoindre l'équipe Animalert de ${org_name}`,
			FormSubmittedTitle: (user_name: string) => `C'est bon pour nous ${user_name} !`,
			CompleteForm: "Veuillez compléter les informations ci-dessous",
			ProMail: "Adresse Mail Professionelle",
			FormSend: "Formulare envoyé !",
			FormConfirmation: (org_name?: string) => `Votre demande d'accès a bien été transmise ${org_name ? `à ${org_name}` : ""} ! Vous recevrez une notification quand ils auront acceptés votre demande :)`,
			InvalidLink: "Lien invalide",
			InvalidLinkDescription: "Il semblerait que votre lien d'invitation soit invalide, si l'erreur persiste n'hésitez pas a contacter votre organisation.",
			EnablePro: "Activer mon accès",
			SendForm: "Envoyer"
		},
		Dashboard: {
			Hello: (user_name: string) => `Bonjour ${user_name}`,
			Staff: "Mes effectifs",
			Manager: (plural: boolean) => `Manager${plural ? "s" : ""}`,
			Agent: (plural: boolean) => `Agent${plural ? "s" : ""}`,
			InviteMember: "inviter un membre",
			NoValidationWaiting: (mode: "agent" | "manager" | "both") => `Aucun ${mode == "manager" || mode == "both" ? "manager" : ""}${mode == "both" ? " ou" : ""}${mode == "agent" || mode == "both" ? " agent" : ""} en attente de validation.`,
			RoleWaitingValidation: (role: string) => `${role} en attente de validation`, // ex role: Agents
			RoleAcceptedBy: (role: string, user_name: string) => `${role} acceptés par ${user_name}`,
			NoRoleAccepted: (role: string, user_name?: string) => `Aucun ${role} accepté${user_name ? `par ${user_name}` : ""}.`,
			MyOrganization: "Mon organisation",
			Show: "afficher",
			EditTitle: "Modifications",
			EditDescription: "Pour toute modification des informations de l'organisation veuillez contacter Animalert par mail : contact@animalert.app",
			Agents: {
				LiveReports: (own_reports: boolean) => `${own_reports ? "Mes a" : "A"}nnonces en cours`,
				EverythingDone: "Toutes les annonces ont déjà été traitées !",
				AvailableReports: "Annonces a traiter"
			},
		},
		InviteAgents: {
			Title: "Inviter des agents",
			InviteAgentsOrManagersTitle: (and_managers: boolean) => `Inviter un agent${and_managers ? " ou un manager" : ""}`,
			InviteAgentsOrManagersDescription: (and_managers: boolean) => `Vous pouvez copier le lien ci-dessous permettant d'inviter un agent${and_managers ? " ou un manager" : ""} à rejoindre votre équipe.`,
			LinkFor: (role: string) => `Lien pour les ${role}`,
			CopyLink: "Copier le lien",
			Warning: "Attention",
			WarningDescription: "Il est possible que des personnes extérieures à votre organisation tentent de la rejoindre, vérifiez bien les numéros de téléphone des profils lorsqu'ils rejoignent."
		},
		AgentProfile: {
			ProfileOf: (user_name: string) => `Profil de ${user_name}`,
			FirstName: "Prénom",
			LastName: "Nom",
			JoinedAt: "À rejoint",
			Revoke: "Révoquer l'accès",
			AskedAt: "Accès demandé",
			Accept: "accepter",
			Deny: "refuser"
		},
		Organizations: {
			SearchingForPartners: "Recherche de partenaires d'Animalert en cours...",
			NoPartners: "Aucun partenaire d'Animalert trouvé à proximité.",
			NoMorePartners: "Tous les partenaires d'Animalert à proximité sont ci-dessus"
		},
	},
	Notifications: {
		AppUpdate: {
			title: "Nouvelle version disponible !",
			body: (version: string) => `Mettez l'application à jour pour bénéficier de la version ${version} !`
		},
		LostPetFound: {
			title: (specie: string, is_male: boolean) => `${getEmoji(specie)} retrouvé${is_male ? "" : "e"} !`,
			body: (pet_name: string, is_male: boolean) => `${pet_name} a été retrouvé${is_male ? "" : "e"} aujourd'hui par ses propriétaires :)`
		},
		NewLostPetReport: {
			title: (specie: string, is_male: boolean) => `${getEmoji(specie)} déclaré${is_male ? "" : "e"} perdu${is_male ? "" : "e"} !`,
			body: (pet_name: string, is_male: boolean, placeID: userPlace["id"], place_name: string) => `${pet_name} a été déclaré${is_male ? "" : "e"} perdu${is_male ? "" : "e"} à proximité de ${
				placeID == "user" ? "vous" : `${place_name}`
			}${placeID == "user" ? ", ouvrez l'œil" : ""} !`
		},
		NewFoundPetReport: {
			title: (specie: string) => `${getEmoji(specie)} trouvé.e à proximité !`,
			body: (pet_name: string, is_injured: boolean, placeID: userPlace["id"], place_name: string) => `${pet_name} a été déclaré.e trouvé.e ${is_injured ? "et blessé.e" : ""} à proximité de ${placeID == "user" ? "vous" : `${place_name}`}${placeID == "user" ? ", ouvrez l'œil" : ""} !`
		},
		NewDeadPetReport: {
			title: "Animal déclaré décédé",
			body: (pet_name: string, day: string, hour: string) => `${pet_name} a été déclaré décédé le ${day} à ${hour}, à vous de prendre en charge l'annonce.`
		},
		PetFoundNowSafe: {
			title: (pet_name: string) => `${pet_name} est en sécurité !`,
			body: (pet_name: string) => `${pet_name} est désormais en sécurité, et c'est en partie grace à vous, merci pour votre vigilance !`
		},
		PetDeadAround: {
			title: (specie: string) => `${getEmoji(specie)} décédé trouvé.e à proximité`,
			body: (pet_name: string, placeID: userPlace["id"], place_name: string) => `${pet_name} a été déclaré.e décédé à proximité de ${placeID == "user" ? "vous" : `${place_name}`}.`
		},
		ReportDenied: {
			title: "Annonce refusée par un modérateur !",
			body: (pet_name: string) => `L'annonce concernant le signalement de ${pet_name} a été refusée.`
		},
		ReportApproved: {
			title: "Votre annonce est en public !",
			body: (pet_name: string, _is_male: boolean) => `Tous les utilisateurs se trouvant à proximité de ${pet_name} ont étés notifiés de sa disparition !`,
			bodyNotLost: (pet_name: string, _is_male: boolean) => `Tous les utilisateurs se trouvant à proximité de ${pet_name} ont étés notifiés de votre signalement !`
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
		All: "Tous",
		You: "Vous",
		Next: "Suivant",
		Error: "Erreur",
		Cancel: "Annuler",
		Confirm: "Confirmer",
		LoadMore: "Charger plus",
		PressLoadMore: "Cliquez sur « Charger plus » pour charger les éléments.",
		Apply: "Appliquer",
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

import { pet_status } from "../types/enums";
import { userPlace } from "../types/types";
import { getEmoji } from "../utils/utils";


export const it = {
	AppNavigation: {
		ScreensTitles: {
			AddLostPetScreen: "Segnala un animale smarrito",
			EditPlaceScreen: "Luogo della scomparsa"
		}
	},
	Map: {
		Wrapper: {
			GeolocationErrorCustomMessages: {
				1: {
					title: "Autorizzazione negata",
					message: "Hai negato l'accesso ai servizi di localizzazione. Vai alle impostazioni e ricarica l'app per riprovare."
				},
				2: {
					title: "Posizione non disponibile",
					message: "Impossibile recuperare la posizione. Ricarica l'app o contatta l'assistenza se l'errore persiste."
				},
				3: {
					title: "Timeout",
					message: "La richiesta di posizione è scaduta. Clicca il pulsante qui sotto per riprovare o ricarica l'app."
				}
			},
			FallBackErrorTitle: "Errore",
			FallBackErrorMessage: "Si è verificato un errore, riprova, riavvia l'app o contatta l'assistenza se il problema persiste.",
			FallBackErrorButtonText: "Riprova",
			WaitingUser: "Connessione ad Animalert...",
			LoggedOutErrorTitle: "Sei disconnesso!",
			LoggedOutErrorMessage: "Accedi per utilizzare tutte le funzionalità di Animalert.",
			LoggedOutErrorButtonContent: "Vai al login",
			GoToSettings: "Vai alle impostazioni"
		},
		Screen: {
			LoadingPosition: "Caricamento posizione...",
			LoadingLostsPets: "Ricerca di animali smarriti intorno a te...",
			ErrorSearchingPets: "Si è verificato un errore durante la ricerca di animali smarriti nell'area.",
			TryAgain: "Riprova?",
			AnyAnimalAround: (petsInRadius: number) => {
				return (`${petsInRadius == 0 ? "Nessun" : petsInRadius} ${petsInRadius == 1 ? "animale" : "animali"} nei dintorni`)
			},
			NearTo: (place_id: userPlace["id"], place_name?: string) => `vicino a ${place_id == "user" ? "te" : place_name}`,
			Filters: {
				Title: "Filtri",
				FiltersDescription: "Seleziona le segnalazioni da mostrare in base ai filtri.",
				ReportType: "Tipo di segnalazione",
				LostPets: "Animali smarriti",
				FoundPets: "Animali ritrovati"
			},
		},
		AddLostPet: {
			AdUploadError: "Si è verificato un errore durante il caricamento della segnalazione, riprova",
			PetAddPpButton: "Scegli un'immagine",
			PetNamePlaceholder: "Nome dell'animale",
			ChooseXPicsOfPet: (x: number, maxPics: number, petName: string) => `Scegli ${x}/${maxPics} foto  ${petName ? `di ${petName}` : "del tuo animale"}.`,
			AddPicturesButton: "Aggiungi foto",
			PetDescriptionPlaceholder: "Inserisci qui la descrizione dettagliata dell'animale...",
			AddLostPlace: (petName: string) => `Aggiungi il luogo in cui ${petName ? petName : "il tuo animale"} è scomparso.`,
			EditPlace: "Modifica luogo",
			EditReport: "Modifica la mia segnalazione",
			UploadAd: "Pubblica segnalazione",
			UpdateAd: "Aggiorna segnalazione",
			Delete: "Elimina",
			AdDeleted: "Segnalazione eliminata",
			AdDeletedSuccessfully: "La segnalazione è stata eliminata con successo.",
			AdDeleteError: "Si è verificato un errore durante l'eliminazione della segnalazione, riprova",
			LostDate: "Data della scomparsa",
			SpeciePlaceholder: "gatto, cane",
			AgePlaceholder: "4 anni",
			SelectGalleryImages: {
				NoLibrairyPermission: "Animalert non ha accesso alla tua galleria, consenti l'accesso per continuare.",
				UnknownError: "Animalert non è riuscita ad accedere alla galleria, riprova o facci sapere se il problema persiste.",
				PermissionName: "Accesso alla galleria",
				GoToSettings: "Vai alle impostazioni"
			},
			Popup: {
				NewReport: {
					SendingState: {
						title: "Caricamento...",
						message: (petName: string, uploadPercentage: number) => `Avanzamento del caricamento della segnalazione di ${petName}: ${uploadPercentage}%.`,
					},
					DoneState: {
						title: "Segnalazione pubblicata",
						message: (is_new: boolean) => `Procederemo a una verifica della segnalazione${is_new ? "" : " e dei suoi aggiornamenti"}. Ti avviseremo non appena sarà visibile agli altri utenti.`,
					}
				},
				UpdateReport: {
					SendingState: {
						title: "Aggiornamento in corso...",
					},
					DoneState: {
						title: "Segnalazione aggiornata",
					}
				},
				ErrorState: {
					rateLimitMessage: "Hai inviato molte segnalazioni di recente; potrai inviarne di nuove non appena le avremo esaminate tutte!",
					defaultMessage: "La tua segnalazione non può essere inviata per un motivo sconosciuto. Se il problema persiste, non esitare a contattarci via e-mail: contact@animalert.app!"
				},
				ReportUploadedMessage: (petName: string) => `L'annuncio della scomparsa di ${petName}`,
				ReportUploadedMessageEdit: "è stato aggiornato con successo.",
				ReportUploadedMessageNoEdit: "è stato pubblicato con successo."
			},
			EssentialsKeysAlerts: {
				name: {
					title: "Nome",
					content: "Devi inserire il nome del tuo animale."
				},
				images_files: {
					title: "Foto",
					content: "Devi aggiungere almeno una foto grande del tuo animale."
				},
				lat: {
					title: "Posizione",
					content: "Devi indicare il luogo in cui hai perso il tuo animale."
				},
				lng: {
					title: "Posizione",
					content: "Devi indicare il luogo in cui hai perso il tuo animale."
				},
				description: {
					title: "Descrizione",
					content: "Devi scrivere una descrizione dettagliata del tuo animale."
				},
				age: {
					title: "Età",
					content: "Devi indicare l'età del tuo animale."
				},
				type: {
					title: "Specie",
					content: "Devi indicare la specie del tuo animale."
				}
			},
			ImageSizeError: {
				title: "Immagine troppo grande",
				message: (image_index: number) => `La tua immagine n.${image_index} è troppo grande, compriminala o scegli un'altra foto.`
			}
		},
		SeeFoundPet: {
			Found: (plural: boolean, is_male: boolean) => `Ritrovat${!plural && is_male ? "o" : ""}${!plural && !is_male ? "a" : ""}${plural && is_male ? "i" : ""}${plural && !is_male ? "e" : ""} `
		},
		SeeLostPet: {
			LoadingPet: "Caricamento della segnalazione...",
			Edit: "Modifica",
			InformationsAbout: (petName: string) => `Informazioni su ${petName}:`,
			TestReportMessage: "Attenzione: questa è una segnalazione di test; questo animale non è realmente in pericolo.",
			Lost: (_plural: boolean, _is_male: boolean) => "Smarrito ",
			FeedbackTitles: {
				why_denied: "Motivo del rifiuto",
				why_blocked: "Motivo del blocco",
				improvements: "Possibili miglioramenti",
				message: "Messaggio di Animalert",
				testing: "Segnalazione beta"
			},
			StatusMessages: {
				[pet_status.APPROVED]: (pet_name: string) => `La segnalazione di ${pet_name} è online e gli utenti possono vederla nell'app`,
				[pet_status.FOUND]: (pet_name: string) => `La segnalazione di ${pet_name} non è più visibile sulla mappa; gli utenti che l'hanno salvata saranno avvisati del ritrovamento`,
				[pet_status.WAITING_APPROVAL]: (pet_name: string) => `La segnalazione di ${pet_name} sarà pubblicata non appena approvata da un moderatore.`,
				updated: (pet_name: string) => `La segnalazione di ${pet_name} è online. I tuoi aggiornamenti saranno pubblicati non appena un moderatore li avrà approvati.`,
				[pet_status.DELETED]: (pet_name: string) => `La segnalazione di ${pet_name} è stata rimossa, quindi solo tu puoi vederla.`,
				[pet_status.DENIED]: (pet_name: string) => `La segnalazione di ${pet_name} è stata rifiutata, quindi solo tu puoi vederla`
			},
			Categories: {
				keys: {
					specie: "specie",
					breed: "razza",
					age: "età",
					gender: "sesso",
					castratedSterilized: "castrato/sterilizzato",
					microship: "microchip",
					is_testing: "Questa è una segnalazione di test?",
					is_owner: "Sei il proprietario dell'animale?"
				},
				values: {
					species: (specie: string) => {
						switch (specie) {
								case "cat":
										return "gatto";
								case "dog":
										return "cane";
								default:
										return (specie);
						}
					},
					age: (age: number, is_years: boolean) => `${Math.abs(age)} ${is_years ? "anni" : "mesi"}`,
					genderMale: "maschio",
					genderFemale: "femmina",
				}
			},
			YouWillBeNotified: (pet_name: string, _is_male: boolean) => `Ti avviseremo quando ${pet_name} verrà ritrovato`,
			NotifyMe: (pet_name: string, _is_male: boolean) => `Avvisami quando ${pet_name} verrà ritrovato`,
			IFoundPet: (pet_name: string) => `Ho ritrovato ${pet_name}`,
			EditModeWindowTitle: "Anteprima della mia segnalazione",
			ShareReport: {
				ShareButton: "Condividi",
				Title: "Condividi la segnalazione",
				Description: (pet_name?: string) => `Ogni condivisione può aiutare ${pet_name ? `a trovare ${pet_name}` : "questo animale"}: personalizza il poster da condividere qui sotto.`,
				Format: {
					story: "Formato poster/storia"
				},
				Poster: {
					Default: {
						HelpUsFind: (pet_name: string) => `Aiutaci a trovare ${pet_name}, per favore`,
						ContactTitle: "Hai informazioni? Contatta:",
						BeNotified: (pet_name: string, _is_male: boolean) => `Ricevi una notifica quando ${pet_name} verrà ritrovato con Animalert`
					},
					InstagramStory: "Storia Instagram",
					FacebookStory: "Storia Facebook",
					Other: "Altro"
				}
			}
		}
	},
	Discover: {
		MakeADonation: "Fai una donazione",
		PatchNoteScreen: {
			Title: "Dettagli versione",
			OverScrollText: "Scritto e mantenuto da Wayan NEEL 🚀"
		},
	},
	User: {
		Screen: {
			TitleAccount: "Account",
			MyAdsTitle: "Le mie segnalazioni",
			LogOut: "Esci",
			SettingsBottomVersion: "versione beta",
			LoadingMessage: "Caricamento delle tue segnalazioni...",
			NoAdsMessage: "Nessuna segnalazione online",
			PublishReport: "Pubblica una segnalazione",
			ProfileSettings: "impostazioni",
			EditPlace: {
				WindowTitle: "Modifica un luogo",
				ComeBackToPosition: "Torna alla posizione attuale",
				LoadingUserPosition: "Caricamento della tua posizione...",
				Save: "Salva",
				HomeDefaultName: "Casa",
				WorkDefaultName: "Lavoro",
				FavDefaultName: "Aggiungi un luogo",
				PermanentWarning: "Avvisi sempre attivi",
				AddPermanentWarningDescription: "Aggiungi i luoghi che frequenti regolarmente per essere informato direttamente sugli avvisi."
			},
		},
		LoginRegister: {
			DefaultPhoneLocale: "+39",
			InvalidPhoneNumber: "Numero di telefono non valido.",
			OTPSent: "Il codice di verifica è stato inviato al tuo telefono.",
			SuccessfulAuth: "Autenticazione tramite telefono riuscita 👍",
			Error: "Errore",
			WaitingUserMessage: "Connessione in corso...",
			SendingSms: "Ti stiamo inviando un SMS...",
			ScreenTitle: "Accedi ad Animalert",
			PhoneNumberInputContent: "Numero di telefono",
			PhoneNumberButtonContent: "Invia codice di verifica",
			OTPInputContent: "Codice di verifica",
			OTPButtonContent: "Conferma codice",
			GoBack: "Torna indietro",
			authErrors: {
				"invalid-phone-number": "Numero di telefono non valido",
				"too-many-requests": "È stato raggiunto il numero massimo di tentativi di accesso; riprova più tardi o contattaci.",
				"invalid-verification-code": "Il codice di verifica non è valido, riprova.",
				"code-expired": "Il codice di verifica è scaduto, riprova.",
				"missing-client-identifier": "Non riusciamo a convalidare l'integrità del tuo dispositivo; riavvia l'app o contattaci.",
				"popup-closed-by-user": "Il captcha è stato annullato, riprova",
				"user-disabled": "Sei stato bannato dall'organizzazione Animalert e da tutte le sue funzionalità."
			},
		},
		Settings: {
			AppSettings: {
				Blocs: {
					savedReports: "Segnalazioni salvate",
					lang: "Lingua",
					langEmoji: "🇮🇹",
					notif: "Notifiche",
					rateUs: "Valuta l'app",
					writeUs: "Scrivici",
					bugReport: "Segnala un bug",
					security: "Sicurezza e privacy",
					thanks: "Ringraziamenti"
				},
				WriteUsScreen: {
					OverScrollText: "Grazie in anticipo per il tuo messaggio 😻",
					IntroTitle: "Vuoi contattarci?",
					IntroDescription: "Domande, feedback, intervista o semplice curiosità? Sei nel posto giusto!\n\nSe desideri una risposta, lascia i tuoi recapiti.\nCercheremo di risponderti il prima possibile 😉",
					TextInputPlaceholder: "Il tuo messaggio",
					SendMessageButton: "Invia il mio messaggio",
					SendingState: {
						title: "Il postino è in viaggio...",
						message: "il tuo messaggio è in invio",
						ButtonText: "Invio in corso..."
					},
					DoneState: {
						title: "Fatto!",
						message: "Grazie per il tuo messaggio. Lo abbiamo ricevuto e lo leggeremo con molta attenzione molto presto ☺️",
						ButtonText: "Torna alle impostazioni"
					},
					ErrorState: {
						title: "Si è verificato un errore",
						rateLimitMessage: "Hai inviato molti messaggi di recente; potrai inviarne di nuovi non appena li avremo letti tutti!",
						defaultMessage: "Il tuo messaggio non può essere inviato per un motivo sconosciuto. Se il problema persiste, non esitare a contattarci via e-mail: contact@animalert.app!"
					}
				},
				BugReportScreen: {
					OverScrollText: "Lo risolveremo nella prossima versione",
					IntroTitle: "Hai trovato un bug?",
					IntroDescription: "Sei nel posto giusto per segnalarlo!\n\nSe possibile, allega uno screenshot del problema.\n\nFai anche uno screenshot delle informazioni qui sotto per aiutarci a risolverlo :)",
					ContactText: "Scegli il metodo di contatto che preferisci:",
					Mail: "email",
					Thanks: "Ti ringraziamo in anticipo per il tuo feedback, che ci aiuterà a migliorare continuamente l'applicazione"
				},
				NotificationsScreen: {
					title: "Notifiche",
					OverScrollText: "Selezionale tutte!",
					IntroDescription: "Personalizza le opzioni di notifica; invieremo solo ciò che è necessario 😉",
					GoToHistory: "Notifiche ricevute in precedenza",
					RingTypes: {
						LostPet: "🐶 smarrito nelle vicinanze!",
						HurtPet:  "🐱 ferito nelle vicinanze!",
						OwnAdsUpdate: "La tua segnalazione è stata pubblicata!",
						News: "Nuova versione disponibile!",
						Funding: "Lancio di una campagna di raccolta fondi!",
						Testing: "🧪 - 🐶 smarrito nelle vicinanze! (notifiche beta)"
					}
				},
				NotificationHistoryScreen: {
					title: "Notifiche passate",
					OverScrollText: "non facciamo mai spam :)",
					NoNotifHistory: "Nessuna notifica ricevuta",
					SendAt: (date: string) => `Inviato il ${date} alle `
				},
				LanguageScreen: {
					title: "Lingua",
					SelectedLangTitle: "Lingua selezionata: ",
					LanguagesSearchInput: "Cerca una lingua",
					LanguagesListTitle: "Elenco delle lingue disponibili:",
					EmptyResultText: "Nessun risultato trovato.\n\nSe la lingua che cerchi non è disponibile, non esitare a contribuire!",
					HelpTranslation: "Aiutaci a tradurre!",
				},
				SavedReportsScreen: {
					loadingSavedReports: "caricamento segnalazioni salvate...",
					overScrollText: "Non dimenticarli: contano su di te, e anche noi",
					title: "Trova qui le tue segnalazioni salvate",
					reportsNotification: "se una di queste viene ritrovata, verrai avvisato.",
					reportsAccess: "puoi accedere a queste segnalazioni in qualsiasi momento.",
					noSavedReport: "Nessuna segnalazione salvata al momento."
				},
			}
		}
	},
	Notifications: {
		AppUpdate: {
			title: "Nuova versione disponibile!",
			body: (version: string) => `Aggiorna l'app per usufruire della versione ${version}!`
		},
		LostPetFound: {
			title: (specie: string, _is_male: boolean) => `${getEmoji(specie)} ritrovato!`,
			body: (pet_name: string, _is_male: boolean) => `${pet_name} è ${_is_male ? "stato riunito" : "stata riunita"} oggi ai suoi proprietari :)`
		},
		PetLostAround: {
			title: (_specie: string, _is_male: boolean) => `smarrito nelle vicinanze!`,
			body: (pet_name: string, _is_male: boolean) => `${pet_name} è ${_is_male ? "stato segnalato" : "stata segnalata"} come ${_is_male ? "smarrito" : "smarrita"} vicino a te, fai attenzione!`,
		},
		NewPetReport: {
			title: (specie: string, _is_male: boolean) => `${getEmoji(specie)} segnalato come smarrito!`,
			body: (pet_name: string, _is_male: boolean, placeID: userPlace["id"], place_name: string) => `${pet_name} è ${_is_male ? "stato segnalato" : "stata segnalata"} come ${_is_male ? "smarrito" : "smarrita"} ${
				placeID == "user" ? "vicino a te" : `nei pressi di ${place_name}`
			}${placeID == "user" ? ", fai attenzione" : ""}!`
		},
		ReportDenied: {
			title: "Segnalazione rifiutata da un moderatore!",
			body: (pet_name: string) => `La segnalazione della scomparsa di ${pet_name} è stata rifiutata.`
		},
		ReportApproved: {
			title: "La tua segnalazione è stata pubblicata!",
			body: (pet_name: string, is_male: boolean) => `Tutti gli utenti nell'area intorno a ${pet_name} saranno avvisati della ${is_male ? "sua" : "sua"} scomparsa!`,
		}
	},
	Popup: {
		UpdateAvailable: {
			title: "Nuova versione disponibile",
			description: "Devi aggiornare Animalert per continuare!",
			buttonText: "aggiorna!",
		},
		WelcomeToVersion: {
			title: "Nuova versione",
			description: (version_name: string) => `Benvenuto nella versione ${version_name} di Animalert!`,
			buttonText: "Scopri le novità!",
		},
	},
	Commons: {
		Ok: "Ok",
		No: "No",
		Yes: "Sì",
		You: "Tu",
		Error: "Errore",
		Cancel: "Annulla",
		Confirm: "Conferma",
		Apply: "Applica",
		Close: "Chiudi",
		ErrorOccuredPeaseRetry: "Si è verificato un errore, riprova.",
		CantLoadImage: "l'immagine non può essere caricata",
		PleaseWait: "attendi",
		Now: "ora",
		TimeAgo: (time_amount: string) => `${time_amount} fa`,
		Day: "giorno",
		Days: "giorni"
	},
	data: {
		name: "Italiano",
		flag: "🇮🇹"
	}
} as const;

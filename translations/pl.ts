import { contact_method, pet_report_steps, pet_status, share_format } from "../types/enums";
import { userPlace } from "../types/types";
import { Platform } from "../utils/utils";

export const pl = {
	AppNavigation: {
		ScreensTitles: {
			AddLostPetScreen: "Zgłoś zaginione zwierzę",
			AddFoundPetScreen: "Zgłoś znalezione zwierzę",
			AddDeadPetScreen: "Zgłoś martwe zwierzę",
			EditPlaceScreen: "Miejsce zaginięcia"
		}
	},
	Map: {
		Wrapper: {
			GeolocationErrorCustomMessages: {
				1: {
					title: "Odmowa dostępu",
					message: "Animalert nie ma dostępu do Twojej lokalizacji. Włącz dostęp do lokalizacji w ustawieniach i zrestartuj aplikację, aby spróbować ponownie."
				},
				2: {
					title: "Aktualna pozycja niedostępna",
					message: Platform.OS == "android" ? "Nie udało się pobrać Twojej lokalizacji. Sprawdź sygnał GPS oraz połączenie internetowe. Czy funkcja lokalizacji jest włączona ?" : "Nie udało się pobrać Twojej lokalizacji. Sprawdź sygnał GPS oraz połączenie internetowe."
				},
				3: {
					title: "Nieaktualna lokalizacja",
					message: "Urządzenie nie może udostępnić lokalizacji. Zrestartuj aplikację lub skontaktuj się z pomocą techniczną, jeśli problem nie ustąpi."
				}
			},
			FallBackErrorTitle: "Błąd",
			FallBackErrorMessage: "Wystąpił błąd. Spróbuj ponownie lub zrestartuj aplikację. Jeśli problem nie ustąpi, skontaktuj się z nami.",
			FallBackErrorButtonText: "Spróbuj ponownie",
			WaitingUser: "Łączenie...",
			LoggedOutErrorTitle: "Zostałeś/aś wylogowany/a",
			LoggedOutErrorMessage: "Zaloguj się, aby uzyskać dostęp do wszystkich funkcji Animalert.",
			LoggedOutErrorButtonContent: "Zaloguj się",
			GoToSettings: "Ustawienia"
		},
		Screen: {
			LoadingPosition: "Pobieranie lokalizacji...",
			LoadingLostsPets: "Wyszukiwanie zaginionych zwierząt w pobliżu...",
			NoPetsAround: (report_type: string, place_id: userPlace["id"], place_name: string) => place_id == "user" ? `Nie znaleziono ${report_type} zwierząt w pobliżu !` : `Nie znaleziono ${report_type} zwierząt w pobliżu ${place_name} !`,
			ErrorSearchingPets: "Błąd wyszukiwania zwierząt w pobliżu.",
			TryAgain: "Spróbować ponownie ?",
			AnyAnimalAround: (petsInRadius: number) => (petsInRadius == 0 ? "Nie znaleziono zwierząt w pobliżu" : `${petsInRadius} ${petsInRadius > 1 ? "Zwierzęta" : "Zwierzę"} w pobliżu`),
			NearTo: (place_id: userPlace["id"], place_name?: string) => place_id == "user" ? "w pobliżu" : `w pobliżu... ${place_name}`,
			Filters: {
				Title: "Filtry",
				FiltersDescription: "Filtruj ogłoszenia, aby wybrać te, które chcesz wyświetlić.",
				ReportType: "Typ ogłoszeń",
				LostPets: "Zaginione zwierzęta",
				FoundPets: "Znalezione zwierzęta",
				DeadPets: "Martwe zwierzęta",
				AllPets: "Wszystkie zwierzęta"
			}
		},
		AddDeadPet: {
			FoundDate: "Kiedy znalaziono zwierzę ?",
			StepHeaderTitle: {
				[pet_report_steps.INFOS]: "Informacje ",
				[pet_report_steps.PLACE]: "Lokalizacja zwierzęcia",
				[pet_report_steps.EXTRA_INFOS]: "Dodatkowe informacje ",
				[pet_report_steps.REVIEW]: "Publikacja"
			},
			PlaceSection: {
				SupportTitle: "Przyjęcie",
				ZoneCovered: "Zasięg: Szybka interwencja.",
				ZoneNotCovered: "Poza zasięgiem: Zgłoszenie społeczne.",
				AreaResponsible: "Zarządca terenu",
				GuaranteeSupport: "Dla zapewnienia pomocy.",
				NoPartnerMatch: "Żaden z powyższych partnerów nie pasuje.",
				SelectPartnerAlert: "Wybierz partnera",
				WhyChoose: {
					title: "Dlaczego warto wybrać ?",
					content: "Zakres interwencji ograniczony do danego obszaru."
				}
			},
			CitizenReport: {
				title: "Alert obywatelski",
				description: "Brak aktywnych partnerów Animalert w tej lokalizacji. Zapiszemy Twoje zgłoszenie, a w następnym kroku wyświetlimy numery alarmowe."
			},
			Popup: {
				NewReport: {
					DoneState: {
					message: (has_city: boolean, city_name?: string) => has_city ? `Dziękujemy za zgłoszenie. Zostało ono przekazane do służb w ${city_name}. Ogłoszenie zostanie sprawdzone, a ${city_name} skontaktuje się z Tobą w razie potrzeby.` : `Dziękujemy za zgłoszenie. Te informacje są cenne: pozostają w naszej bazie danych. Dzięki niemu właściciel może odnaleźć ślad zaginionego zwierzaka.`
					}
				},
				ReportUploadedMessage: (petName: string) => `Ogłoszenie dotyczące śmierci ${petName}`
			}
		},
		AddFoundPet: {
			PetNamePlaceholder: "Gatunek zwierzęcia",
			TheAnimal: "zwierzę",
			FoundDate: "Data znalezienia zwierzęcia",
			PetDescriptionPlaceholder: "Wpisz tutaj wszystko, co może pomóc w identyfikacji lub zgłoszeniu.",
			Popup: {
				ReportUploadedMessage: (petName: string) => `Ogłoszenie informujące, że ${petName} zostało znalezione`
			}
		},
		AddLostPet: {
			AdUploadError: "Błąd publikacji. Prosimy spróbować ponownie",
			PetAddPpButton: "Wybierz zdjęcie",
			PetNamePlaceholder: "Imię Twojego zwierzęcia",
			ChooseXPicsOfPet: (x: number, maxPics: number, petName: string) => `Wybierz ${x}/${maxPics} zdjęć ${petName || "Twojego zwierzaka"}.`,
			AddPicturesButton: "Dodaj zdjęcia",
			PetDescriptionPlaceholder: "Dodaj szczegółowy opis Twojego zwierzęcia...",
			AddLostPlace: (petName?: string) => `Dodaj miejsce zaginięcia ${petName || "zwierzaka"}.`,
			AddFoundPlace: () => `Dodaj miejsce znalezienia zwierzęcia.`,
			EditPlace: "Zmień lokalizację",
			EditReport: "Zmień ogłoszenie",
			UploadAd: "Opublikuj",
			UpdateAd: "Zaktualizuj",
			Delete: "Usuń ogłoszenie",
			AdDeleted: "Ogłoszenie usunięte",
			AdDeletedSuccessfully: "Ogłoszenie zostało usunięte.",
			AdDeleteError: "Błąd usuwania. Prosimy spróbować ponownie",
			LostDate: "Data zaginięcia",
			SpeciePlaceholder: "kot, pies",
			AgePlaceholder: "4 lata",
			CloseReport: {
				title: "Uwaga",
				description: "Wszystkie wprowadzane zmiany zostaną usunięte "
			},
			SelectGalleryImages: {
				NoLibrairyPermission: "Brak dostępu do galerii. Aby kontynuować, przyznaj odpowiednie uprawnienia w ustawieniach.",
				UnknownError: "Błąd dostępu do galerii. Spróbuj ponownie lub skontaktuj się z nami, jeśli problem nie ustąpi.",
				PermissionName: "Dostęp do galerii",
				GoToSettings: "Ustawienia"
			},
			Popup: {
				NewReport: {
					SendingState: {
						title: "Publikowanie...",
						message: (petName: string, uploadPercentage: number) => `Postęp publikowania ogłoszenia dotyczącego ${petName}: ${uploadPercentage}%.`
					},
					DoneState: {
						title: "Ogłoszenie opublikowane",
						message: (is_new: boolean, _?: string) => is_new ? `Ogłoszenie oczekuje na weryfikację. Zostaniesz powiadomiony, gdy zostanie zatwierdzone.` : `Trwa weryfikacja aktualizacji ogłoszenia. Zostaniesz powiadomiony po ich zatwierdzeniu.`
					}
				},
				UpdateReport: {
					SendingState: {
						title: "Aktualizacja..."
					},
					DoneState: {
						title: "Ogłoszenie zaktualizowane"
					}
				},
				ErrorState: {
					rateLimitMessage: "Wysłałeś/aś ostatnio dużo ogłoszeń. Możliwość dodawania kolejnych zostanie odblokowana po ich zweryfikowaniu ! ",
					defaultMessage: "Błąd wysyłania ogłoszenia. W razie dalszych problemów prosimy o kontakt mailowy : contact@animalert.app !"
				},
				ReportUploadedMessage: (petName: string) => `Ogłoszenie o zaginięciu ${petName}`,
				ReportUploadedMessageEdit: "zostało zaktualizowane.",
				ReportUploadedMessageNoEdit: "zostało opublikowane."
			},
			EssentialsKeysAlerts: {
				name: {
					title: "Imię",
					content: "Musisz podać imię swojego zwierzaka."
				},
				images_files: {
					title: "Zdjęcia",
					content: (found?: boolean) => found ? "Wymagane przynajmniej jedno zdjęcie zwierzaka." : "Wymagane przynajmniej jedno zdjęcie Twojego zwierzaka."
				},
				lat: {
					title: "Lokalizacja",
					content: (found?: boolean) => found ? "Musisz podać lokalizację, w której znaleziono zwierzę." : "Musisz podać miejsce zaginięcia swojego zwierzaka."
				},
				lng: {
					title: "Lokalizacja",
					content: (found?: boolean) => found ? "Musisz podać lokalizację, w której znaleziono zwierzę." : "Musisz podać miejsce zaginięcia swojego zwierzaka."
				},
				description: {
					title: "Dodatkowe informacje",
					content: (found?: boolean) => found ? "Podaj więcej szczegółów dotyczących sytuacji." : "Prosimy o podanie szczegółowego opisu swojego zwierzaka. "
				},
				age: {
					title: "Wiek",
					content: "Proszę podać wiek swojego zwierzaka."
				},
				type: {
					title: "Gatunek",
					content: "Musisz podać gatunek zwierzęcia."
				}
			},
			ImageSizeError: {
				title: "Plik jest za duży",
				message: (image_index: number) => `Rozmiar ${image_index} zdjęcia jest zbyt duży. Prosimy o skompresowanie pliku lub wybranie innego zdjęcia.`
			}
		},
		SeeFoundPet: {
			Found: (plural: boolean, is_male: boolean) => plural ? `Znalezione` : (is_male ? `Znaleziony` : `Znaleziona`),
			Categories: {
				keys: {
					know_owner: "Czy właściciel jest znany ?",
					can_walk: "Czy zwierzę może chodzić ?",
					is_awake: "Czy zwierzę jest przytomne ?",
					is_injured: "Czy zwierzę jest ranne ?",
					is_healthy: "Czy zwierzę wygląda na zdrowe? (poza obrażeniami)",
					is_agressive: "Czy zwierzę jest agresywne ?",
					did_pickup: "Czy zabrałeś/aś zwierzę ze sobą ?",
					bring_to_vet: "Czy zabierzesz zwierzę do weterynarza ?"
				},
				values: {
					injured: "Ranne",
					safe: "Z wyjątkiem",
					cant_walk: "Nie może chodzić",
					agressive: "Agresywne"
				}
			},
			NotifyMe: (pet_name: string, is_male: boolean) => is_male ? `Powiadom mnie, gdy ${pet_name} wróci do swojego rodziny` : `Powiadom mnie, gdy ${pet_name} wróci do swojej rodziny`,
			PetIsSafe: (pet_name: string) => `${pet_name} jest już bezpieczne `,
			Poster: {
				Default: {
					HelpUs: (pet_name: string) => `Potrzebujemy Twojej pomocy, aby pomóc ${pet_name}`,
					BeNotified: (pet_name: string) => `Otrzymaj powiadomienie, gdy ${pet_name} wróci do swojej rodziny dzięki Animalert`
				}
			}
		},
		SeeDeadPet: {
			NotifyMe: () => `Informuj mnie o postępach.`,
			Dead: (plural: boolean, is_male: boolean) => plural ? `Martwe` : (is_male ? `Martwy` : `Martwa`),
			Categories: {
				keys: {
					is_injured: "Czy zwierzę jest ranne ?",
					is_healthy: "Czy zwierzę wyglądało na zdrowe? (poza obrażeniami)",
					did_pickup: "Czy zabrałeś/aś zwierzę ze sobą ?"
				}
			},
			ContactCity: {
				title: "Skontaktuj się ze swoim miastem",
				YourCity: "Twoje miasto",
				CountryCapital: "Warszawa ",
				QueryPhone: "telefon",
				QueryTownHall: "urząd miasta",
				AccessPhone: "Uzyskaj numer",
				INotifiedCity: "Powiadomiłem/am urząd"
			},
			Show: "Pokaż",
			Hide: "Ukryj",
			ProInfos: {
				Assigned: "Przypisane",
				NonAssigned: "Nieprzypisane"
			},
			Timeline: {
				Title: {
					CitizenReport: "Zgłoszenie zarejestrowane (Poza strefą)",
					CityNotified: "Akcja potwierdzona",
					Transmission: "Alert przekazany",
					TooLate: "Przekroczono czas interwencji",
					Accepted: "Przejęcie potwierdzone",
					NotFound: "Interwencja zakończona (Nie znaleziono)",
					Found: "Odzyskiwanie zakończone"
				},
				Description: {
					CitizenReport: `Twoje zgłoszenie zostało zarejestrowane.\n\nPonieważ w tej okolicy nie ma jeszcze aktywnych miast partnerskich, wymagane jest ręczne działanie, aby zwierzę zostało przejęte.`,
					CityNotified: "Otrzymaliśmy informację o kontakcie z zewnętrznymi służbami. Dziękujemy za Twoje zaangażowanie, które jest kluczowe dla dobrostanu zwierząt oraz utrzymania porządku.",
					Transmission: (org_name: string) => `Twoje zgłoszenie zostało natychmiast przekazane do służb ${org_name}. Są one już oficjalnie poinformowane o sytuacji.`,
					TooLate: (org_name: string) => `Niestety, ${org_name} nie podjął działań w związku z Twoim zgłoszeniem w ciągu 7 dni. Aimalert przejmuje teraz sprawę, aby zgłosić to zaniedbanie. \n\nPrzepraszamy za brak reakcji ze strony odpowiednich służb i potwierdzamy, że od teraz to my zajmujemy się sprawą.`,
					Accepted: (org_name: string) => `Dobra wiadomość : Twoje zgłoszenie zostało zaakceptowane przez przedstawiciela ${org_name}. Zaplanowano już przyjazd ekipy na miejsce zdarzenia.`,
					NotFound: (org_name: string) => `Służby ${org_name} udały się na miejsce, ale nie odnalazły zwierzęcia. Zgłoszenie zostaje zamknięte. Dziękujemy za Twoją czujność.`,
					Found: (org_name: string) => `Zwierzę zostało odebrane przez służby ${org_name}. Dzięki Twojemu zgłoszeniu otrzyma ono godną opiekę, a okolica jest znów bezpieczna. Dziękujemy za Twoją postawę obywatelską!`
				},
				ContactCity: "Powiadom urząd"
			},
			AsAgent: {
				InterventionDelayExceeded: "Przekroczono czas interwencji.",
				TooLate: "Zgłoszenie nie zostało zaakceptowane w ciągu 7 dni",
				NotHandledYet: "To ogłoszenie oczekuje na rozpatrzenie.",
				NotHandledDescription: "Przyjmując to zgłoszenie, zobowiązujesz się do interwencji na miejscu w ciągu 7 dni.",
				YouHandleReport: "Zgłoszenie jest teraz pod Twoją opieką ",
				YouHandleActions: `Prosimy o udanie się na miejsce w celu potwierdzenia obecności zwierzęcia.\n\nDalsze działania znajdziesz na dole ogłoszenia.`,
				SomeoneElseHandleReport: "Inny agent już zajmuje się tą sprawą",
				Archive: "Zarchiwizuj",
				Archived: "Ogłoszenie zarchiwizowane",
				HandleReport: "Przyjmij zgłoszenie",
				FoundPet: "Znalazłem/am zwierzę i zostanie ono zabrane",
				NotFoundPet: "Jestem na miejscu. Nie odnaleziono zwierzęcia",
				FoundPetRecord: (time_ago: string) => `Zgłosiłeś/aś znalezienie zwierzęcia ${time_ago}.`,
				NotFoundPetRecord: (time_ago: string) => `Zgłosiłeś/aś, że nie znalazłeś/aś zwierzęcia ${time_ago}.`
			}
		},
		SeeLostPet: {
			LoadingPet: "Ładowanie ogłoszenia...",
			LoadingError: "Ogłoszenie nie istnieje. Mogło zostać usunięte przez autora.",
			Edit: "Edytuj",
			InformationsAbout: (petName: string) => `Informacje o ${petName} :`,
			TestReportMessage: "Uwaga : To jest ogłoszenie testowe. Zwierzę nie jest w niebezpieczeństwie.",
			Lost: (plural: boolean, is_male: boolean) => plural ? `Zaginione ` : (is_male ? `Zaginiony ` : `Zaginiona `),
			FeedbackTitles: {
				why_denied: "Powód odrzucenia",
				why_blocked: "Powód zablokowania",
				improvements: "Możliwe ulepszenia",
				message: "Wiadomość od Animalert",
				testing: "Ogłoszenie beta"
			},
			StatusMessages: {
				[pet_status.APPROVED]: (pet_name: string) => `Ogłoszenie dotyczące ${pet_name} zostało odrzucone. Tylko Ty możesz je zobaczyć`,
				[pet_status.FOUND]: (pet_name: string) => `Ogłoszenie dotyczące ${pet_name} zostało odrzucone. Tylko Ty możesz je zobaczyć`,
				[pet_status.WAITING_APPROVAL]: (pet_name: string) => `Ogłoszenie dotyczące ${pet_name} zostało odrzucone. Tylko Ty możesz je zobaczyć`,
				updated: (pet_name: string) => `Ogłoszenie ${pet_name} jest aktywne. Wprowadzone zmiany będą widoczne po zatwierdzeniu przez moderatora.`,
				[pet_status.DELETED]: (pet_name: string) => `Ogłoszenie dotyczące ${pet_name} zostało odrzucone. Tylko Ty możesz je zobaczyć`,
				[pet_status.DENIED]: (pet_name: string) => `Ogłoszenie dotyczące ${pet_name} zostało odrzucone. Tylko Ty możesz je zobaczyć`
			},
			Categories: {
				keys: {
					specie: "gatunek",
					breed: "rasa",
					age: "wiek",
					gender: "płeć",
					castratedSterilized: "wykastrowany/wysterylizowana",
					microship: "czip",
					is_testing: "Czy to jest ogłoszenie testowe ?",
					is_owner: "Czy jesteś właścicielem zwierzęcia ?"
				},
				values: {
					age: (age: number, is_years: boolean) => is_years ? `${Math.abs(age)} lat` : `${Math.abs(age)} miesięcy`,
					genderMale: "samiec",
					genderFemale: "samica"
				}
			},
			YouWillBeNotified: (pet_name: string, is_male: boolean) => is_male ? `Zostaniesz poinformowany/a, gdy ${pet_name} zostanie odnaleziony` : `Zostaniesz poinformowany/a, gdy ${pet_name} zostanie odnaleziona`,
			NotifyMe: (pet_name: string, is_male: boolean) => is_male ? `Powiadom mnie o znalezieniu ${pet_name}` : `Powiadom mnie o znalezieniu ${pet_name}`,
			IFoundPet: (pet_name: string) => `Znalazłem/am ${pet_name}`,
			EditModeWindowTitle: "Podgląd mojego ogłoszenia",
			ShareReport: {
				ShareButton: "Udostępnij",
				Title: "Udostępnij ogłoszenie",
				Description: (pet_name?: string) => pet_name ? `Każde udostępnienie może pomóc odnaleźć ${pet_name}.` : `Każde udostępnienie pomaga temu zwierzakowi. Spersonalizuj poniższą grafikę, aby ją udostępnić.`,
				FormatPrefix: "Format:",
				Format: {
					[share_format.POSTER_STORY]: "grafiki / story",
				},
				Poster: {
					Default: {
						LostSpecie: (lost: string, specie: string) => `${specie} ${lost}`, // ex: chien perdu
						FoundSpecie: (found: string, specie: string) => `${specie} ${found}`, // ex: chien trouvé
						HelpUsFind: (pet_name: string) => `Pomóż nam odnaleźć ${pet_name}`,
						ContactTitle: "W celu uzyskania informacji prosimy o kontakt z :",
						BeNotified: (pet_name: string, is_male: boolean) => is_male ? `Otrzymaj powiadomienie, gdy ${pet_name} zostanie odnaleziony dzięki Animalert` : `Otrzymaj powiadomienie, gdy ${pet_name} zostanie odnaleziona dzięki Animalert`
					},
					InstagramStory: "Story Instagram ",
					FacebookStory: "Story Facebook",
					Other: "Inne"
				}
			}
		},
		Organization: {
			Popup: {
				Website: "Strona internetowa",
				Select: "Wybierz"
			}
		}
	},
	Report: {
		Screen: "Alerty i Zgłoszenia",
		LostPetDescription: "Zgubiłeś/aś zwierzę lub chcesz zgłosić jego zaginięcie ?",
		FoundPetDescription: "Znalazłeś/aś bezdomne, ranne lub zagrożone zwierzę?",
		DeadPetDescription: "Znalazłeś/aś martwe zwierzę ?",
		AccessContactInfos: {
			ContactOwner: "Skontaktuj się z właścicielem",
			ContactAuthor: "Skontaktuj się z autorem ogłoszenia",
			ShowInfos: "Pokaż informacje",
			ShowInfosDescription: (mode: "access" | "share") => mode === "access" ? `Kontynuując, akceptujesz, że dostęp do kontaktu właściciela jest rejestrowany i widoczny dla autora ogłoszenia, aby zapobiec nadużyciom.` : `Kontynuując, akceptujesz, że historia udostępniania jest rejestrowana i widoczna dla autora ogłoszenia, aby zapobiec nadużyciom.`,
			Title: "Informacje kontaktowe",
			Description: "Numer kontaktowy autora ogłoszenia :",
			Copied: "skopiowano"
		},
		ViewWhoAccessed: {
			Title: "Sprawdź, kto wyświetlił Twój numer",
			NoOneAccessed: "Nikt jeszcze nie wyświetlił Twojego numeru.",
			TheyAccessed: "Te osoby wyświetliły Twój numer",
			AccessedNumber: (time_ago: string) =>`wyświetlił/a Twój numer ${time_ago}`,
			SharedReport: (time_ago: string) => `udostępnił/a ogłoszenie ${time_ago}`
		},
		ContactInfos: {
			Title: "Kontakt",
			ShowMyNumber: "Czy wyświetlić mój numer przy udostępnianiu ogłoszenia?",
			ChooseOtherMethod: "Wybierz preferowany sposób kontaktu",
			[contact_method.PHONE]: {
				name: "Telefon",
				addTitle: "Dodaj swój numer telefonu"
			},
			[contact_method.MAIL]: {
				name: "Adres a-mail",
				addTitle: "Dodaj swój adres e-mail"
			},
			[contact_method.INSTAGRAM]: {
				name: "Instagram",
				addTitle: "Dodaj swój @ na Instagramie"
			}
		}
	},
	Discover: {
		Title: "Odkrywaj",
		LatestNews: "Aktualności",
		SupportUs: "Wesprzyj nas",
		SupportData: {
			JoinTitle: "Dołącz do Animalert !",
			WriteTitle: "Pisz artykuły dla WikiPaw",
			DrawTitle: "Rysuj dla Animalert",
			TalkTitle: "Pomóż nam tłumaczyć aplikację",
			Try_appTitle: "Pomóż nam ulepszyć aplikację",
			LegalTitle: "Zapewnij wsparcie prawne",
			ThanksTitle: "Opowiedz o nas innym :)"
		},
		MakeADonation: "Przekaż darowiznę",
		PatchNoteScreen: {
			Title: "Szczegóły wersji",
			OverScrollText: "Napisane i utrzymywane przez Wayana NEEL 🚀"
		}
	},
	User: {
		Screen: {
			TitleAccount: "Konto",
			MyAdsTitle: "Moje ogłoszenia",
			LogOut: "Wyloguj się",
			SettingsBottomVersion: "wersja beta",
			LoadingMessage: "Ładowanie Twoich ogłoszeń...",
			NoAdsMessage: "Brak opublikowanych ogłoszeń",
			PublishReport: "Opublikuj ogłoszenie",
			ProfileSettings: "ustawienia",
			EditPlace: {
				WindowTitle: "Edytuj miejsce",
				ComeBackToPosition: "Wróć do aktualnej pozycji",
				LoadingUserPosition: "Pobieranie Twojej lokalizacji...",
				Save: "Zapisz",
				HomeDefaultName: "Dom",
				WorkDefaultName: "Praca",
				FavDefaultName: "Dodaj miejsce",
				PermanentWarning: "Automatyczne powiadomienia",
				AddPermanentWarningDescription: "Dodaj miejsca, które często odwiedzasz, aby otrzymywać powiadomienia o zgłoszeniach na żywo."
			}
		},
		LoginRegister: {
			DefaultPhoneLocale: "+48",
			InvalidPhoneNumber: "Nieprawidłowy numer telefonu.",
			OTPSent: "Kod weryfikacyjny został wysłany SMS-em.",
			SuccessfulAuth: "Logowanie przez telefon powiodło się 👍",
			Error: "Błąd",
			WaitingUserMessage: "Logowanie...",
			SendingSms: "Wysyłanie SMS-a...",
			ScreenTitle: "Zaloguj się do Animalert",
			PhoneNumberInputContent: "Numer telefonu",
			PhoneNumberButtonContent: "Wyślij kod weryfikacyjny",
			OTPInputContent: "Kod weryfikacyjny",
			OTPButtonContent: "Potwierdź kod",
			GoBack: "Wróć",
			authErrors: {
				"invalid-phone-number": "Podany numer telefonu jest nieprawidłowy",
				"too-many-requests": "Osiągnięto maksymalną liczbę prób logowania. Spróbuj ponownie później lub skontaktuj się z nami.",
				"invalid-verification-code": "Kod weryfikacyjny jest nieprawidłowy, spróbuj ponownie.",
				"code-expired": "Kod weryfikacyjny wygasł, zacznij od nowa.",
				"missing-client-identifier": "Nie możemy zweryfikować integralności Twojego urządzenia. Zrestartuj aplikację lub skontaktuj się z nami.",
				"popup-closed-by-user": "Captcha zostało anulowane, spróbuj ponownie.",
				"user-disabled": "Zostałeś/aś zablokowany/a w stowarzyszeniu Animalert i w jego różnych usługach."
			}
		},
		Settings: {
			AppSettings: {
				Blocs: {
					savedReports: "Zapisane ogłoszenia",
					lang: "Język",
					langEmoji: "🇵🇱",
					notif: "Powiadomienia",
					rateUs: "Oceń aplikację",
					writeUs: "Napisz do nas",
					bugReport: "Zgłoś błąd",
					security: "Prywatność i bezpieczeństwo",
					thanks: "Podziękowania",
					privacy: "Polityka prywatności",
					tos: "Warunki korzystania"
				},
				WriteUsScreen: {
					OverScrollText: "Z góry dziękujemy za wiadomość 😻",
					IntroTitle: "Chcesz się z nami skontaktować?",
					IntroDescription: `Masz pytanie, uwagę, propozycję wywiadu, czy po prostu jesteś ciekawy? Jesteś we właściwym miejscu !\n\nJeśli chcesz, abyśmy się z Tobą skontaktowali, zostaw swoje dane. Postaramy się odpowiedzieć jak najszybciej 😉`,
					TextInputPlaceholder: "Twoja wiadomość",
					SendMessageButton: "Wyślij wiadomość",
					SendingState: {
						title: "Listonosz jest w drodze...",
						message: "Twoja wiadomość jest wysyłana",
						ButtonText: "Wysyłanie ..."
					},
					DoneState: {
						title: "Dostarczono !",
						message: "Dziękujemy za wiadomość. Otrzymaliśmy ją i przeczytamy z największą uwagą bardzo szybko ☺️",
						ButtonText: "Wróć do ustawień"
					},
					ErrorState: {
						title: "Wystąpił błąd",
						rateLimitMessage: "Wysłano ostatnio bardzo dużo wiadomości. Gdy tylko je przeczytamy, będzie można wysłać kolejne !",
						defaultMessage: "Wiadomość nie została wysłana z powodu nieoczekiwanego błędu. Prosimy o kontakt mailowy : contact@animalert.app !"
					}
				},
				BugReportScreen: {
					OverScrollText: "Zostanie naprawione w następnej wersji",
					IntroTitle: "Znalazłeś/aś błąd ?",
					IntroDescription: `Jesteś we właściwym miejscu, aby to zgłosić!\n\nJeśli to możliwe, dołącz zrzut ekranu przedstawiający Twój problem.\n\nProsimy również o zrobienie zrzutu ekranu poniższych informacji – pomoże nam to w rozwiązaniu problemu :)`,
					ContactText: "Wybierz najwygodniejszy dla Ciebie sposób kontaktu :",
					Mail: "e-mail",
					Thanks: "Z góry dziękujemy za Twoje zgłoszenie! Dzięki Twoim uwagom możemy każdego dnia ulepszać naszą aplikację "
				},
				NotificationsScreen: {
					title: "Powiadomienia",
					OverScrollText: "Włącz wszystkie !",
					IntroDescription: "Spersonalizuj swoje wybory dotyczące powiadomień, obiecujemy wysyłać tylko te niezbędne 😉",
					GoToHistory: "Poprzednio otrzymane powiadomienia",
					RingTypes: {
						LostPet: "🐶 zaginął w pobliżu !",
						HurtPet: "🐱 ranny w pobliżu !",
						OwnAdsUpdate: "Twoje ogłoszenie zostało opublikowane !",
						News: "Dostępna nowa wersja !",
						Funding: "Rozpoczęcie zbiórki funduszy !",
						Testing: "🧪 - 🐶 zaginął w pobliżu! (powiadomienia z testów beta)"
					}
				},
				NotificationHistoryScreen: {
					title: "Otrzymane powiadomienia",
					OverScrollText: "nigdy nie spamujemy :)",
					NoNotifHistory: "Brak otrzymanych powiadomień",
					SendAt: (date: string) => `Wysłano ${date} do `
				},
				LanguageScreen: {
					title: "Język",
					SelectedLangTitle: "Wybrany język: ",
					LanguagesSearchInput: "Szukaj języka",
					LanguagesListTitle: "Lista dostępnych języków:",
					EmptyResultText: `Brak wyników.\n\nJeśli język, którego szukasz, nie jest dostępny, zachęcamy do pomocy w tłumaczeniu !`,
					HelpTranslation: "Pomóż w tłumaczeniu !"
				},
				SavedReportsScreen: {
					loadingSavedReports: "ładowanie ogłoszeń...",
					overScrollText: "Proszę, nie zapominaj o nich. Liczą na Ciebie, a my też",
					title: "Tutaj znajdziesz swoje zapisane ogłoszenia",
					reportsNotification: "Jeśli któreś z nich zostanie odnalezione, dostaniesz powiadomienie.",
					reportsAccess: "Możesz w każdej chwili uzyskać dostęp do tych ogłoszeń.",
					noSavedReport: "Brak zapisanych ogłoszeń."
				},
				AccountScreen: {
					Title: "Konto",
					MyNumber: "Mój numer"
				}
			}
		}
	},
	Pro: {
		Onboarding: {
			FormTitle: (org_name: string) => `Dołącz do zespołu Animalert w ${org_name}`,
			FormSubmittedTitle: (user_name: string) => `Z naszej strony wszystko gra, ${user_name}!`,
			CompleteForm: "Wypełnij poniższe informacje",
			ProMail: "Profesjonalny adres E-mail",
			FormSend: "Formularz wysłany!",
			FormConfirmation: (org_name?: string) => org_name ? `Twoja prośba o dostęp została wysłana do ${org_name}! Otrzymasz powiadomienie, gdy tylko zostanie zaakceptowana :)` : `Twoja prośba o dostęp została wysłana !\nOtrzymasz powiadomienie, gdy tylko zostanie zaakceptowana :)`,
			InvalidLink: "Nieprawidłowy link",
			InvalidLinkDescription: "Wygląda na to, że Twój link z zaproszeniem jest nieprawidłowy. Jeśli problem będzie się powtarzał, skontaktuj się ze swoją organizacją.",
			EnablePro: "Aktywuj mój dostęp",
			SendForm: "Wyślij"
		},
		Dashboard: {
			Hello: (user_name: string) => `Cześć ${user_name}`,
			Staff: "Mój zespół",
			Manager: (plural: boolean) => plural ? `Managerowie` : `Manager`,
			Agent: (plural: boolean) => plural ? `Agenci` : `Agent`,
			InviteMember: "zaproś członka",
			NoValidationWaiting: (mode: "agent" | "manager" | "both") => `Brak ${mode === "both" ? "managerów ani agentów" : mode === "manager" ? "managerów" : "agentów"} oczekujących na zatwierdzenie.`,
			RoleWaitingValidation: (role: string) => `${role} oczekujący na zatwierdzenie`, // ex role: Agents
			RoleAcceptedBy: (role: string, user_name: string) => `${role} zaakceptowani przez ${user_name}`,
			NoRoleAccepted: (role: string, user_name?: string) => user_name ? `Brak zaakceptowanych ${role} przez ${user_name}.` : `Brak zaakceptowanych ${role} .`,
			MyOrganization: "Moja organizacja",
			Show: "pokaż",
			EditTitle: "Modyfikacje",
			EditDescription: "W celu zmiany danych organizacji prosimy o kontakt mailowy z Animalert : contact@animalert.app",
			Agents: {
				LiveReports: (own_reports: boolean) => own_reports ? `Moje aktualne ogłoszenia` : `Aktualne ogłoszenia`,
				EverythingDone: "Wszystkie ogłoszenia zostały już obsłużone !",
				AvailableReports: "Ogłoszenia do rozpatrzenia"
			}
		},
		InviteAgents: {
			Title: "Zaproś agentów",
			InviteAgentsOrManagersTitle: (and_managers: boolean) => `Zaproś agenta${and_managers ? " lub managera" : ""}`,
			InviteAgentsOrManagersDescription: (and_managers: boolean) => `Możesz skopiować poniższy link, aby zaprosić agenta${and_managers ? " lub managera" : ""} do swojego zespołu.`,
			LinkFor: (role: string) => `Link dla ${role}`,
			CopyLink: "Skopiuj link",
			Warning: "Uwaga",
			WarningDescription: "Możliwe, że osoby spoza Twojej organizacji będą próbowały do niej dołączyć. Sprawdź dokładnie numery telefonów profili podczas ich dołączania."
		},
		AgentProfile: {
			ProfileOf: (user_name: string) => `Profil użytkownika ${user_name}`,
			FirstName: "Imię",
			LastName: "Nazwisko",
			JoinedAt: "Dołączył/a",
			Revoke: "Odbierz dostęp",
			AskedAt: "Dostęp zażądany",
			Accept: "zaakceptuj",
			Deny: "odrzuć"
		},
		Organizations: {
			SearchingForPartners: "Trwa wyszukiwanie partnerów Animalert ...",
			NoPartners: "Nie znaleziono w pobliżu żadnych partnerów Animalert.",
			NoMorePartners: "Wszyscy partnerzy Animalert w pobliżu znajdują się powyżej"
		}
	},
	Notifications: {
		AppUpdate: {
			title: "Dostępna nowa wersja !",
			body: (version: string) => `Zaktualizuj aplikację, aby korzystać z wersji ${version} !`
		},
		LostPetFound: {
			title: (pet_emoji: string, is_male: boolean) => `${pet_emoji} ${is_male ? "odnaleziony" : "odnaleziona"} !`,
			body: (pet_name: string, is_male: boolean) => `${pet_name} ${is_male ? "został" : "została"} dzisiaj ${is_male ? "odnaleziony" : "odnaleziona"} przez swoich właścicieli :)`
		},
		NewLostPetReport: {
			title: (pet_emoji: string, is_male: boolean) => `${pet_emoji} ${is_male ? "zgłoszony jako zaginiony" : "zgłoszona jako zaginiona"} !`,
			body: (pet_name: string, is_male: boolean, placeID: userPlace["id"], place_name: string) => `${pet_name} został${is_male ? "" : "a"} zgłoszon${is_male ? "y" : "a"} jako zaginion${is_male ? "y" : "a"} w pobliżu ${placeID == "user" ? "Ciebie, miej oczy otwarte !" : `${place_name} !`}`
		},
		NewFoundPetReport: {
			title: (pet_emoji: string) => `${pet_emoji} znaleziony/a w pobliżu !`,
			body: (pet_name: string, is_injured: boolean, placeID: userPlace["id"], place_name: string) => is_injured ? (placeID == "user" ? `${pet_name} został/a zgłoszony/a jako znaleziony/a i ranny/a w pobliżu Ciebie, miej oczy otwarte !` : `${pet_name} został/a zgłoszony/a jako znaleziony/a i ranny/a w pobliżu ${place_name} !`) : (placeID == "user" ? `${pet_name} został/a zgłoszony/a jako znaleziony/a  w pobliżu Ciebie, miej oczy otwarte!` : `${pet_name} został/a zgłoszony/a jako znaleziony/a  w pobliżu ${place_name}!`)
		},
		NewDeadPetReport: {
			title: "Zwierzę zgłoszone jako martwe",
			body: (pet_name: string, day: string, hour: string) => `${pet_name} został/a zgłoszony/a jako martwy/a w dniu ${day} o godzinie ${hour}, przejmij to ogłoszenie.`
		},
		PetFoundNowSafe: {
			title: (pet_name: string) => `${pet_name} jest bezpieczny/a !`,
			body: (pet_name: string) => `${pet_name} jest już bezpieczny/a i jest to po części Twoja zasługa, dziękujemy za Twoją czujność !`
		},
		PetDeadAround: {
			title: (pet_emoji: string) => `${pet_emoji} martwe zwierzę znalezione w pobliżu`,
			body: (pet_name: string, placeID: userPlace["id"], place_name: string) => placeID == "user" ? `${pet_name} został/a zgłoszony/a jako martwy/a w pobliżu Ciebie.` : `${pet_name} został/a zgłoszony/a jako martwy/a w pobliżu ${place_name}.`
		},
		ReportDenied: {
			title: "Ogłoszenie odrzucone przez moderatora !",
			body: (pet_name: string) => `Ogłoszenie dotyczące ${pet_name} zostało odrzucone.`
		},
		ReportApproved: {
			title: "Twoje ogłoszenie jest publiczne !",
			body: (pet_name: string, _is_male: boolean) => `Wszyscy użytkownicy znajdujący się w pobliżu miejsca zaginięcia ${pet_name} zostali powiadomieni !`,
			bodyNotLost: (pet_name: string, _is_male: boolean) => `Wszyscy użytkownicy znajdujący się w pobliżu ${pet_name} zostali powiadomieni o Twoim zgłoszeniu !`
		}
	},
	Popup: {
		UpdateAvailable: {
			title: "Dostępna nowa wersja",
			description: "Musisz zaktualizować Animalert, aby kontynuować !",
			buttonText: "zaktualizuj !"
		},
		WelcomeToVersion: {
			title: "Nowa wersja",
			description: (version_name: string) => `Witamy w wersji ${version_name} aplikacji Animalert !`,
			buttonText: "Odkryj nowości !"
		}
	},
	Commons: {
		Ok: "Ok",
		No: "Nie",
		Yes: "Tak",
		All: "Wszystkie",
		You: "Ty",
		Next: "Dalej",
		Error: "Błąd",
		Cancel: "Anuluj",
		Confirm: "Potwierdź",
		LoadMore: "Załaduj więcej",
		PressLoadMore: "Kliknij «Załaduj więcej», aby załadować elementy.",
		Apply: "Zastosuj",
		Close: "Zamknij",
		ErrorOccuredPeaseRetry: "Wystąpił błąd, spróbuj ponownie.",
		CantLoadImage: "nie udało się załadować obrazu",
		PleaseWait: "proszę czekać",
		Now: "teraz",
		TimeAgo: (time_amount: string) => `${time_amount} temu`,
		Day: "dzień",
		Days: "dni"
	},
	data: {
		name: "Polski",
		flag: "🇵🇱"
	}
} as const;

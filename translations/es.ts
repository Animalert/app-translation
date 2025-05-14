import { pet_status } from "../types/enums";
import { userPlace } from "../types/types";
import { getEmoji } from "../utils/utils";

export const es = {
	AppNavigation: {
		ScreensTitles: {
			AddLostPetScreen: "Declarar un animal perdido",
			EditPlaceScreen: "Lugar de desaparición"
		}
	},
	Map: {
		Wrapper: {
			GeolocationErrorCustomMessages: {
				1: {
					title: "Permiso denegado",
					message: "Animalert no tiene acceso a su ubicación. Active el acceso a la ubicación en los parámetros y reinicie la aplicación para intentarlo de nuevo."
				},
				2: {
					title: "Ubicación no disponible",
					message: "Animalert no puede recuperar su ubicación. Reinicie la aplicación para intentarlo de nuevo o contacte al soporte si el problema persiste."
				},
				3: {
					title: "Ubicación caducada",
					message: "Su dispositivo no puede darnos acceso a su ubicación. Reinicie la aplicación para intentarlo de nuevo o contacte al soporte si el problema persiste."
				}
			},
			FallBackErrorTitle: "Error",
			FallBackErrorMessage: "Ocurrió un error, intente de nuevo, reinicie la app o contáctenos si el problema persiste.",
			FallBackErrorButtonText: "Reintentar",
			WaitingUser: "Conectando...",
			LoggedOutErrorTitle: "Está desconectado",
			LoggedOutErrorMessage: "Por favor, conéctese para acceder a todas las funcionalidades de Animalert.",
			LoggedOutErrorButtonContent: "Conectarse",
			GoToSettings: "Configuración"
		},
		Screen: {
			LoadingPosition: "Cargando la ubicación...",
			LoadingLostsPets: "Buscando mascotas perdidas a su alrededor...",
			NoLostPetsAround: "¡Ningún animal perdido cerca de usted!",
			ErrorSearchingPets: "Ocurrió un error al buscar los animales perdidos cerca de usted.",
			TryAgain: "reintentar ?",
			AnyAnimalAround: (petsInRadius: number) => {
				return (`${petsInRadius == 0 ? "Ningún" : petsInRadius} ${(petsInRadius > 1) ? "Mascotas" : "Mascota"} a su alrededor`)
			},
			NearToYou: "Cerca de usted"
		},
		AddLostPet: {
			AdUploadError: "Ocurrió un error al publicar el anuncio, por favor intente de nuevo.",
			PetAddPpButton: "Elige una imagen",
			PetNamePlaceholder: "Nombre de su animal",
			ChooseXPicsOfPet: (x: number, maxPics: number, petName: string) => `Elige ${x}/${maxPics} fotos de ${petName ? petName : "su mascota"}.`,
			AddPicturesButton: "Add pictures",
			PetDescriptionPlaceholder: "Descripción detallada de su mascota...",
			AddLostPlace: (petName: string) => `Añadir el lugar de desaparición de ${petName ? petName : "mi mascota"}.`,
			EditPlace: "Cambiar el lugar",
			EditReport: "Cambiar mi anuncio",
			UploadAd: "Publicar",
			UpdateAd: "Actualizar",
			Delete: "Borrar",
			AdDeleted: "Anuncio borrado",
			AdDeletedSuccessfully: "El anuncio ha sido borrado correctamente.",
			AdDeleteError: "Ocurrió un error al eliminar el anuncio, por favor intente de nuevo.",
			LostDate: "Fecha de desaparición",
			SpeciePlaceholder: "gato, perro",
			AgePlaceholder: "4 años",
			SelectGalleryImages: {
				NoLibrairyPermission: "Animalert no tiene acceso a su galería, por favor autorice la aplicación para continuar.",
				UnknownError: "Animalert no ha podido acceder a la galería, por favor intente de nuevo, o infórmenos si el error persiste.",
				PermissionName: "Acceso a su galería",
				GoToSettings: "Configuración"
			},
			Popup: {
				Updating: "Actualizando...",
				AdUpdated: "Anuncio actualizado",
				Uploading: "Publicando",
				AdUploaded: "Anuncio publicado",
				AdUploadingMessage: (petName: string, uploadPercentage: number) => `Progresión de la publicación del anuncio de ${petName}: ${uploadPercentage}%.`,
				AdUploadedMessage: (petName: string) =>`El anuncio informando la desaparición de ${petName}`,
				AdUploadedMessageEdit: "ha sido actualizado.",
				AdUploadedMessageNoEdit: "ha sido publicado."
			},
			EssentialsKeysAlerts: {
				name: {
					title: "Nombre",
					content: "Debe mencionar el nombre de su mascota."
				},
				images_files: {
					title: "Fotos",
					content: "Debe añadir al menos una foto en gran formato de su mascota."
				},
				lat: {
					title: "Ubicación",
					content: "Debe añadir un lugar de desaparición para su mascota."
				},
				lng: {
					title: "Ubicación",
					content: "Debe añadir un lugar de desaparición para su mascota."
				},
				description: {
					title: "Descripción",
					content: "Debe añadir una descripción detallada de su mascota."
				},
				age: {
					title: "Edad",
					content: "Debe indicar la edad de su mascota en años."
				},
				type: {
					title: "Tipo",
					content: "Debe indicar el tipo de animal de su mascota."
				}
			},
			ImageSizeError: {
				title: "Imagen demasiado pesada",
				message: (image_index: number) => `Su ${image_index}${image_index == 1 ? "r" : ""} imagen es demasiado pesada, por favor comprésala o elija otra foto..`
			}
		},
		SeeLostPet: {
			LoadingPet: "Cargando el anuncio...",
			Edit: "Cambiar",
			InformationsAbout: (petName: string) => `Información sobre ${petName}:`,
			TestReportMessage: "Cuidado, esto es un anuncio de prueba, esta mascota no está realmente en peligro.",
			lostedDate: "Perdido ",
			FeedbackTitles: {
				why_denied: "Motivo del rechazo",
				why_blocked: "Motivo del bloqueo",
				improvements: "Mejoras posibles",
				message: "Mensaje de Animalert",
				testing: "Anuncio beta"
			},
			StatusMessages: {
				[pet_status.APPROVED]: (pet_name: string) => `El anuncio de ${pet_name} está en línea, los usuarios pueden verla en la aplicación.`,
				[pet_status.FOUND]: (pet_name: string) => `El anuncio de ${pet_name} ya no está visible en el mapa, los usuarios que la hayan guardado serán informados de su reencuentro.`,
				[pet_status.WAITING_APPROVAL]: (pet_name: string) => `El anuncio de ${pet_name} será publicada tan pronto como un moderador la haya aprobado.`,
				updated: (pet_name: string) => `El anuncio de ${pet_name} ya está publicada. Sus modificaciones serán públicas tan pronto como un moderador las haya aprobado.`,
				[pet_status.DELETED]: (pet_name: string) => `El anuncio de ${pet_name} ha sido borrada, usted es el único que puede verla.`,
				[pet_status.DENIED]: (pet_name: string) => `El anuncio de ${pet_name} ha sido rechazada, usted es el único que puede verla.`
			},
			Categories: {
				keys: {
					specie: "tipo",
					breed: "raza",
					age: "edad",
					gender: "sexo",
					castratedSterilized: "castrado/esterilizado",
					microship: "chip electrónico",
					is_testing: "¿Es un anuncio de prueba?",
					is_owner: "¿Es usted el propietario de la mascota?"
				},
				values: {
					species: (specie: string) => {
						switch (specie) {
							case "cat":
								return "gato";
							case "dog":
								return "perro";
							default:
								return (specie);
						}
					},
					age: (age: number, is_years: boolean) => `${Math.abs(age)} ${is_years ? "años" : "meses"}`,
					genderMale: "macho",
					genderFemale: "hembra",
				}
			},
			YouWillBeNotified: (pet_name: string, is_male: boolean) => `Usted será informado/a cuando se encuentre a ${pet_name} ${is_male ? "" : "e"}`,
			NotifyMe: (pet_name: string, is_male: boolean) => `Avisarme cuando ${pet_name} sea encontrado ${is_male ? "" : "e"}`, // Mettre a et enleve le o
			IFoundPet: (pet_name: string) => `He encontrado ${pet_name}`,
			EditModeWindowitle: "Vista previa de mi anuncio"
		}
	},
	Discover: {
		MakeADonation: "Hacer una donación",
		PatchNoteScreen: {
			Title: "Detalles de la versión",
			OverScrollText: "Redactado y mantenido por Wayan NEEL 🚀"
		},
	},
	User: {
		Screen: {
			TitleAccount: "Cuenta",
			MyAdsTitle: "Mis anuncios",
			LogOut: "Desconectarse",
			SettingsBottomVersion: "versión beta",
			LoadingMessage: "Cargando sus anuncios",
			NoAdsMessage: "Ningún anuncio publicado",
			PublishReport: "Publicar un anuncio",
			ProfileSettings: "configuración",
			EditPlace: {
				WindowTitle: "Editar un lugar",
				ComeBackToPosition: "Volver a la posición actual",
				LoadingUserPosition: "Cargando su ubicación...",
				Save: "Guardar",
				HomeDefaultName: "Casa",
				WorkDefaultName: "Trabajo",
				FavDefaultName: "Añadir un lugar",
				PermanentWarning: "Alertas permanentes",
				AddPermanentWarningDescription: "Añadir los lugares que frecuentas regularmente para ser informado en directo de los avisos."
			},
		},
		LoginRegister: {
			DefaultPhoneLocale: "+34",
			InvalidPhoneNumber: "Número de teléfono incorrecto",
			OTPSent: "Un código de verificación ha sido enviado por SMS.",
			SuccessfulAuth: "Conexión por teléfono exitosa 👍",
			Error: "Error",
			WaitingUserMessage: "Conectando...",
			SendingSms: "Enviando el SMS...",
			ScreenTitle: "Iniciar sesión en Animalert",
			PhoneNumberInputContent: "Número de teléfono",
			PhoneNumberButtonContent: "Enviar un código de verificación",
			OTPInputContent: "Código de verificación",
			OTPButtonContent: "Confirmar el código",
			GoBack: "Volver atrás",
			authErrors: {
				"invalid-phone-number": "El número de teléfono indicado no es válido",
				"too-many-requests": "Se ha alcanzado el número máximo de intentos de conexión. Inténtelo de nuevo más tarde o contáctenos.",
				"invalid-verification-code": "El código de verificación no es válido, por favor intente de nuevo.",
				"code-expired": "El código de verificación ha expirado, por favor intente de nuevo.",
				"missing-client-identifier": "No podemos verificar la integridad de su dispositivo. Por favor, reinicie la aplicación o contáctenos.",
				"popup-closed-by-user": "El captcha ha sido cancelado, por favor intente de nuevo.",
				"user-disabled": "Usted está expulsado de la asociación Animalert y de sus distintos servicios."
			}
		},
		Settings: {
			AppSettings: {
				Blocs: {
					savedReports: "Anuncios guardados",
					lang: "Idioma",
					langEmoji: "🇪🇸",
					notif: "Notificaciones",
					rateUs: "Calificar la app",
					writeUs: "Contactarnos",
					bugReport: "Reportar un bug",
					security: "Seguridad y confidencialidad",
					thanks: "Agradecimientos"
				},
				WriteUsScreen: {
					OverScrollText: "Gracias de antemano por su mensaje 😻",
					IntroTitle: "¿Desea contactarnos? ?",
					IntroDescription: "¿Pregunta, comentarios, entrevista o por curiosidad? ¡Está en el lugar correcto!\n\nSi desea ser recontactado, deje sus datos de contacto.\nIntentaremos responderle lo antes posible 😉",
					TextInputPlaceholder: "Su mensaje",
					SendMessageButton: "Enviar mensaje",
					SendingState: {
						title: "El cartero está en camino...",
						message: "Su mensaje está siendo enviado",
						ButtonText: "Enviando..."
					},
					DoneState: {
						title: "¡Ya está!",
						message: "Gracias por su mensaje, lo hemos recibido y lo leeremos con mucha atención muy pronto ☺️",
						ButtonText: "Volver a la configuración"
					},
					ErrorState: {
						title: "Ocurrió un error",
						rateLimitMessage: "Ha enviado muchos mensajes recientemente, una vez que los hayamos leído todos, podrá enviar de nuevo.",
						defaultMessage: "Su mensaje no ha podido enviarse por una razón que desconocemos. Si el problema persiste, no dude en contactarnos por correo electrónico: contact@animalert.app."
					}
				},
				BugReportScreen: {
					OverScrollText: "Se resolverá en la próxima versión.",
					IntroTitle: "¿Has encontrado un error?",
					IntroDescription: "¡Has llegado al lugar correcto para señalarlo!\n\nSi es posible, no dudes en adjuntar una captura de pantalla de tu problema.\n\nAgradeceríamos si pudieras tomar una captura de pantalla de la información que aparece abajo para ayudarnos a resolver el error :)",
					ContactText: "Elija el medio de contacto que prefiera:",
					Mail: "Correo electrónico",
					Thanks: "Agradecemos de antemano su información, gracias a sus comentarios podemos mejorar la aplicación cada día."
				},
				NotificationsScreen: {
					title: "Notificaciones",
					OverScrollText: "¡Actívalas todas!",
					IntroDescription: "Personaliza tus notificaciones, prometemos enviar solo lo necesario 😉",
					GoToHistory: "Notificaciones recibidas previamente",
					RingTypes: {
						LostPet: "🐶 ¡Perdido cerca de aquí !",
						HurtPet:  "🐱 ¡Herido cerca de aquí!",
						OwnAdsUpdate: "¡Su anuncio ha sido publicado!",
						News: "¡Nueva versión disponible!",
						Funding: "¡Lanzamiento de una recaudación de fondos!",
						Testing: "🧪 - 🐶 ¡Perdido cerca de aquí ! (Notificaciones de pruebas beta)"
					}
				},
				NotificationHistoryScreen: {
					title: "Notificaciones recibidas",
					OverScrollText: "Nunca spam :)",
					NoNotifHistory: "Ninguna notificación recibida",
					SendAt: (date: string) => `Enviado el ${date} a `
				},
				LanguageScreen: {
					title: "Idioma",
					SelectedLangTitle: "Idioma seleccionado: ",
					LanguagesSearchInput: "Buscar un idioma",
					LanguagesListTitle: "Lista de idiomas disponibles:",
					EmptyResultText: "Ningún resultado encontrado.\n\nSi el idioma que buscas no está disponible, ¡no dudes en contribuir!",
					HelpTranslation: "¡Participa en la traducción!",
				},
				SavedReportsScreen: {
					loadingSavedReports: "Cargando anuncios...",
					overScrollText: "Gracias por no olvidarlos, ellos cuentan contigo, y nosotros también.",
					title: "Aquí puedes encontrar tus anuncios guardados.",
					reportsNotification: "Si uno de ellos es encontrado, serás notificado.",
					reportsAccess: "Puede acceder a estos anuncios en cualquier momento.",
					noSavedReport: "No hay anuncios guardados por el momento."
				},
			}
		}
	},
	Notifications: {
		AppUpdate: {
			title: "¡Nueva versión disponible!",
			body: (version: string) => `¡Actualiza la aplicación para beneficiarte de la versión ${version}!`
		},
		PetLostAround: {
			title: (specie: string, is_male: boolean) => `¡${getEmoji(specie)} perdido${is_male ? "" : "e"} cerca de aquí!`, // change pour a et enlever o 
			body: (pet_name: string, is_male: boolean) => `¡${pet_name} ha sido declarado${is_male ? "" : "e"} perdido${is_male ? "" : "e"} cerca de aquí, ¡ojo!`
		},
		LostPetFound: {
			title: (specie: string, is_male: boolean) => `¡${getEmoji(specie)} encontrado${is_male ? "" : "e"}!`,
			body: (pet_name: string, is_male: boolean) => `${pet_name} ha sido encontrado${is_male ? "" : "e"} hoy por sus proprietarios :)`
		},
		NewPetReport: {
			title: (specie: string, is_male: boolean) => `¡${getEmoji(specie)} declarado${is_male ? "" : "e"} perdido${is_male ? "" : "e"}!`,
			body: (pet_name: string, is_male: boolean, placeID: userPlace["id"], place_name: string) => `${pet_name} ha sido declarado${is_male ? "" : "e"} perdido${is_male ? "" : "e"} cerca de ${
				placeID == "user" ? "usted" : `${place_name}`
			}${placeID == "user" ? ", ¡ojo!" : ""}`
		},
		ReportDenied: {
			title: "¡Anuncio rechazado por un moderador!",
			body: (pet_name: string) => `El anuncio sobre la desaparición de ${pet_name} ha sido rechazado.`
		},
		ReportApproved: {
			title: "¡Su anuncio está en público!",
			body: (pet_name: string, _is_male: boolean) => `¡Todos los usuarios cercanos a ${pet_name} serán notificados de su desaparición!`,
		},
	},
	Popup: {
		UpdateAvailable: {
			title: "Nueva versión disponible",
			description: "¡Debe actualizar Animalert para continuar!",
			buttonText: "¡Actualizar!",
		},
		WelcomeToVersion: {
			title: "Nueva versión",
			description: (version_name: string) => `¡Bienvenido a la versión ${version_name} de Animalert!`,
			buttonText: "¡Descubre las novedades!",
		},
	},
	Commons: {
		Ok: "Ok",
		No: "No",
		Yes: "Si",
		Error: "Error",
		Cancel: "Cancelar",
		Confirm: "Confirmar",
		Close: "Cerrar",
		ErrorOccuredPeaseRetry: "Ocurrió un error, por favor inténtelo más tarde.",
		CantLoadImage: "No se pudo cargar la imagen.",
		PleaseWait: "Por favor, espere.",
		Now: "Ahora",
		TimeAgo: (time_amount: string) => `hace ${time_amount}`,
		Day: "día",
		Days: "días"
	},
	data: {
		name: "Español",
		flag: "🇪🇸"
	}
} as const;

export const USER_MOCK = {
  "profile": {
    "name": "John",
    "phone": "+123456789",
    "photo": "photo_url",
    "status": "Available",
    "lastSeen": "5 minutes ago"
  }
}

export const CHATS_MOCK = {
  "chats": [
    {
      "id": 1,
      "contact": "John",
      "lastMessage": "Hey, how are you?",
      "lastMessageTime": "10:00 AM"
    },
    {
      "id": 2,
      "contact": "Maria",
      "lastMessage": "Do you want to go out tonight?",
      "lastMessageTime": "yesterday"
    },
    {
      "id": 3,
      "contact": "Peter",
      "lastMessage": "I'll be late for the meeting",
      "lastMessageTime": "2 hours ago"
    },
    {
      "id": 4,
      "contact": "Sofía",
      "lastMessage": "Claro. ¡Descansa!",
      "lastMessageTime": "20:16"
    }
  ]
}

export const SPECIFIC_CHATS_MOCK = {
  "specificChats": [
    {
      "id": 1,
      "contact": "John",
      "messages": [
        {
          "sender": "John",
          "content": "Hey, how are you?",
          "time": "10:00 AM"
        },
        {
          "sender": "You",
          "content": "I'm good, thanks! How about you?",
          "time": "10:05 AM"
        }
      ]
    },
    {
      "id": 2,
      "contact": "Maria",
      "messages": [
        {
          "sender": "Maria",
          "content": "Do you want to go out tonight?",
          "time": "yesterday"
        },
        {
          "sender": "You",
          "content": "Sure, where do you want to go?",
          "time": "yesterday"
        }
      ]
    },
    {
      "id": 3,
      "contact": "Peter",
      "messages": [
        {
          "sender": "Peter",
          "content": "I'll be late for the meeting",
          "time": "yesterday"
        },
      ]
    },
    {
      "id": 4,
      "contact": "Sofía",
      "messages": [
        {
          "sender": "Sofía",
          "content": "¡Hola! ¿Cómo estás?",
          "time": "18:01"
        },
        {
          "sender": "You",
          "content": "¡Hola! Bien, ¿y tú? ¿Qué tal el día?",
          "time": "18:02"
        },
        {
          "sender": "Sofía",
          "content": "Bastante ocupado, pero ya terminando. ¿Hiciste lo del proyecto?",
          "time": "18:03"
        },
        {
          "sender": "You",
          "content": "Sí, casi lo termino. Me falta solo una parte.",
          "time": "18:04"
        },
        {
          "sender": "Sofía",
          "content": "Qué bueno, me alegro. ¿Crees que lo tengas listo para mañana?",
          "time": "18:05"
        },
        {
          "sender": "You",
          "content": "Sí, seguro. ¿Necesitas que te envíe algo?",
          "time": "18:06"
        },
        {
          "sender": "Sofía",
          "content": "No, por ahora no. Pero te aviso si surge algo.",
          "time": "18:07"
        },
        {
          "sender": "You",
          "content": "Perfecto.",
          "time": "18:07"
        },
        {
          "sender": "Sofía",
          "content": "Oye, ¿te conté que me voy de viaje en un par de semanas?",
          "time": "18:09"
        },
        {
          "sender": "You",
          "content": "¡No! ¡Qué bien! ¿A dónde vas?",
          "time": "18:10"
        },
        {
          "sender": "Sofía",
          "content": "A la playa. Me hace falta descansar.",
          "time": "18:11"
        },
        {
          "sender": "You",
          "content": "¡Qué envidia! Me encantaría ir.",
          "time": "18:12"
        },
        {
          "sender": "Sofía",
          "content": "Sí, necesito desconectar un poco de todo.",
          "time": "18:13"
        },
        {
          "sender": "You",
          "content": "Te entiendo. ¿Con quién vas?",
          "time": "18:14"
        },
        {
          "sender": "Sofía",
          "content": "Con mi familia. Va a ser muy divertido.",
          "time": "18:15"
        },
        {
          "sender": "You",
          "content": "Qué bien. Espero que lo pases genial.",
          "time": "18:16"
        },
        {
          "sender": "Sofía",
          "content": "Gracias. Te enviaré fotos.",
          "time": "18:17"
        },
        {
          "sender": "You",
          "content": "¡Claro! No me las pierdo.",
          "time": "18:18"
        },
        {
          "sender": "Sofía",
          "content": "Y tú, ¿qué planes tienes para el fin de semana?",
          "time": "18:20"
        },
        {
          "sender": "You",
          "content": "Todavía nada. Quizás vaya a ver una película.",
          "time": "18:21"
        },
        {
          "sender": "Sofía",
          "content": "Suena bien. ¿Viste la última de la saga 'Guardianes'?",
          "time": "18:22"
        },
        {
          "sender": "You",
          "content": "Aún no, pero me han dicho que es muy buena.",
          "time": "18:23"
        },
        {
          "sender": "Sofía",
          "content": "Sí, te la recomiendo. Me gustó mucho.",
          "time": "18:24"
        },
        {
          "sender": "You",
          "content": "Vale, la tendré en cuenta.",
          "time": "18:25"
        },
        {
          "sender": "Sofía",
          "content": "¿Sabes si hay algún evento por la ciudad?",
          "time": "18:27"
        },
        {
          "sender": "You",
          "content": "Creo que sí, vi algo de un festival de música en el parque.",
          "time": "18:28"
        },
        {
          "sender": "Sofía",
          "content": "¡Ah, sí! Lo vi en Instagram. ¿Vamos?",
          "time": "18:29"
        },
        {
          "sender": "You",
          "content": "Mmm, no sé. Podríamos ir, ¿cuándo es?",
          "time": "18:30"
        },
        {
          "sender": "Sofía",
          "content": "Creo que es el sábado por la tarde. ¿Te apuntas?",
          "time": "18:31"
        },
        {
          "sender": "You",
          "content": "Me gustaría, pero no creo que pueda. Tengo un compromiso familiar.",
          "time": "18:32"
        },
        {
          "sender": "Sofía",
          "content": "¡Vaya! Qué pena. Bueno, ya habrá otra ocasión.",
          "time": "18:33"
        },
        {
          "sender": "You",
          "content": "Sí, claro. Lo siento.",
          "time": "18:34"
        },
        {
          "sender": "Sofía",
          "content": "No te preocupes. Otro día. Ahora tengo que irme, voy a cenar.",
          "time": "18:35"
        },
        {
          "sender": "You",
          "content": "Está bien. Que aproveche.",
          "time": "18:36"
        },
        {
          "sender": "Sofía",
          "content": "Gracias. Hablamos luego, ¿vale?",
          "time": "18:37"
        },
        {
          "sender": "You",
          "content": "Claro. ¡Adiós!",
          "time": "18:38"
        },
        {
          "sender": "Sofía",
          "content": "¡Adiós! 😉",
          "time": "18:38"
        },
        {
          "sender": "You",
          "content": "Yendo para casa ahora, qué largo ha sido el día.",
          "time": "20:01"
        },
        {
          "sender": "Sofía",
          "content": "Te entiendo. Hoy ha sido agotador.",
          "time": "20:02"
        },
        {
          "sender": "You",
          "content": "Ya lo creo. ¿Llegaste bien a casa?",
          "time": "20:03"
        },
        {
          "sender": "Sofía",
          "content": "Sí, acabo de llegar. ¿Cenaste ya?",
          "time": "20:04"
        },
        {
          "sender": "You",
          "content": "No, todavía no. ¿Qué vas a cenar?",
          "time": "20:05"
        },
        {
          "sender": "Sofía",
          "content": "Creo que voy a pedir pizza. No tengo ganas de cocinar.",
          "time": "20:06"
        },
        {
          "sender": "You",
          "content": "¡Qué buena idea! Yo voy a ver qué hay en el refri.",
          "time": "20:07"
        },
        {
          "sender": "Sofía",
          "content": "Jajaja. ¡Qué bien te lo montas!",
          "time": "20:08"
        },
        {
          "sender": "You",
          "content": "Pues sí. ¿Y qué tal la película que te recomendé?",
          "time": "20:09"
        },
        {
          "sender": "Sofía",
          "content": "Aún no la he visto, pero la tengo pendiente. Ya te contaré.",
          "time": "20:10"
        },
        {
          "sender": "You",
          "content": "Vale. Avísame.",
          "time": "20:11"
        },
        {
          "sender": "Sofía",
          "content": "Oye, ¿has visto el nuevo video de ese youtuber que te gusta?",
          "time": "20:12"
        },
        {
          "sender": "You",
          "content": "Todavía no, pero lo veré luego. Gracias por avisar.",
          "time": "20:13"
        },
        {
          "sender": "Sofía",
          "content": "De nada. Te va a encantar.",
          "time": "20:14"
        },
        {
          "sender": "You",
          "content": "Bueno, me voy a preparar la cena. ¡Hablamos mañana!",
          "time": "20:15"
        },
        {
          "sender": "Sofía",
          "content": "Claro. ¡Descansa!",
          "time": "20:16"
        }
      ]
    }
  ]
}
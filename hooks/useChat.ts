import { ChatContext } from "@/context/ChatContext";
import { useLocalSearchParams } from "expo-router";
import { useContext, useMemo } from "react";

export const useChat = () => {
  const context = useContext(ChatContext);
  const { id: idFromParams } = useLocalSearchParams();
  const id = Number(idFromParams);

  if (!context) {
    throw new Error("useChat debe usarse dentro de un ChatProvider");
  }

  const { chats, messages, setChats, setMessages } = context;

  const sendMessage = (content: string) => {
    if (!id) { return null; }

    const personMessages = messages.filter(c => c.id === id)[0];

    const arrayWithoutPerson = messages.filter(c => c.id !== id);

    const now = new Date().toLocaleString('es-ES')

    personMessages.messages.push({
      sender: 'You',
      content,
      time: now
    });

    setMessages([...arrayWithoutPerson, personMessages]);

    const chat = chats.filter(c => c.id === id)[0];

    const chatsWithoutPerson = chats.filter(c => c.id !== id);

    setChats([{
      id,
      contact: chat.contact,
      lastMessage: content,
      lastMessageTime: now
    }, ...chatsWithoutPerson]);
  }

  const messagesById = useMemo(() => {
    if (!id) {
      return [];
    }
    // Asegúrate de que allChats no esté vacío y que el ID exista
    if (!messages || messages.length === 0) {
      return [];
    }
    const chat = messages.find(c => c.id === Number(id));
    // Si no se encuentra el chat, devuelve un arreglo vacío
    if (!chat) {
      return [];
    }
    // Si se encuentra, devuelve los mensajes invertidos
    return chat.messages.toReversed();
  }, [messages, id]);

  return {
    chats,
    messages,
    sendMessage,
    messagesById
  };
};

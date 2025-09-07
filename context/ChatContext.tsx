import { ChatType, SpecificChatType } from '@/interface';
import { CHATS_MOCK, SPECIFIC_CHATS_MOCK } from '@/mocks';
import React, { createContext, useEffect, useState } from 'react';

export interface ChatContextType {
  chats: ChatType[];
  messages: SpecificChatType[];
  fetchChats: () => Promise<void>;
  fetchMessages: () => Promise<void>;
  sendMessage: (id: number, content: string) => void
}

const INITIAL_STATE: ChatContextType = {
  chats: [],
  messages: [],
  fetchChats: () => new Promise(() => { }),
  fetchMessages: () => new Promise(() => { }),
  sendMessage: () => { },
}

export const ChatContext = createContext<ChatContextType>(INITIAL_STATE);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<ChatType[]>([]); // Aquí irían tus chats
  const [messages, setMessages] = useState<SpecificChatType[]>([]); // Los mensajes por chat

  // Simula la carga de datos
  const fetchChats = async () => {
    // Lógica para obtener chats desde tu backend
    const fetchedChats = CHATS_MOCK.chats;
    setChats(fetchedChats);
  };

  const fetchMessages = async () => {
    // Lógica para obtener mensajes de un chat específico
    const fetchedMessages = SPECIFIC_CHATS_MOCK.specificChats;
    setMessages(fetchedMessages);
  };

  useEffect(() => {
    fetchChats()
    fetchMessages()
  }, []);

  const sendMessage = (id: number, content: string) => {
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

  const value = {
    chats,
    messages,
    fetchChats,
    fetchMessages,
    sendMessage
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
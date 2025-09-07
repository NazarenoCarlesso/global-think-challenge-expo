import { CHAT_CONTEXT_INITIAL_STATE } from '@/constants';
import { ChatContextType, ChatType, SpecificChatType } from '@/interface';
import { CHATS_MOCK, SPECIFIC_CHATS_MOCK } from '@/mocks';

import React, { createContext, useEffect, useState } from 'react';

export const ChatContext = createContext<ChatContextType>(CHAT_CONTEXT_INITIAL_STATE);

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

  return (
    <ChatContext.Provider value={{ chats, messages, setChats, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
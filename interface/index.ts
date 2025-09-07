export interface UserType {
  name: string
  phone: string
  photo: string
  status: string
  lastSeen: string
}

export interface ChatType {
  id: number;
  contact: string;
  lastMessage: string;
  lastMessageTime: string;
}

export interface MessageType {
  sender: string;
  content: string;
  time: string;
}

export interface SpecificChatType {
  id: number;
  contact: string;
  messages: MessageType[];
}

export interface ChatContextType {
  chats: ChatType[];
  messages: SpecificChatType[];
  setChats: React.Dispatch<React.SetStateAction<ChatType[]>>;
  setMessages: React.Dispatch<React.SetStateAction<SpecificChatType[]>>;
}
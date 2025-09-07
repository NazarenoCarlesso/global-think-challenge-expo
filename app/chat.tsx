import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Message from '@/components/Message';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { ChatContext } from '@/context/ChatContext';
import { useLocalSearchParams } from 'expo-router';
import { useContext, useMemo, useState } from 'react';


export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const { messages: allChats, sendMessage } = useContext(ChatContext);

  const messages = useMemo(() => {
    // Asegúrate de que allChats no esté vacío y que el ID exista
    if (!allChats || allChats.length === 0) {
      return [];
    }
    const chat = allChats.find(c => c.id === Number(id));
    // Si no se encuentra el chat, devuelve un arreglo vacío
    if (!chat) {
      return [];
    }
    // Si se encuentra, devuelve los mensajes invertidos
    return chat.messages.toReversed();
  }, [allChats, id]);

  const [inputText, setInputText] = useState<string>('');

  const handleTextChange = (text: string) => {
    setInputText(text)
  }

  const handleSendButton = () => {
    setInputText('');
    sendMessage(Number(id), inputText);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 96 : 0}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Lista de mensajes */}
        <FlatList
          data={messages}
          // TODO: Revisar estas keys si se puede usar index
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => <Message {...item} isMyMessage={item.sender === "You"} />}
          inverted // Para que la lista empiece desde abajo
          style={styles.messagesList}
        />
        {/* Área de entrada de texto y botón de envío */}
        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={(text) => handleTextChange(text)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => handleSendButton()}>
            <ThemedText style={styles.sendButtonText}>Enviar</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Es crucial que SafeAreaView ocupe todo el espacio
    backgroundColor: Colors.dark.background,
    paddingBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  messagesList: {
    paddingHorizontal: 10,
    backgroundColor: '#0f1011ff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#666666ff',
    backgroundColor: Colors.dark.background,
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
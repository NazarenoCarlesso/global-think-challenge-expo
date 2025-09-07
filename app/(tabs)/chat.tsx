import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Message from '@/components/Message';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const SPECIFIC_CHATS_MOCK = {
  "specificChats": [
    {
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
    }
  ]
}

export default function ChatScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Lista de mensajes */}
        <FlatList
          data={SPECIFIC_CHATS_MOCK.specificChats[0].messages}
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
          />
          <TouchableOpacity style={styles.sendButton}>
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
    backgroundColor: '#7b92f7ff',
    paddingBottom: 50,
  },
  container: {
    flex: 0.9,
  },
  messagesList: {
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
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
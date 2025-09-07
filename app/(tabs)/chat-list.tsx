import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import ChatItem from '@/components/ChatItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const CHATS_MOCK = {
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
    }
  ]
}


export default function ChatListScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.header}>Chats</ThemedText>
        <FlatList
          data={CHATS_MOCK.chats}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ChatItem
              contact={item.contact}
              lastMessage={item.lastMessage}
              lastMessageTime={item.lastMessageTime}
              onPress={() => console.log('PRESS')}
            // onPress={() => handleChatPress(item.id)}
            />
          )}
          style={styles.list}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Es crucial que SafeAreaView ocupe todo el espacio
    backgroundColor: '#7b92f7ff',
  },
  container: {
    flex: 0.94,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: ''
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  list: {
    width: '100%',
    backgroundColor: '#97e294ff',
  },
});

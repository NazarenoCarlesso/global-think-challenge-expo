import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import ChatItem from '@/components/ChatItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useChat } from '@/hooks/useChat';
import { router } from 'expo-router';


export default function ChatListScreen() {
  const { chats } = useChat();

  const handleChatPress = (id: number) => {
    router.push({
      pathname: '/chat',
      params: { id }
    })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.header}>Chats</ThemedText>
        <FlatList
          data={chats}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ChatItem
              contact={item.contact}
              lastMessage={item.lastMessage}
              lastMessageTime={item.lastMessageTime}
              onPress={() => handleChatPress(item.id)}
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
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  container: {
    flex: 0.94,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: Colors.dark.background,
  },
  header: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#666666ff',
    textAlign: 'center',
  },
  list: {
    width: '100%',
    backgroundColor: Colors.dark.background,
  },
});

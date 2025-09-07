import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface MessageProps {
  content: string
  time: string
  isMyMessage: boolean
}

const Message = ({ content, time, isMyMessage }: MessageProps) => {
  return (
    <ThemedView style={[styles.messageContainer, isMyMessage ? styles.myMessage : styles.theirMessage]}>
      <ThemedText style={styles.messageText}>{content}</ThemedText>
      <ThemedText style={styles.messageTime}>{time}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#007AFF', // Azul para mis mensajes
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#E5E5EA', // Gris claro para los mensajes de otros
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  messageTime: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});

export default Message
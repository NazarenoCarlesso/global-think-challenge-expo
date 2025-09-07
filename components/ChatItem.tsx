import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChatItemProps {
  contact: string
  lastMessage: string
  lastMessageTime: string
  onPress: () => void
}

const ChatItem = ({ contact, lastMessage, lastMessageTime, onPress }: ChatItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.chatItem}>
      <View style={styles.content}>
        <Text style={styles.chatName}>{contact}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>{lastMessage}</Text>
      </View>
      <Text style={styles.time}>{lastMessageTime}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#666666ff',
    backgroundColor: Colors.dark.background,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  lastMessage: {
    fontSize: 14,
    color: '#a0a0a0ff',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#a0a0a0ff',
  },
});

export default ChatItem;
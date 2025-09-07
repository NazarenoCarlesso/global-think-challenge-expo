import { Image } from 'expo-image';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Colors } from '@/constants/Colors';
import { UserType } from '@/interface';
import { USER_MOCK } from '@/mocks';
import { useState } from 'react';


export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [User, setUser] = useState<UserType>(USER_MOCK.profile);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleChangeText = (key: string, value: string) => {
    setUser((state) => ({ ...state, [key]: value }));
  };

  const handleSavePress = () => {
    // console.log('User saved!', User);
    setIsEditing(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Sección del avatar */}
        <ThemedView style={styles.avatarContainer}>
          <Image
            source={{ uri: USER_MOCK.profile.photo }}
            style={styles.avatar}
          />
          <ThemedText style={styles.statusText}>
            {USER_MOCK.profile.status}
          </ThemedText>
        </ThemedView>
        {/* Sección de información */}
        <ThemedView style={styles.infoContainer}>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Nombre:</ThemedText>
            {isEditing ? (
              <TextInput
                style={styles.editInput}
                value={User.name}
                onChangeText={(text) => handleChangeText('name', text)}
              />
            ) : (
              <ThemedText style={styles.infoText}>{User.name}</ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Teléfono:</ThemedText>
            {isEditing ? (
              <TextInput
                style={styles.editInput}
                value={User.phone}
                onChangeText={(text) => handleChangeText('phone', text)}
              />
            ) : (
              <ThemedText style={styles.infoText}>{User.phone}</ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Última conexión:</ThemedText>
            <ThemedText style={styles.infoText}>{User.lastSeen}</ThemedText>
          </ThemedView>
          {/* Botón de editar/guardar */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={isEditing ? handleSavePress : handleEditPress}
          >
            <ThemedText style={styles.buttonText}>
              {isEditing ? "Guardar" : "Editar Perfil"}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
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
    backgroundColor: Colors.dark.background,
    width: '100%',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#666666ff',
    backgroundColor: '#202020ff',
  },
  statusText: {
    marginTop: 10,
    fontSize: 16,
    color: '#00C853',
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#666666ff',
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  infoText: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  editInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    color: Colors.dark.text,
    minWidth: 150,
    textAlign: 'right',
  },
  editButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

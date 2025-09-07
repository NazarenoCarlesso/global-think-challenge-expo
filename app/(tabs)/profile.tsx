import { Image } from 'expo-image';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Colors } from '@/constants/Colors';
import { USER_MOCK } from '@/mocks';
import { useState } from 'react';


export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(USER_MOCK.profile.name);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleSavePress = () => {
    // Aquí puedes agregar la lógica para guardar los cambios en un estado global o una API
    console.log("Nombre guardado:", userName);
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
          <ThemedText style={styles.statusText}>{USER_MOCK.profile.status}</ThemedText>
        </ThemedView>
        {/* Sección de información */}
        <ThemedView style={styles.infoContainer}>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Nombre:</ThemedText>
            {isEditing ? (
              <TextInput
                style={styles.editInput}
                value={userName}
                onChangeText={setUserName}
              />
            ) : (
              <ThemedText style={styles.infoText}>{userName}</ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Teléfono:</ThemedText>
            <ThemedText style={styles.infoText}>{USER_MOCK.profile.phone}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Última conexión:</ThemedText>
            <ThemedText style={styles.infoText}>{USER_MOCK.profile.lastSeen}</ThemedText>
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
    padding: 20,
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
    borderColor: '#ddd',
  },
  statusText: {
    marginTop: 10,
    fontSize: 16,
    color: '#00C853',
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  editInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    color: '#333',
    minWidth: 150,
    textAlign: 'right',
  },
  editButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

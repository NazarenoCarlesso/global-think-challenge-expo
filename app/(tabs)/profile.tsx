import { Image } from 'expo-image';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Colors } from '@/constants/Colors';
import { useUserEdit } from '@/hooks/useUserEdit';


export default function ProfileScreen() {
  const { user, isEditing, handleEditPress, handleChangeText, handleSavePress } = useUserEdit();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Sección del avatar */}
        <ThemedView style={styles.avatarContainer}>
          <Image
            source={{ uri: user.photo }}
            style={styles.avatar}
          />
          <ThemedText style={styles.statusText}>
            {user.status}
          </ThemedText>
        </ThemedView>
        {/* Sección de información */}
        <ThemedView style={styles.infoContainer}>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Nombre:</ThemedText>
            {isEditing ? (
              <TextInput
                style={styles.editInput}
                value={user.name}
                onChangeText={(text) => handleChangeText('name', text)}
              />
            ) : (
              <ThemedText style={styles.infoText}>{user.name}</ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Teléfono:</ThemedText>
            {isEditing ? (
              <TextInput
                style={styles.editInput}
                value={user.phone}
                onChangeText={(text) => handleChangeText('phone', text)}
              />
            ) : (
              <ThemedText style={styles.infoText}>{user.phone}</ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.infoRow}>
            <ThemedText style={styles.label}>Última conexión:</ThemedText>
            <ThemedText style={styles.infoText}>{user.lastSeen}</ThemedText>
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

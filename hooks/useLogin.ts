import { useRouter } from "expo-router";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginPress = () => {
    // Limpia cualquier error anterior
    setError('');
    // Expresiones regulares para validación
    // ^[a-zA-Z0-9]+$ : Permite solo letras (mayúsculas/minúsculas) y números.
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+-={};':"\\|,.<>/?]+$/; // Ejemplo más permisivo
    // const passwordRegex = /^[a-zA-Z0-9]+$/; // Ejemplo solo alfanumérico
    if (!username) {
      return setError('Debe ingresar nombre de usuario')
    }
    if (!password) {
      return setError('Debe ingresar una contraseña')
    }
    if (username.length < 8) {
      return setError('El nombre de usuario debe tener al menos 8 caracteres');
    }
    if (password.length < 8) {
      return setError('La contraseña debe tener al menos 8 caracteres');
    }
    if (!usernameRegex.test(username)) {
      return setError('El nombre de usuario debe solo contener letras y números.');
    }
    if (!passwordRegex.test(password)) {
      return setError('La contraseña solo puede contener letras, números y algunos símbolos.');
    }
    router.push('/(tabs)/chat-list');
  };

  return {
    username,
    password,
    setUsername,
    setPassword,
    error,
    handleLoginPress
  };
};

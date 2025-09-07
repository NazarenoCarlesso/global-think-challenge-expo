import { UserType } from "@/interface";
import { USER_MOCK } from "@/mocks";
import { useState } from "react";

export const useUserEdit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<UserType>(USER_MOCK.profile);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleChangeText = (key: string, value: string) => {
    setUser((state) => ({ ...state, [key]: value }));
  };

  const handleSavePress = () => {
    setIsEditing(false);
  };

  return {
    user,
    isEditing,
    handleEditPress,
    handleChangeText,
    handleSavePress
  };
}
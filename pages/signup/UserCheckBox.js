import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
function UserCheckbox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="checkmark" size={15} color="white" />}
    </Pressable>
  );
}

export default UserCheckbox;
const styles = StyleSheet.create({
    checkboxBase: {
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#EEEEEE',
      backgroundColor: 'white',
    },
  
    checkboxChecked: {
      backgroundColor: '#26C889',
      borderColor: '#26C889',

    },
 

  
  
  
  });
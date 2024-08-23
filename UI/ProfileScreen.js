import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const userProfile = {
  firstName: 'John',
  lastName: 'Cena',
  birthDate: '15/08/1995',
  photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SBFO_34s3mUw1zz2SuAVXn83OArtd8D9GQ&s',
};

export default function ProfileScreen() {
  const calculateAge = (birthDate) => {
    const [day, month, year] = birthDate.split('/').map(Number);
    const birth = new Date(year, month - 1, day);
    const age = new Date().getFullYear() - birth.getFullYear();
    return age;
  };

  const age = calculateAge(userProfile.birthDate);

  if (age < 18 || age > 50) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No estás en el rango de edad permitido.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: userProfile.photo }} style={styles.photo} />
      <Text style={styles.name}>{userProfile.firstName} {userProfile.lastName}</Text>
      <Text style={styles.birthDate}>Fecha de nacimiento: {userProfile.birthDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  birthDate: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Admin Dashboard</Text>
      <Button
        title="Manage Patients"
        onPress={() => navigation.navigate('Patients')}
      />
      <Button
        title="View Appointments"
        onPress={() => navigation.navigate('Appointments')}
      />
      <Button
        title="Generate Reports"
        onPress={() => navigation.navigate('Reports')}
      />
    </View>
  );
}

function PatientsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Patients Management</Text>
    </View>
  );
}

function AppointmentsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Appointments Management</Text>
      </View>
  );
}

function ReportsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Reports Management</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Patients" component={PatientsScreen} />
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;

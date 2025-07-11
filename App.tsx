import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';



const checkUpdate = async () => {
  const update = await Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  }
};


export default function App() {

  useEffect(() => {
    checkUpdate();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Halooooooo!, Vietnamese 121415616</Text>
      <Text>Update OTA</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

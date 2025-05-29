import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';



const checkUpdate = async () => {
  const update = await Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    const isConfirm = confirm("có bản cập nhật mới!");
    if (!isConfirm) return;
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync(); // Khởi động lại app để dùng bundle mới
  }
};


export default function App() {

  useEffect(() => {
    checkUpdate();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Halooooooo!, Vietnamese</Text>
      <Text>Update OTA 1!!!</Text>
      <Text>VNNNNNNNNNNNNNN</Text>
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

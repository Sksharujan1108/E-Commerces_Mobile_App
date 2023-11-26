import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './src/navigation/stack/AuthStack'
import { Provider } from 'react-redux';
import store from './src/feature/store';


export default function App() {
  return (
    <Provider store = {store}>
      <AuthStack />
    </Provider>
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

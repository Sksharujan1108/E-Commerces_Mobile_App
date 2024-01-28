import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './src/navigation/stack/AuthStack'
import { Provider } from 'react-redux';
import store from './src/feature/store';
import { ModalPortal } from 'react-native-modals';
import { UserContext } from './src/Utilis/UserContext';


export default function App() {
  return (
    <Provider store = {store}>
      
      <UserContext>
        <AuthStack />
        <ModalPortal/>
      </UserContext>
      
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

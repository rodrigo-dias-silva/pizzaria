import { StatusBar, View } from 'react-native';
import SignIn from './src/pages/SignIn';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-dark-700'>
      <StatusBar backgroundColor='#1d1d2e' barStyle='light-content' translucent={false} />
      <SignIn />
    </View>
  );
}

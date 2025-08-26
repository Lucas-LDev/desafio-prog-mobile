import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import '../../global.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import WipScreen from '../components/wipScreen';

export default function chatScreen() {
  return (
    <SafeAreaView
      className="flex-1 bg-azul-escuro"
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex-1 bg-branco">
        <Header />
        <ScrollView>
          <WipScreen />
        </ScrollView>
        <NavBar lugar="event" />
      </View>
    </SafeAreaView>
  );
}

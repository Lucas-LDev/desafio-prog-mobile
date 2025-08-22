import { View, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import '../../global.css';
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import NavBar from "../components/NavBar";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-azul-escuro" style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <View className="flex-1 bg-branco">
        <Header variante="pesquisa"/>
        <ScrollView>
          <Tasks />
        </ScrollView>
        <NavBar lugar="home" />
      </View>

    </SafeAreaView>
  );
}

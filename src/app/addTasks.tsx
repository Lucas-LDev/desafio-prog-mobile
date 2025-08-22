import { View, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import '../../global.css';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import CreateTaskForm from "../components/CreateTaskForm";

export default function AddTasks() {
  return (
    <SafeAreaView className="flex-1 bg-azul-escuro" style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <View className="flex-1 bg-branco">
        <Header variante="Criar tarefa"/>
        <ScrollView>
          <CreateTaskForm/>
        </ScrollView>
        <NavBar lugar="add" />
      </View>

    </SafeAreaView>
  );
}

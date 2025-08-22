import { View, Text } from 'react-native';
import AgendaIcon from '../../assets/icons/agenda.svg';
import TasksBySetor from "./TasksBySector";

export default function Tasks() {
  return (
    <View className="flex-1 pt-1 bg-azul-escuro">
      <View className="bg-branco flex-1 gap-3 rounded-t-2xl p-7">
        <View className="flex-row items-center gap-4">
          <Text className="font-semibold text-xl">Canais</Text>
          <AgendaIcon height={24} width={24} />
        </View>
        <TasksBySetor />
      </View>
    </View>
  );
}

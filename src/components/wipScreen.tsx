import { Image, Text, View, TouchableOpacity } from 'react-native';
import BackIcon from '../../assets/icons/arrow_back.svg';
import WipIcon from '../../assets/images/wip.svg';
import { useRouter } from 'expo-router';

export default function WipScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-azul-escuro">
      <View className="bg-branco flex-1 gap-3 rounded-t-2xl p-7 mt-4">
        <TouchableOpacity
          className="w-[24px] h-[24px]"
          onPress={() => router.push('/home')}
        >
          <BackIcon className="top-5 left-5" height={24} width={24} />
        </TouchableOpacity>
        <View className="flex-col items-center mt-20 mb-10">
          <WipIcon width={350} height={300}/>
          <View className="flex-row items-center justify-center">
            <Text className="font-bold font-style: italic text-xl mr-2">
              Oops! Obra Rolando!
            </Text>
            <Text className="text-xl">👷</Text>
          </View>
          <Text className="text-lg">Essa tela ainda está em construção.</Text>
        </View>
      </View>
    </View>
  );
}

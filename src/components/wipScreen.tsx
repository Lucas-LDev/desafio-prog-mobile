import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '../../assets/icons/arrow_back.svg';
import WipImg from '../../assets/images/wip-img.png';

export default function WipScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <View className="flex-1 pt-1 bg-azul-escuro">
                    <View className="bg-branco flex-1 gap-3 rounded-t-2x1 p-7">
                        <BackIcon className="absolute top-5 left-5" height={24} width={24} />
                        <View className="flex-col items-center">
                            <Image source={WipImg} className="mt-20 mb-10" style={{width: 350, height: 300}} />
                                <View className="flex-row items-center justify-center">
                                    <Text className="font-bold font-style: italic text-xl mr-2">Oops! Obra Rolando!</Text>
                                    <Text className="text-xl">👷</Text>
                                </View>
                                <Text className="text-lg">Essa tela ainda está em construção.</Text>
                        </View>
                    </View>
                </View>
        </SafeAreaView>
    )
}

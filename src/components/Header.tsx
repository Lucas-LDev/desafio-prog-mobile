import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import LogoIcon from '../../assets/images/logo.svg';
import PerfilImg from '../../assets/images/foto-perfil.png';
import SearchIcon from '../../assets/icons/search.svg';

type Props = {
  variante?: string;
};

const renderVariante = (variante?: string) => {
  if (variante === 'pesquisa') {
    return (
      <View className="flex-row items-center border border-white px-4 rounded-3xl h-[44px] bg-azul-escuro">
        <TextInput
          placeholder="Pesquise tarefas aqui..."
          className="flex-1 text-branco placeholder:text-branco/80 placeholder:"
        />
        <TouchableOpacity>
          <SearchIcon width={22} height={22} />
        </TouchableOpacity>
      </View>
    );
  } 
};

export default function Header({ variante }: Props) {
  return (
    <View className="bg-azul-escuro p-4 flex-col gap-3">
      <View className="flex-row justify-between items-center overflow-hidden">
        <View className="flex-row items-center gap-1">
          <LogoIcon width={36} height={36} />
          <Text className="font-extrabold text-white">Educação Adventista</Text>
        </View>
        <View>
          <Image
            source={PerfilImg}
            style={{ width: 36, height: 36 }}
            className="rounded-full"
          />
        </View>
      </View>

      {renderVariante(variante)}
    </View>
  );
}

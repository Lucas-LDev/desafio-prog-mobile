import { useRouter } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import AddIcon from '../../assets/nav/add_circle.svg';
import EventIcon from '../../assets/nav/event.svg';
import ForumIcon from '../../assets/nav/forum.svg';
import HomeIcon from '../../assets/nav/home.svg';
import MoreIcon from '../../assets/nav/more.svg';

type Props = {
  lugar: string;
};

export default function NavBar({ lugar }: Props) {
  const router = useRouter();

  const navItems = [
    { icon: HomeIcon, nome: 'home', onPress: () => router.push('/home') },
    {
      icon: ForumIcon,
      nome: 'forum',
      onPress: () => router.push('/chatScreen'),
    },
    { icon: AddIcon, nome: 'add', onPress: () => router.push('/addTasks') },
    {
      icon: EventIcon,
      nome: 'event',
      onPress: () => router.push('/calendarScreen'),
    },
    {
      icon: MoreIcon,
      nome: 'more',
      onPress: () => router.push('/moreOptionsScreen'),
    },
  ];

  return (
    <View className="flex-row justify-between items-center rounded-3xl p-6 bg-azul-escuro overflow-hidden mt-auto max-h-[78px]">
      {navItems.map((item, index) => {
        const IconComponent = item.icon; //aqui é pra ele mudar o icone dinamicamente no map
        const ativo = item.nome === lugar;

        return (
          <TouchableOpacity
            key={index}
            onPress={item.onPress}
            className={ativo ? 'border-b-2 border-white pb-2' : undefined} //pra colocar o border no icon -> por ex.: estou na tela home, ele fica com um border no icon home
          >
            <IconComponent width={30} height={30} />
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

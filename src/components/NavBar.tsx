import { View, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import HomeIcon from '../../assets/nav/home.svg';
import AddIcon from '../../assets/nav/add_circle.svg';
import EventIcon from '../../assets/nav/event.svg';
import ForumIcon from '../../assets/nav/forum.svg';
import LoginIcon from '../../assets/nav/login.svg';

type NavBarProps = {
  lugar: string;
};

export default function NavBar({ lugar }: NavBarProps) {
  const router = useRouter();

  const navItems = [
    { icon: HomeIcon, name: "home", onPress: () => router.push("/") },//home
    { icon: ForumIcon, name: "forum", onPress: () => console.log("conversas") },
    { icon: AddIcon, name: "add", onPress: () => router.push("/addTasks") },//criar tarefas
    { icon: EventIcon, name: "event", onPress: () => console.log("event") },
    { icon: LoginIcon, name: "login", onPress: () => console.log("login") },
  ];

  return (
    <View
      className="flex-row justify-between items-center p-6 bg-azul-escuro rounded-t-3xl overflow-hidden mt-auto"
      style={{ maxHeight: 78 }}
    >
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = item.name === lugar;

        return (
          <TouchableOpacity
            key={index}
            onPress={item.onPress}
            className={isActive ? 'border-b-2 border-white pb-1' : undefined}//pra colocar o border no icon -> por ex. estou na tela home, ele fica com um border no icon home
          >
            <IconComponent width={30} height={30} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

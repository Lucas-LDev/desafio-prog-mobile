import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LogoIcon from '../../assets/images/logo.svg';
import EmailLogo from '../../assets/login/email.svg';
import LockLogo from '../../assets/login/lock.svg';
import PhoneLogo from '../../assets/login/phone.svg';
import WhatsappLogo from '../../assets/login/whatsapp.svg';

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  function Acesso() {
    if (email === 'teste@gmail.com' && senha === '123456') {
      router.push('/home');
    } else {
      alert('Email ou senha de login incorretas, tente novamente.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-azul-escuro items-center justify-center">
        <StatusBar style="light" />

        {/* logo */}
        <View className="mb-20">
          <LogoIcon width={280} height={280} />
        </View>

        {/* input email */}
        <View className="flex-row items-center w-[311px] h-14 mb-7 rounded-full border border-branco bg-branco/40 px-4 m-1">
          <EmailLogo width={18} height={18} />
          <TextInput
            className="px-2 text-cinza-claro placeholder:text-cinza-claro font-semibold w-full"
            placeholder="Email/id"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* input senha */}
        <View className="flex-row items-center w-[311px] h-14 mb-7 rounded-full border border-branco bg-branco/40 px-4 m-1">
          <LockLogo />
          <TextInput
            className="px-2 text-cinza-claro placeholder:text-cinza-claro font-semibold w-full"
            placeholder="Senha"
            inputMode="numeric"
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* botão */}
        <TouchableOpacity
          onPress={Acesso}
          className="rounded-full w-[311px] h-[50px] flex items-center justify-center bg-azul-medio border-2 border-azul-claro mt-5"
        >
          <Text className="text-branco font-bold text-lg text-center">
            Entrar
          </Text>
        </TouchableOpacity>

        {/* rodapé */}
        <View className="w-[269px] mt-16 items-center">
          <Text className="text-branco/60 text-center text-sm">
            Se você estiver tendo problemas, para obter assistência, entre em
            contato
          </Text>
        </View>

        {/* contatos */}
        <View className="flex-row items-center justify-center mt-6">
          <PhoneLogo width={18} height={18} />
          <Text className="text-branco/60 text-sm px-1 pr-5">9 9999-9999</Text>
          <WhatsappLogo width={18} height={18} />
          <Text className="text-branco/60 text-sm px-1">9 9999-9999</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

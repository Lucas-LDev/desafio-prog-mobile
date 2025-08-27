import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import CreateTaskIcon from '../../assets/icons/createTask.svg';
import DropdownCustom from './DropdownCustom';
import InputCustom from './InputCustom';
import Button from './Button';
import useSetores from '../hooks/useSetores';
import { Urgencia } from '../types/tarefa';

const responsaveis = [
  { label: 'Fernanda', value: 'fernanda' },
  { label: 'Carlos', value: 'carlos' },
  { label: 'Roberto', value: 'roberto' },
  { label: 'Patrícia', value: 'patricia' },
  { label: 'Ana', value: 'Ana' },
  { label: 'Isabelly', value: 'isabelly' },
];

const urgencias = [
  { label: 'Urgente', value: 'Urgente' },
  { label: 'Média', value: 'Media' },
  { label: 'Normal', value: 'Normal' },
];

function stringParaUrgencia(valor: string): Urgencia {
  switch (valor) {
    case 'Urgente':
      return Urgencia.Urgente;
    case 'Media':
      return Urgencia.Media;
    case 'Normal':
      return Urgencia.Normal;
    default:
      return Urgencia.Normal;
  }
}

export default function CreateTaskForm() {
  const { adicionarTarefa, setores } = useSetores();
  const dropdownSetores = setores.map((setor) => ({
    label: setor.nome,
    value: setor.id,
  }));

  const [setorId, setSetorId] = useState<string | null>(null);
  const [urgencia, setUrgencia] = useState<string | null>(null);
  const [responsavel, setResponsavel] = useState<string | null>(null);
  const [assunto, setAssunto] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

  const handleCriarTarefa = async () => {
    if (!setorId || !urgencia || !responsavel || !assunto || !descricao) {
      alert('Preencha todos os campos para criar a tarefa!');
      return;
    }
    //convertendo o valor string pra enum
    const urgenciaEnum = stringParaUrgencia(urgencia);
    //adc a tarefa no setor
    await adicionarTarefa(
      setorId,
      assunto,
      descricao,
      responsavel,
      urgenciaEnum
    );
    //limpando os inputs/dropdowns
    setSetorId(null);
    setUrgencia(null);
    setResponsavel(null);
    setAssunto('');
    setDescricao('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 150}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-azul-escuro">
          <View className="bg-branco flex-1 gap-3 rounded-t-2xl p-7 mt-4">
            <View className="flex-row items-center gap-4">
              <Text className="font-semibold text-xl">Criar tarefa</Text>
              <CreateTaskIcon height={24} width={24} />
            </View>

            <View className="flex-col gap-5 w-full">
              <DropdownCustom
                label="Setor:"
                data={dropdownSetores}
                value={setorId}
                onChange={setSetorId}
              />
              <InputCustom
                label="Assunto:"
                value={assunto}
                onChange={setAssunto}
                placeholder="Digite o assunto..."
              />
              <InputCustom
                label="Descrição:"
                value={descricao}
                onChange={setDescricao}
                placeholder="Descreva a tarefa..."
              />
              <DropdownCustom
                label="Responsável:"
                data={responsaveis}
                value={responsavel}
                onChange={setResponsavel}
              />
              <DropdownCustom
                label="Urgência:"
                data={urgencias}
                value={urgencia}
                onChange={setUrgencia}
              />
              <Button label="Criar tarefa" onPress={handleCriarTarefa} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

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

const setores = [
  { label: 'T.I', value: 'ti' },
  { label: 'Financeiro', value: 'fin' },
  { label: 'Secretaria', value: 'sec' },
  { label: 'Coordenação', value: 'coor' },
  { label: 'Orientação de disciplina', value: 'odd' },
];

const responsaveis = [{ label: 'Fernanda', value: 'fernanda' }];

const urgencias = [
  { label: 'Urgente', value: 'urgente' },
  { label: 'Média', value: 'media' },
  { label: 'Normal', value: 'normal' },
];

export default function CreateTaskForm() {
  const [setor, setSetor] = useState<string | number | null>(null);
  const [urgencia, setUrgencia] = useState<string | number | null>(null);
  const [responsavel, setResponsavel] = useState<string | number | null>(null);
  const [assunto, setAssunto] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

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
                data={setores}
                value={setor}
                onChange={setSetor}
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
              <Button
                label="Criar tarefa"
                onPress={() => console.log(setor, assunto, descricao, urgencia)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

import { Tarefa, Urgencia } from '../types/tarefa';
import { Setor } from '../types/setores';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

//pra simular ids únicos, eu vou usar um date.now com um contador, daí o id smp vai ser diferente, e eu transformo pra string
let contador = 0;
const gerarId = () => (Date.now() + contador++).toString();

const setoresInciais: Setor[] = [
  new Setor(gerarId(), 'T.I', [
    new Tarefa(
      gerarId(),
      'Computador administrativo com problema',
      'Computador da sala 202 apresenta erros de tela azul.',
      false,
      'Camila',
      Urgencia.Urgente
    ),
    new Tarefa(
      gerarId(),
      'Impressora sem tinta',
      'Impressora Hp 2546, da secretaria está sem tinta preta.',
      false,
      'Fernanda',
      Urgencia.Urgente
    ),
    new Tarefa(
      gerarId(),
      'Criar novo login do app',
      'Criar novo login administrativo para o novo assistente de T.I. Nome: Marcelo',
      false,
      'Camila',
      Urgencia.Normal
    ),
  ]),
  new Setor(gerarId(), 'Financeiro', [
    new Tarefa(
      gerarId(),
      'Pagamento atrasado',
      'Professor Marcos relata falta de pagamento referente ao mês anterior.',
      false,
      'Gabriel',
      Urgencia.Urgente
    ),
  ]),
  new Setor(gerarId(), 'Secretaria'),
  new Setor(gerarId(), 'Coordenação'),
  new Setor(gerarId(), 'Orientação e disciplina'),
  new Setor(gerarId(), 'Outros'),
];

export default function useSetores() {
  const [setores, setSetores] = useState<Setor[]>([]);

  useEffect(() => {
    (async () => {
      const dados = await AsyncStorage.getItem('setoresComTarefas');
      if (dados) {
        //aqui se tiver os dados, eu recrio os setores/tarefas, para eu poder usar os métodos de inserção de tarefas e a conclusão de tarefas
        const parsed = JSON.parse(dados);
        const recriandoSetores = parsed.map(
          (setor: any) =>
            new Setor(
              setor.id,
              setor.nome,
              setor.tarefas.map(
                (tarefa: any) =>
                  new Tarefa(
                    tarefa.id,
                    tarefa.assunto,
                    tarefa.descricao,
                    tarefa.concluida,
                    tarefa.responsavel,
                    tarefa.urgencia
                  )
              )
            )
        );
        setSetores(recriandoSetores);
      } else {
        //caso seja a 1 vez entrando no app ele vai criar os setores com as tarefas
        setSetores(setoresInciais);
        await AsyncStorage.setItem(
          'setoresComTarefas',
          JSON.stringify(setoresInciais)
        );
      }
    })();//aqui eu já chamo ela quando o app iniciar
  }, []);

  //aqui é o método auxiliar que ele vai usar pra sobreescrever os setores do async storage e tbm os a lista de setores do useState
  const salvarAleracoes = async (setoresAtualizados: Setor[]) => {
    setSetores(setoresAtualizados);
    await AsyncStorage.setItem(
      'setoresComTarefas',
      JSON.stringify(setoresAtualizados)
    );
  };

  const adicionarTarefa = async (
    setorId: string,
    assunto: string,
    descricao: string,
    responsavel: string,
    urgencia: Urgencia
  ) => {
    const setor = setores.find((setor) => setor.id === setorId);
    if (!setor) {
      return console.log('Setor não encontrado.');
    }
    const novaTarefa = new Tarefa(
      gerarId(),
      assunto,
      descricao,
      false, //pra tarefa iniciar como pendente
      responsavel,
      urgencia
    );
    setor.adicionarTarefa(novaTarefa);
    await salvarAleracoes([...setores]);//aqui ele faz uma cópia dos setores e já salva chamando o método de salvar
  };

  const alterarEstado = async (setorId: string, tarefaId: string) => {
    const setor = setores.find((setor) => setor.id === setorId);
    if (!setor) {
      return console.log('Setor não encontrado.');
    }
    const tarefa = setor.tarefas.find((tarefa) => tarefa.id === tarefaId);
    if (!tarefa) {
      return console.log('Tarefa não encontrada.');
    }
    tarefa.alterarEstado();
    salvarAleracoes([...setores]);
  };

  return {setores, salvarAleracoes, adicionarTarefa, alterarEstado};
}

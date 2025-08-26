import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import ArrowIcon from '../../assets/icons/arrow.svg';
import HashtagIcon from '../../assets/icons/hashtag.svg';
import WarningIcon from '../../assets/icons/warning.svg';

enum Urgencia {
  Urgente = 1,
  Media = 2,
  Normal = 3,
}

type Tarefa = {
  titulo: string;
  urgencia: Urgencia;
  descricao: string;
  concluida: boolean;
};

type Setor = {
  nome: string;
  tarefas: Tarefa[];
};

const setores: Setor[] = [
  {
    nome: 'T.I',
    tarefas: [
      {
        titulo: 'Reserva de salas de audiovisual',
        urgencia: Urgencia.Normal,
        descricao: 'Reservar a sala entre os horários 09:00 até 10:00 do dia 20/08/25.',
        concluida: false,
      },
      {
        titulo: 'Criar login para a professora Manuela',
        urgencia: Urgencia.Normal,
        descricao: 'Nome da professora: criar login com o nome Manuela Fulana',
        concluida: true,
      },
      {
        titulo: 'Computador administrativo com problema',
        urgencia: Urgencia.Urgente,
        descricao: 'Computador da sala 302 apresenta problema de tela azul.',
        concluida: true,
      },
      {
        titulo: 'Computador com problema',
        urgencia: Urgencia.Urgente,
        descricao: 'Computador 07 do laboratório de informática não tem acesso à internet.',
        concluida: false,
      },
      {
        titulo: 'Reserva de computadores',
        urgencia: Urgencia.Media,
        descricao: 'Reservar 05 laptops para a turma 9° ano B, no dia 19/08/25, para o primeiro horário da manhã.',
        concluida: false,
      },
    ],
  },
  {
    nome: 'Financeiro',
    tarefas: [
      {
        titulo: 'Problema no pagamento',
        urgencia: Urgencia.Urgente,
        descricao:
          'Professor Henrique afirma que não recebeu o pagamento referente ao mês anterior.',
        concluida: false,
      },
    ],
  },
  {
    nome: 'Secretaria',
    tarefas: [],
  },
  {
    nome: 'Coordenação',
    tarefas: [],
  },
  {
    nome: 'Orientação de disciplina',
    tarefas: [],
  },
];

//organizando as tarefas por prioridade
setores.forEach(setor => {
  setor.tarefas.sort((t1, t2) => t1.urgencia - t2.urgencia);
});
//organizando as tarefas por conclusao
setores.forEach(setor => {
  setor.tarefas.sort((t1, t2) => Number(t1.concluida) - Number(t2.concluida));
});

const corUrgencia = (urgencia: Urgencia) => {
  switch (urgencia) {
    case Urgencia.Urgente:
      return 'bg-vermelho';
    case Urgencia.Media:
      return 'bg-amarelo';
    case Urgencia.Normal:
      return 'bg-verde';
    default:
      return 'bg-verde';
  }
};

export default function TasksBySetor() {
  const [abrirSetor, setAbrirSetor] = useState<{ [key: string]: boolean }>({});
  const [abrirTarefa, setAbrirTarefa] = useState<{ [key: string]: boolean }>(
    {}
  );

  const alterarEstadoSetor = (nome: string) => {
    //esse ...prev vai copiar o estado dos setores anteriores pra que fiquem aberto/fechados, por ex. mas inverte o estado do setor que eu cliquei, se aberto ->agr fechado... caso a gente queira que quando clique num setor, feche outro é só mudar aqui o prev
    setAbrirSetor((prev) => ({ ...prev, [nome]: !prev[nome] }));
  };
  const alterarEstadoTarefa = (setorNome: string, tarefaTitulo: String) => {
    const id = `${setorNome}-${tarefaTitulo}`;
    setAbrirTarefa((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View className="flex-1 gap-4 p-3">
      {setores.map((setor) => (
        <View key={setor.nome}>
          <TouchableOpacity
            onPress={() => alterarEstadoSetor(setor.nome)}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-center gap-2">
              <HashtagIcon />
              <Text className="font-normal text-lg">{setor.nome}</Text>
            </View>

            <View className="flex-row gap-3">
              {setor.tarefas.length > 0 && (
                <WarningIcon height={20} width={20}/>
              )}
              <ArrowIcon height={20} width={20} />
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={!abrirSetor[setor.nome]}>
            <View className="mt-5 pl-2 border-b border-cinza-claro">
              {setor.tarefas.length === 0 ? (
                <Text className="pb-2">Não há tarefas pendentes neste setor</Text>
              ) : (
                setor.tarefas.map((tarefa) => {
                  const id = `${setor.nome}-${tarefa.titulo}`;
                  return (
                    <View key={id} className="mb-5">
                      <TouchableOpacity
                        className="flex-row justify-between items-start"
                        onPress={() =>
                          alterarEstadoTarefa(setor.nome, tarefa.titulo)
                        }
                      >
                        <View className="flex-row items-baseline gap-2 max-w-[240px]">
                          <View className={`w-2 h-2 bg-preto rounded`}></View>
                          <Text
                            className={`text-base ${tarefa.concluida ? 'line-through' : ''}`}
                          >
                            {tarefa.titulo}
                          </Text>
                        </View>

                        <View className="flex-row items-center gap-3">
                          <View
                            className={`h-1 w-8 ${corUrgencia(tarefa.urgencia)}`}
                          ></View>
                          <ArrowIcon height={12} width={12} />
                        </View>
                      </TouchableOpacity>

                      <Collapsible collapsed={!abrirTarefa[id]}>
                        {tarefa.descricao ? (
                          <Text className="pl-5 text-sm">
                            Descrição: {tarefa.descricao}
                          </Text>
                        ) : (
                          <Text className="pl-5 text-sm">
                            Não existe descrição para esta tarefa.
                          </Text>
                        )}
                      </Collapsible>
                    </View>
                  );
                })
              )}
            </View>
          </Collapsible>
        </View>
      ))}
    </View>
  );
}

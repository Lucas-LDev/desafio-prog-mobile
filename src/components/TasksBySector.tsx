import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import ArrowIcon from '../../assets/icons/arrow.svg';
import HashtagIcon from '../../assets/icons/hashtag.svg';
import WarningIcon from '../../assets/icons/warning.svg';
import { Urgencia } from '../types/tarefa';
import useSetores from '../hooks/useSetores';

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
  const { setores, alterarEstado } = useSetores();
  //organizando as tarefas por prioridade
  setores.forEach((setor) => {
    setor.tarefas.sort((t1, t2) => t1.urgencia - t2.urgencia);
  });
  //organizando as tarefas por conclusao
  setores.forEach((setor) => {
    setor.tarefas.sort((t1, t2) => Number(t1.concluida) - Number(t2.concluida));
  });

  const alterarEstadoSetor = (nome: string) => {
    //esse ...prev vai copiar o estado dos setores anteriores pra que fiquem aberto/fechados, por ex. mas inverte o estado do setor que eu cliquei, se aberto ->agr fechado... caso a gente queira que quando clique num setor, feche outro é só mudar aqui o prev
    setAbrirSetor((prev) => ({ ...prev, [nome]: !prev[nome] }));
  };
  const alterarEstadoTarefa = (tarefaId: string) => {
    setAbrirTarefa((prev) => ({ ...prev, [tarefaId]: !prev[tarefaId] }));
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
                <WarningIcon height={20} width={20} />
              )}
              <ArrowIcon height={20} width={20} />
            </View>
          </TouchableOpacity>

          <Collapsible collapsed={!abrirSetor[setor.nome]}>
            <View className="mt-5 pl-2 border-b border-cinza-claro">
              {setor.tarefas.length === 0 ? (
                <Text className="pb-2">
                  Não há tarefas pendentes neste setor
                </Text>
              ) : (
                setor.tarefas.map((tarefa) => {
                  return (
                    <View key={tarefa.id} className="mb-5">
                      <TouchableOpacity
                        className="flex-row justify-between items-start"
                        onPress={() =>
                          alterarEstadoTarefa(tarefa.id)
                        }
                      >
                        <View className="flex-row items-baseline gap-2 max-w-[240px]">
                          <View className={`w-2 h-2 bg-preto rounded`}></View>
                          <Text
                            className={`text-base ${tarefa.concluida ? 'line-through' : ''}`}
                          >
                            {tarefa.assunto}
                          </Text>
                        </View>

                        <View className="flex-row items-center gap-3">
                          <View
                            className={`h-1 w-8 ${corUrgencia(tarefa.urgencia)}`}
                          ></View>
                          <ArrowIcon height={12} width={12} />
                        </View>
                      </TouchableOpacity>

                      <Collapsible collapsed={!abrirTarefa[tarefa.id]}>
                        <View>
                          <Text className="pl-5 text-sm">
                            Descrição: {tarefa.descricao}
                          </Text>
                          <TouchableOpacity
                            onPress={() => alterarEstado(setor.id, tarefa.id)}
                            className="pl-5 w-[190px] mt-1"
                          >
                            <Text
                              className={`text-sm text-center text-branco p-2 rounded-lg ${tarefa.concluida ? 'bg-red-500' : 'bg-green-500'}`}
                            >
                              {tarefa.concluida
                                ? 'Marcar como pendente'
                                : 'Marcar como concluída'}
                            </Text>
                          </TouchableOpacity>
                        </View>
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

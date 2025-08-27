import { Tarefa } from './tarefa';

export class Setor {
  constructor(
    public id: string,
    public nome: string,
    public tarefas: Tarefa[] = []
  ) {}

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }
}
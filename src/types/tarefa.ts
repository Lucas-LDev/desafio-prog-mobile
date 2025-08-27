export enum Urgencia {
  Urgente = 1,
  Media = 2,
  Normal = 3,
}

export class Tarefa {
  constructor(
    public id: string,
    public assunto: string,
    public descricao: string,
    public concluida: boolean = false,
    public responsavel: string,
    public urgencia: Urgencia
  ) {}

  alterarEstado() {
    this.concluida = !this.concluida;
  }
}
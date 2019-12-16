export class Tarefa {
    private nome: string;
    private responsavel: string;

    public constructor(nome: string, resposavel: string) {
        this.nome = nome;
        this.responsavel = resposavel;
    }

    public getNome(): string {
        return this.responsavel;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public getResponsavel(): string {
        return this.responsavel;
    }
    public setResponsavel(responsavel: string) {
        this.responsavel = responsavel;
    }
}
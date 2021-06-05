export interface Usuario {
    codigo?:number;
    nome: string;
    rg?: string;
    cpf:string;
    dataCadastro?: Date;
    endereco?: string;
    telefone?: string;
    email?: string; 
    senha?:string;
    admin?: false;
}
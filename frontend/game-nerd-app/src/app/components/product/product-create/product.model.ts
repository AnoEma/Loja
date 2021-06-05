
export interface Produto {
    id?:number;
    codigoItem?:string;
    nome: string;
    categoria?: string;
    preco?: number;
    dataCadastro?: Date;
}
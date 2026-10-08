import { Injectable } from "@nestjs/common";
@Injectable()
export class ProdutosService{
produtos = [
    {id: 0, nome: 'Arroz Namorados', preco: 9.90},
    {id: 1, nome: 'Feijão Timbiras', preco: 9.90},
    {id: 2, nome: 'Macarrão Galo', preco: 9.90},
    {id: 3, nome: 'Açúcar União', preco: 9.90},
    {id: 4, nome: 'Sal Lebre', preco: 9.90}



           ];
listaProdutos(){
    return this.produtos;
    }
}

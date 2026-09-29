import { Controller, Get, Post, Body, Patch, Delete, Param, HttpCode } from "@nestjs/common";
import { CriarConvidadoDto } from "./criar-convidado.dto.js";
import { COnvidadosService } from "./convidados.service.js";


@Controller('convidados')
export class ConvidadosController {

    constructor(private readonly convidadoService: COnvidadosService){

    }
    @Get()
    listarConvidados(){
    return this.convidadoService.listarConvidados();
    }
    @Post()
    criarConvidado(@Body() criarConvidado: CriarConvidadoDto){
        console.log(`[Operador Gabs] Novo(a) Convidado(a) Registrado(a): ${criarConvidado.nome}`)
        return{
            mensagem: `Convidado(a) ${criarConvidado.nome}, foi adicionado(a) com sucesso!`,
            dados: criarConvidado,
        };
    }
    @Patch(':id')
        atualizarIdade(@Param('id') id: string, @Body('idade') idade: number){
        console.log(`[ADMINISTRADOR] Atualizando idade do ID ${id}`);
        return this.convidadoService.atualizarIdade(+id, idade)
        }
        @Delete(':id')
        @HttpCode(204)
        removerConvidado(@Param('id') id:string){
            console.log(`[ADMINISTRADOR] Convidado com ID ${id} removido com Sucesso!`);
            this.convidadoService.removerConvidadoLista(+id);
        }

}
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags, ApiResponse, ApiOperation, ApiOkResponse, ApiQuery, } from "@nestjs/swagger";

@ApiTags('alunos')
@Controller('alunos')
export class AlunosController{
constructor (private readonly alunosService: AlunosService){}

@Post()
@ApiOperation({
    summary: 'Criar a matricula do aluno',
})
@ApiResponse({
    status: 200,
    description:'Aluno criado com sucesso',
})
@ApiResponse({
    status:400,
    description: 'Requisição inválida ou dados de entrada incorretos/mal formatados.'
})
create(@Body() CreateAlunoDto: CreateAlunoDto){
    return this.alunosService.create(CreateAlunoDto);
}

//@Get()
//@ApiOperation({
    //summary: 'listar todos os alunos',
//})
//@ApiResponse({
    //status:200,
    //description: 'lista de alunos retornada com sucesso',
//})
//@ApiResponse({
    //status:404,
    //description:'nenhum aluno encontrado',
//})
//findAll(){
    //return this.alunosService.findAll();
//}
@Get()
@ApiOperation({
    summary:'listar alunos com paginação',
})

@ApiResponse({
    status: 200,
    description:'Lista de alunos retornada com exito'
})
@ApiResponse({
    status:404,
    description:'Nenhum aluno encontrado',
})
@ApiResponse({
    status:500,
    description:'Erro interno no servidor'
})
@ApiQuery({
    name:'page',
    required:false,
    type:Number,
    description:'Númerico da pagina (padrão: 1)'
})
@ApiQuery({
    name:'limit',
    required:false,
    type:Number,
    description:'Númerico de itens por pagina (padrão: 10)'
})
@ApiQuery({
    name:'nome',
    required:false,
    type:String,
    description: 'Filtrar alunos por curso (exemplo: Jamilly)'

})

@ApiQuery({
    name:'curso',
    required:false,
    type:String,
    description: 'Filtrar alunos por curso (exemplo: Informatica)'

})


findPage(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('nome') nome?:string,
        @Query('curso') curso?:string,
    ) {
        return this.alunosService.findPage(page, limit, nome, curso);
    }

@Get(':id')
@ApiOperation({
    summary: 'Obter detalhes de um aluno especifico',
})
@ApiResponse({
    status:200,
    description: 'Detalhes retornados com exito'
})
@ApiResponse({
    status:404,
    description:'não foi  possivel buscar detalhes do aluno'
})
    findOne(@Param('id') id: string) {
        return this.alunosService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'atualizar informações de um aluno especifico.',
    })
    @ApiResponse({
        status:200,
        description: 'informações do aluno atualizadas com sucesso'
    })
    @ApiResponse({
        status:404,
        description:'atualizações não puderam ser atualizadas'
 
    })
    update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
        return this.alunosService.update(id, updateAlunoDto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Remover aluno especifico',
    })
    @ApiResponse({
        status:200,
        description: 'aluno removido com exito',
    })
    @ApiResponse({
        status: 404,
        description: 'não foi possivel remover aluno'
    })
    remove(@Param('id') id: string) {
        return this.alunosService.remove(id);
    }
}
import { IsString, IsNotEmpty, IsInt, Min, IsArray, ArrayMinSize, } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty({
        example:'gabriel cardoso Rodrigues',
        description:'nome do aluno'
    })
    @IsString()
    @IsNotEmpty({
        message: 'o nome do aluno é obrigatório e não pode estar vazio!'
    })
    nome: string;

    @ApiProperty({
        example:18,
    })
    @IsInt({
        message:'A idade deve ser um numero inteiro'
    })
    @Min(0, {
        message: 'A idade não pode ser negativa.'
    })
    @IsNotEmpty()
    idade: number;
    
    @ApiProperty({
        example: '2334',
        description: 'matricula do aluno'
    })
    @IsString()
    @IsNotEmpty({
        message: 'a matricula é obrigatória e unica!!'
    })
    matricula:string;
    
    @ApiProperty({
        description: 'cursos do aluno ',
        example: ['ciencia da informação', 'Letras']
    })
    @IsString({each: true, message: 'cada curso deve ser texto'})
    @IsArray()
    @ArrayMinSize(1,{
        message: 'o aluno deve estar matriculo em pelo menos um curso'
    })
    curso:string[];

}
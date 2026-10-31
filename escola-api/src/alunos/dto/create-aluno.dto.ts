import { IsString, IsNotEmpty, IsInt, Min, IsArray, ArrayMinSize, } from "class-validator";




export class CreateAlunoDto {
    @IsString()
    @IsNotEmpty({
        message: 'o nome do aluno é obrigatório e não pode estar vazio!'
    })
    nome: string;

    @IsInt({
        message:'A idade deve ser um numero inteiro'
    })
    @Min(0, {
        message: 'A idade não pode ser negativa.'
    })
    @IsNotEmpty()
    idade: number;
    
    @IsString()
    @IsNotEmpty({
        message: 'a matricula é obrigatória e unica!!'
    })
    matricula:string;
    
    @IsString({each: true, message: 'cada curso deve ser texto'})
    @IsArray()
    @ArrayMinSize(1,{
        message: 'o aluno deve estar matriculo em pelo menos um curso'
    })
    curso:string[];

}
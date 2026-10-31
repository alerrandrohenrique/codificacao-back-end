import { Injectable, NotFoundException, } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { Aluno, AlunoDoc } from "./schemas/aluno.schema.js";

@Injectable()
export class AlunosService {
    constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDoc>) { }


    //! CRUD
    //! C = criar
    //! R = ler/consultar
    //! U = atualizar
    //! D = Delete

    async create(CreateAlunoDto: CreateAlunoDto): Promise<Aluno> {
        const CreateAluno = new this.alunoModel(CreateAlunoDto);
        return CreateAluno.save();
    }
    async findAll(): Promise<Aluno[]> {
        return this.alunoModel.find().exec();
    }
   async findOne(id: string): Promise <Aluno> {
        const aluno = await this.alunoModel.findById(id).exec();
        if (!aluno) {
            throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);
        }
        return aluno;
    }
    async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
        const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id, updateAlunoDto, {
            new: true 
        }).exec();

        if (!alunoAtualizado){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);
        }
        return alunoAtualizado;
    }

    async remove(id: string): Promise<Aluno> {
      const alunoremovido = await this.alunoModel.findByIdAndDelete(id).exec();
      
      if (!alunoremovido){
        throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);

      }
      return alunoremovido;
    }
}
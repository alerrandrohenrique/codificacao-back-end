import { Controller, Post, Body, UsePipes, } from "@nestjs/common";
import { colaboradorSchema, } from "./colaborador.schema.js";
import { ZodValidationPipe } from "./zod-validation.pipe.js";
import type { colaborador } from "./colaborador.schema.js";

@Controller('colaboradores')
export class colaboradoresController {
    @Post()
    @UsePipes(new ZodValidationPipe(colaboradorSchema))
    async create (@Body() body: colaborador){
        return{
            Mensagem: 'Colaborador cadrastado com sucesso',
            dados: body,
        };
    };
};
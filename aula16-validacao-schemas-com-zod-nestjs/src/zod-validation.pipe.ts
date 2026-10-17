import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { z } from 'zod';

export class ZodValidationPipe implements PipeTransform{
    constructor (private schema: z.ZodType){
    }

    transform(value: unknown, metadata: ArgumentMetadata) {
        if(metadata.type !== 'body') return value;
        const parseResult = this.schema.safeParse(value);
        if(!parseResult.success){
            const formatedErrors = parseResult.error.issues.map((issues) =>({
                campo: issues.path.join('.'),
                mensagem: issues.message,
            }));
            throw new BadRequestException({
                statusCode:400,
                errors: formatedErrors
            });
        }
        return parseResult.data;
    }
}

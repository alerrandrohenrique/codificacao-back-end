import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { AlunosService } from "./alunos/alunos.service.js";
import { faker } from '@faker-js/faker/locale/pt_BR'


async function  bootstrap () {
      const app = await NestFactory.createApplicationContext(AppModule);
      const alunosService = app.get(AlunosService);

      console.log('Iniciando a geração de Faker alunos...');
      const cursosDisponiveis =[
        'Programdor Full-Stack',
        'Panificação',
        'Excel Básico',
        'Power BI Básico',
        'Apresentações Criativas no Canva',
        'Corte e Costura',
        'Tecnico em Biotecnologia',
        'Tecnico em Informatica',
        'Tecnico em Desenvolvimento de Jogos Digitais',
        'Tecnico em Manutenção e Suporte em Informática'
      ];
      
      for(let i = 0; i < 150; i++) {
        const cursosAleatorios = faker.helpers.arrayElements
        (cursosDisponiveis,{min: 1, max: 3});
        const alunofaker = {
            nome: faker.person.fullName(),
            idade: faker.number.int({
                min:16,
                max:65,
            }),
            matricula: faker.string.numeric(5),
            curso: cursosAleatorios,
            ativo: true,
        };
        try{
            await alunosService.create(alunofaker)
        }catch(error){
            console.log(`Pular: erro ao criar Matricula para ${alunofaker} - matricula duplicada`);
        }
      }
      console.log('Banco de dados populado com sucesso')
      await app.close();
}
bootstrap();

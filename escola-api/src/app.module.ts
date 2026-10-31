import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { AlunosModule } from './alunos/alunos.module.js';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/escola_dbn'),
    AlunosModule
  ],
  
  controllers:[],
  providers: [],

})
export class AppModule {}
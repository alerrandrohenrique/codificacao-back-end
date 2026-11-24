import { Controller, Inject, Module } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { AlunosModule } from './alunos/alunos.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService, } from '@nestjs/config'
import Joi from 'joi'
import databaseConfig from './Config/database.config.js';
import authConfig from './Config/auth.config.js';


@Module({
  imports: [
    
    AlunosModule,
    ConfigModule.forRoot({
      isGlobal:true,
      load: [databaseConfig, authConfig],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test')
        .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_URI: Joi.string().required(),
         JWT_SECRET: Joi.string().required(),

      }),
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      
      useFactory:(dbConfig: ConfigType<typeof databaseConfig>) => ({
        uri: dbConfig.uri,
        maxPoolSize: dbConfig.maxPoolSize
      }),
      inject:[databaseConfig.KEY]
    }),
  ],
  controllers:[],
  providers: [],

})
export class AppModule {}
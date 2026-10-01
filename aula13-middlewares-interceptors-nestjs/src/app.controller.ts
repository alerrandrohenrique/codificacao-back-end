import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController{
  @Get()
  getPublic(){
    return{
      mensagem:'rota publica acessada com exito',
      data: new Date(),
    }
  }
  @Get('admin')
  getprivate(){
    return {
      mensagem: 'bem-vindo ao painel administrativo',
      data: new Date(),
    }
  }
}

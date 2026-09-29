import { Module } from "@nestjs/common";
import { imagemController } from "./imagem.controller.js";

@Module({
    controllers:[imagemController,]
})


export class ImagemModule{}
import fs from 'fs';

const data = new Date().toISOString().split('T')[0];
const hora = new Date().toLocaleTimeString();

const streamEscrita = fs.createWriteStream('servidor.log');
console.log('Gerando arquivo de log simulando...');

for ( let i = 0; i <400000; i++){
     const tipo = i % 7 === 0 ? 'Error' : 'INFO';
    streamEscrita.write(`[${data} - ${hora}] Linha ${i}: status 200 - mensagem de teste ${tipo} \n`);
 }
 streamEscrita.end();

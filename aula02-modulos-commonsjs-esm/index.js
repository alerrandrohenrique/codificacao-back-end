import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formatLog } from './utilitario.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarlogSistema(mensagemlog){
    try{
        const pastaLog = path.join(__dirname, 'Logs');
        const arquivoLog = path.join(pastaLog, 'syslog.log');

        await fs.mkdir(pastaLog, {recursive:true});
        const registro = formatLog(mensagemlog);
        await fs.appendFile(arquivoLog, registro, 'utf-8');
        console.log('Log Registrado com sucesso...')
    }catch(error){
        console.error('Erro ao Registrado log: ', erro);
    }
}

salvarlogSistema('Inicialização do servidor concluída!\n');
salvarlogSistema('Conexão com o banco de dados estabelecida!\n');
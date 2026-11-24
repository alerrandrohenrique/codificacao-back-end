import { registerAs } from "@nestjs/config";
import { parse } from "path";

export default registerAs('database', () => ({
    uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/escola_dbn',
    maxPoolSize: parseInt(process.env.Max_POOL_SIZE || '10', 10)

}));

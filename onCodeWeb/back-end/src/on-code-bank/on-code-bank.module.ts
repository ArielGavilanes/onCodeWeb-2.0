import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
const models = [

]
@Module({
    imports: [
        //Connection for the second database onCodeBank
        SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1229tqmj',
        database: 'onCodeBank',
        autoLoadModels: true,
        synchronize: true,
        name: 'baseTransaccional',
        models: models
        }),
        
    ]
})
export class OnCodeBankModule {}

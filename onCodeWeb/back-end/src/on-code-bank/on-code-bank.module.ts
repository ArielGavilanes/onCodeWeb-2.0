import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientesModule } from './clientes/clientes.module';
import { CuentasBancariasModule } from './cuentas-bancarias/cuentas-bancarias.module';
import { TarjetasModule } from './tarjetas/tarjetas.module';
import { Clientes } from './clientes/models/clientes.model';
import { CuentasBancarias } from './cuentas-bancarias/models/cuentas-bancarias.model';
import { Tarjetas } from './tarjetas/models/tarjetas.model';
const models = [
    Clientes,
    CuentasBancarias,
    Tarjetas
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
        ClientesModule,
        CuentasBancariasModule,
        TarjetasModule,
        
    ]
})
export class OnCodeBankModule {}

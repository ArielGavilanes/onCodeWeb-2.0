import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cursos_Estudiantes } from 'src/on-code-web/cursos_estudiantes/models/cursos_estudiantes.model';
import { DetalleTransacciones } from 'src/on-code-web/detalle-transacciones/models/detalle-transacciones.model';
import { Transacciones } from 'src/on-code-web/transacciones/models/transacciones.model';
import { TransactionService } from './transaction/services/transaction/transaction.service';
import { TransactionController } from './transaction/controllers/transaction/transaction.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Transacciones,
      Cursos_Estudiantes,
      DetalleTransacciones,
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}

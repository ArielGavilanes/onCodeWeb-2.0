import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DetalleTransacciones } from 'src/on-code-web/detalle-transacciones/models/detalle-transacciones.model';
import { Transacciones } from 'src/on-code-web/transacciones/models/transacciones.model';
import { TransactionDTO } from '../../dto/transaction.dto';
import { Sequelize } from 'sequelize';
import { Cursos_Estudiantes } from 'src/on-code-web/cursos_estudiantes/models/cursos_estudiantes.model';
import { CuentasBancarias } from 'src/on-code-bank/cuentas-bancarias/models/cuentas-bancarias.model';

@Injectable()
export class TransactionService {
    sequelize: any;

    constructor( 
        @InjectModel(DetalleTransacciones)
        private readonly detalleTransaccion: typeof DetalleTransacciones,
        @InjectModel(Transacciones)
        private readonly transacciones: typeof Transacciones,
        @InjectModel(Cursos_Estudiantes)
        private readonly cursosEstudiantes: typeof Cursos_Estudiantes,
        ) {
            this.sequelize = DetalleTransacciones.sequelize;
        }

    async comprarCurso(transactionDTO: TransactionDTO): Promise<void> {
        
        const {
            id_curso_dto,
            cedula_e_dto,
            cedula_c_dto,
        } = transactionDTO

        const datosForDetalles = {
            id_curso : id_curso_dto
        }

        

        const t1 = await this.sequelize.transaction();
        
        try {
        
            const detalleCreate = await this.detalleTransaccion.create(datosForDetalles, {transaction: t1})

            const datosForTransaction = {
                estado: true,
                id_detalle_transaccion: detalleCreate.id_detalle_transaccion,
                cedula_creador: cedula_c_dto,
                cedula_estudiante: cedula_e_dto
            }

            const transactionCreate = await this.transacciones.create(datosForTransaction, {transaction: t1})

            const datosForCursosEstudiantes = {
                estado: true,
                id_curso: id_curso_dto,
                cedula: cedula_e_dto
            }

            const cursosEstudiantesCreate = await this.cursosEstudiantes.create(datosForCursosEstudiantes, {transaction: t1})

            
            await t1.commit()

        } catch (error) {
            console.log('Error en t1', error)

            await t1.rollback()
        }

    }

}
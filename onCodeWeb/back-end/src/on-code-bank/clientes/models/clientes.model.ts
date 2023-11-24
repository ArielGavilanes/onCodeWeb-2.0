import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
import { CuentasBancarias } from 'src/on-code-bank/cuentas-bancarias/models/cuentas-bancarias.model';

//Table Clientes of onCodeBank
@Table({ timestamps: false }) 
export class Clientes extends Model {
    @Column({
        type: DataType.STRING(10),
        allowNull: false,
        primaryKey: true,
        })
        cedula: string;
    
        @Column({
        type: DataType.STRING(50),
        allowNull: false,
        })
        primer_nombre: string;
    
        @Column({
        type: DataType.STRING(50),
        allowNull: false
        })
        segundo_nombre: string;
    
        @Column({
        type: DataType.STRING(50),
        allowNull: false
        })
        primer_apellido: string;
    
        @Column({
        type: DataType.STRING(50),
        allowNull: false
        })
        segundo_apellido: string;
        
        @Column({
        type: DataType.STRING(10),
        allowNull: false
        })
        n_telefono: string;

        @Column({
        type: DataType.STRING(50),
        allowNull: false
        })
        email: string;

        //Relationship with CuentasBancarias
        @HasMany(() => CuentasBancarias)
        Clientes_CuentasBancarias: CuentasBancarias[]
    
    
}
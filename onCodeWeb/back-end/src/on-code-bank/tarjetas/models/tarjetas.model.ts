import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CuentasBancarias } from 'src/on-code-bank/cuentas-bancarias/models/cuentas-bancarias.model';


//Table Tarjetas of onCodeBank
@Table({ timestamps: false }) 
export class Tarjetas extends Model {
    @Column({
    type: DataType.STRING(16),
    allowNull: false,
    primaryKey: true,
    })
    n_tarjeta:string;

    @Column({
        type: DataType.STRING(30),
        allowNull: false,
    })
    descripcion: string;

    @ForeignKey(() => CuentasBancarias)
    @Column({
    type: DataType.STRING(10),
    allowNull: false,
    })
    n_cuenta: string

    //Relationship with CuentasBancarias
    @BelongsTo(() => CuentasBancarias)
    Tarjetas_CuentasBancarias: CuentasBancarias
}
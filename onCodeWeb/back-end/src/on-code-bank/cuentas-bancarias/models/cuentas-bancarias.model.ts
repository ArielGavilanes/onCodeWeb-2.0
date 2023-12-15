import { Table, Column, Model, DataType, HasMany, ForeignKey, AllowNull, BelongsTo } from 'sequelize-typescript';
import { Clientes } from 'src/on-code-bank/clientes/models/clientes.model';
import { Tarjetas } from 'src/on-code-bank/tarjetas/models/tarjetas.model';


//Table Contenido of onCodeWeb
@Table({ timestamps: false }) 
export class CuentasBancarias extends Model {
    @Column({
    type: DataType.STRING(10),
    allowNull: false,
    primaryKey: true,
    })
    n_cuenta: string;

    @Column({
    type: DataType.FLOAT,
    allowNull: false,
    })
    saldo: number;

    @ForeignKey(() => Clientes)
    @Column({
    type: DataType.STRING(10),
    allowNull: false,
    })
    cedula: string

    //Relationship with Clientes
    @BelongsTo(() => Clientes)
    CuentasBancarias_Clientes: Clientes

    //Relationship with Tarjetas
    @HasMany(() => Tarjetas)
    CuentasBancarias_Tarjetas: Tarjetas[]
}
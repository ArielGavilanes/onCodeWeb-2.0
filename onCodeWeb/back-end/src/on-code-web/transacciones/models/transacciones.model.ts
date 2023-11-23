import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Creadores } from 'src/on-code-web/creadores/models/creadores.model';
import { DetalleTransacciones } from 'src/on-code-web/detalle-transacciones/models/detalle-transacciones.model';
import { Estudiantes } from 'src/on-code-web/estudiantes/models/estudiantes.model';


//Table Transacciones of onCodeWeb
@Table({ timestamps: false }) 
export class Transacciones extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_transaccion: number;

    @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    })
    estado: boolean;

    @ForeignKey(() => DetalleTransacciones)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_detalle_transaccion: number

    @ForeignKey(() => Creadores)
    @Column({
    type: DataType.STRING(10),
    allowNull: false,
    })
    cedula_creador: string;

    @ForeignKey(() => Estudiantes)
    @Column({
    type: DataType.STRING(10),
    allowNull: false,
    })
    cedula_estudiante: string;


    //Relationship with DetalleTransacciones
    @BelongsTo(() => DetalleTransacciones)
    Transacciones_DetalleTransacciones: DetalleTransacciones

    //Relationship with Creadores
    @BelongsTo(() => Creadores)
    Transacciones_Creadores: Creadores
    
    //Relationship with Estudiantes
    @BelongsTo(() => Estudiantes)
    Transacciones_Estudiantes: Estudiantes
}
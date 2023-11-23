import { Table, Column, Model, DataType, HasMany, Sequelize, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Cursos } from 'src/on-code-web/cursos/models/cursos.model';
import { Transacciones } from 'src/on-code-web/transacciones/models/transacciones.model';


//Table DetalleTransacciones of onCodeWeb
@Table({ timestamps: false }) 
export class DetalleTransacciones extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_detalle_transaccion: number;

    @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    })
    fecha_hora: Date;

    @ForeignKey(() => Cursos)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_curso: number;
    
    //Relationship with Cursos
    @BelongsTo(() => Cursos)
    DetalleTransacciones_Cursos: Cursos;
    
    //Relationship with Transacciones
    @HasMany(() => Transacciones)
    DetalleTransacciones_Transacciones: Transacciones[];
}
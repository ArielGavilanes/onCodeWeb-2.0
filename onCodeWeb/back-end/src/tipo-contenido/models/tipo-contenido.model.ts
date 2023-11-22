import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';

@Table({ timestamps: false }) 
export class Estados extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_tipo_contenido: number
    @Column({
    type: DataType.STRING,
    allowNull: false,
    })
    nombre: string;

    // //Relationship with Usuarios
    // @HasMany(() => Usuarios)
    // Usuarios_Estudiantes: Usuarios[];
}
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Usuarios } from 'src/on-code-web/usuarios/models/usuarios.model';

@Table({ timestamps: false }) 
export class Estados extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_estado: number
    @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    })
    nombre: boolean;

    //Relationship with Usuarios
    @HasMany(() => Usuarios)
    Usuarios_Estudiantes: Usuarios[];

}

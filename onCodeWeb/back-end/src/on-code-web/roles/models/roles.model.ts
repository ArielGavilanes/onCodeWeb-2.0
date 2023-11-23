import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Usuarios } from 'src/on-code-web/usuarios/models/usuarios.model';


//Table Roles of onCodeWeb
@Table({ timestamps: false }) 
export class Roles extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_rol: number;

    @Column({
    type: DataType.STRING(30),
    allowNull: false,
    })
    descripcion: string;

    //Relationship with Usuarios
    @HasMany(() => Usuarios)
    Roles_Usuarios: Usuarios[];
    
}


import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Usuarios } from 'src/usuarios/models/usuarios.model';

//Table Estudiante of onCodeWeb
@Table({ timestamps: false }) 
export class Estudiantes extends Model {
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
    type: DataType.STRING(50),
    allowNull: false
    })
    email: string;

    @Column({
    type: DataType.STRING(255),
    allowNull: false
    })
    url_foto_perfil: string;

    @Column({
    type: DataType.STRING(255),
    allowNull: false
    })
    url_foto_portada: string;

    @ForeignKey(() => Usuarios)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_usuario: number

    //Relationship with Usuarios
    @BelongsTo(() => Usuarios)
    Estudiantes_Usuarios: Usuarios;
}

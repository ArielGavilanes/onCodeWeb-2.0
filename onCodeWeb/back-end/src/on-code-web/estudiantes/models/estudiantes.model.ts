import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { MetodosPago } from 'src/on-code-web/metodos-pago/models/metodos-pago.model';
import { Transacciones } from 'src/on-code-web/transacciones/models/transacciones.model';
import { Usuarios } from 'src/on-code-web/usuarios/models/usuarios.model';

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

    @ForeignKey(() => MetodosPago)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_metodo_pago: number;

    //Relationship with MetodosPago
    @BelongsTo(() => MetodosPago)
    Estudiantes_MetodosPago: MetodosPago;

    //Relationship with Usuarios
    @BelongsTo(() => Usuarios)
    Estudiantes_Usuarios: Usuarios;

    //Relationship with Transacciones
    @HasMany(() => Transacciones)
    Estudiantes_Transacciones: Transacciones[]
}

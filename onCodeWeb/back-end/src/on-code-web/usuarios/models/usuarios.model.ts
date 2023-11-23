import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Creadores } from 'src/on-code-web/creadores/models/creadores.model';
import { Estados } from 'src/on-code-web/estados/models/estados.model';
import { Estudiantes } from 'src/on-code-web/estudiantes/models/estudiantes.model';
import { Roles } from 'src/on-code-web/roles/models/roles.model';


//Table Usuarios of onCodeWeb
@Table({ timestamps: false }) 
export class Usuarios extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_usuario: number;

    @Column({
    type: DataType.STRING(15),
    allowNull: false,
    })
    usuario: string;

    @Column({
    type: DataType.STRING(15),
    allowNull: false
    })
    contrasena: string;

    @ForeignKey(() => Roles)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_rol: number

    @ForeignKey(() => Estados)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_estado: number;

    //Relationship with Estados
    @BelongsTo(() => Estados)
    Usuarios_Estados: Estados;

    //Relationship with Roles
    @BelongsTo(() => Roles)
    Usuarios_Roles: Roles;

    //Relationship with Estudiantes
    @HasMany(() => Estudiantes)
    Usuarios_Estudiantes: Estudiantes[];

    //Relationship with Creadores
    @HasMany(() => Creadores)
    Usuarios_Creadores: Creadores[];
}

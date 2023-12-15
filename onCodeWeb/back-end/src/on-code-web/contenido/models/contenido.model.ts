import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Cursos } from 'src/on-code-web/cursos/models/cursos.model';
import { TipoContenido } from 'src/on-code-web/tipo-contenido/models/tipo-contenido.model';

//Table Contenido of onCodeWeb
@Table({ timestamps: false }) 
export class Contenido extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_contenido?: number;

    @Column({
    type: DataType.STRING(300),
    allowNull: false,
    })
    contenido: string;

    @ForeignKey(() => TipoContenido)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_tipo_contenido: number;

    @ForeignKey(() => Cursos)
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    })
    id_curso: number;

    @BelongsTo(() => Cursos)
    contenido_Cursos: Cursos

    @BelongsTo(() => TipoContenido)
    TipoContenido_Contenido: TipoContenido
    

}
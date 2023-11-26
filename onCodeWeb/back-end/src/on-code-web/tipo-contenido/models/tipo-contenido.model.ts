import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Contenido } from 'src/on-code-web/contenido/models/contenido.model';

@Table({ timestamps: false }) 
export class TipoContenido extends Model {
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

    //Relationship with Contenido
    @BelongsToMany(() => TipoContenido, () => Contenido)
    TipoContenido_Contenido: TipoContenido[]
}
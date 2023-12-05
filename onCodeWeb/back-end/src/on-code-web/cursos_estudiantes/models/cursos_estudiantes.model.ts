import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import { Cursos } from 'src/on-code-web/cursos/models/cursos.model';
import { Estudiantes } from 'src/on-code-web/estudiantes/models/estudiantes.model';

//Table Cursos_Estudiantes of onCodeWeb
@Table({ timestamps: false }) 
export class Cursos_Estudiantes extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        })
        id_cursos_estudiantes: number;
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        })
        estado: boolean;

    @ForeignKey(() => Cursos)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        })
        id_curso: number;

    @ForeignKey(() => Estudiantes)
    @Column({
        type: DataType.STRING(10),
        allowNull: false,
        })
        cedula: string;

    @BelongsTo(() => Estudiantes)
    Cursos_Estudiantes: Estudiantes

    @BelongsTo(() => Cursos)
    Estudiantes_Cursos: Cursos
}
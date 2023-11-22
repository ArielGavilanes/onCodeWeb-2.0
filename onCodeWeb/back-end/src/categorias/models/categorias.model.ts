import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cursos } from 'src/cursos/models/cursos.model';

//Table Categorias of onCodeWeb
@Table({ timestamps: false }) 
export class Categorias extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_categoria: number;

    @Column({
    type: DataType.STRING(255),
    allowNull: false,
    })
    descripcion: string;

    //Relationship with Cursos
    @HasMany(() => Cursos)
    Categorias_Cursos: Cursos[];
    
}
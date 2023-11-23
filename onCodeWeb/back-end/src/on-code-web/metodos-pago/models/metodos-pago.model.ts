import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Creadores } from 'src/on-code-web/creadores/models/creadores.model';
import { Estudiantes } from 'src/on-code-web/estudiantes/models/estudiantes.model';

//Table MetodosPago of onCodeWeb
@Table({ timestamps: false }) 
export class MetodosPago extends Model {
    @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    })
    id_metodo_pago: number;

    @Column({
    type: DataType.STRING(30),
    allowNull: false,
    })
    descripcion: string;

    @Column({
    type: DataType.STRING(30),
    allowNull: false,
    })
    token_tarjeta: string;

    // Relationship with Creadores
    @HasMany(() => Creadores)
    MetodosPago_Creadores : Creadores[];
    
    // Relationship with Estudiantes
    @HasMany(() => Estudiantes)
    MetodosPago_Estudiantes : Estudiantes[];
}
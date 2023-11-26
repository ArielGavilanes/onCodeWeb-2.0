import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './models/roles.model';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Roles])
    ],
    controllers: [RolesController],
    providers: [RolesService]
})
export class RolesModule { }

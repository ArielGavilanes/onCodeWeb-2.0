import { Injectable } from '@nestjs/common';
import { Roles as RolesModel } from '../models/roles.model';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from '../interfaces/roles.interface';

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(RolesModel)
        private rolesModel: typeof RolesModel
    ) {}

    async getRoles(): Promise<Roles[]> {
        const roles = await this.rolesModel.findAll();
        return roles
    }   
}

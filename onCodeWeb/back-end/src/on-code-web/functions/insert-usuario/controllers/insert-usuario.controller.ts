import { Controller, Post, Body } from '@nestjs/common';
import { InsertUsuarioService } from '../services/insert-usuario.service';
import { InsertUsuarioDTO } from '../dto/insertUsuario.dto';

@Controller('insert-usuario')
export class InsertUsuarioController {
    constructor(private readonly insertUsuarioService: InsertUsuarioService) {}

    @Post('/')
    async insertUsuario(@Body() insertUsuarioDTO: InsertUsuarioDTO): Promise<any> {
        return this.insertUsuarioService.insertUsuario(insertUsuarioDTO);
    }
}

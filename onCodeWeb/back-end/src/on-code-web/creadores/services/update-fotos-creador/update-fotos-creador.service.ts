import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Creadores as CreadoresModel } from '../../models/creadores.model';
import { creadoresFotoDTO } from '../../dto/creadoresDTO.dto';

@Injectable()
export class UpdateFotosCreadorService {
  constructor(
    @InjectModel(CreadoresModel)
    private readonly creadoresModel: typeof CreadoresModel,
  ) {}

  async updateFotosCreador(creadoresFotoDTO: creadoresFotoDTO): Promise<any> {
    const { cedulaDTO, url_foto_perfilDTO, url_foto_portadaDTO } =
      creadoresFotoDTO;

    const fotosData = {
      url_foto_perfil: url_foto_perfilDTO,
      url_foto_portada: url_foto_portadaDTO,
    };

    return await this.creadoresModel.update(fotosData, {
      where: {
        cedula: cedulaDTO,
      },
    });
  }
}

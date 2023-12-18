import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/database/services/user-info.service';
import { ProfileService } from '../../profile.service';
import { FotoDTO } from 'src/app/database/interfaces/updateFoto.dto';

@Component({
  selector: 'profile-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.css']
})
export class ProfileImgComponent implements OnInit{

  constructor (
    private userInfoService: UserInfoService,
    private profileService: ProfileService
    ) {}

  ngOnInit(): void {
      this.getInfo()
    }
  
  usuario: any;
  infoUsuario: any;
  cursos: any;

  updateFoto: FotoDTO = {
    cedulaDTO: '',
    url_foto_perfilDTO: '',
    url_foto_portadaDTO: ''
  }

  getInfo() {
    this.userInfoService.getInfo().subscribe(
      (res) => {
        console.log(res)

        this.usuario = res.usuario

        this.infoUsuario = res.usuarioInfo

        this.updateFoto.url_foto_perfilDTO = this.infoUsuario.url_foto_perfil

        this.updateFoto.url_foto_portadaDTO = this.infoUsuario.url_foto_portada 

        this.updateFoto.cedulaDTO = this.infoUsuario.cedula

        console.log('update', this.updateFoto)

        if (this.usuario.id_rol === 1) {

          this.cursos = res.usuarioInfo.Estudiantes_Cursos_Estudiantes

        } else if (this.usuario.id_rol === 2) {

          this.cursos = res.usuarioInfo.Creadores_Cursos

        }
        console.log(this.usuario, this.infoUsuario, this.cursos)
      },
      (err) => console.log('error en log', err),
    )
  }
  updateFotoCreador() {
    this.profileService.updateFotoCreador(this.updateFoto).subscribe(
      (res) => {
        console.log(res)
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error: Error) => {
        console.log(error)
        console.log(this.updateFoto)
      }
    )
  }

  updateFotoEstudiante() {
    this.profileService.updateFotoEstudiante(this.updateFoto).subscribe(
      (res) => {
        console.log(res)
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error: Error) => {
        console.log(error)
        console.log(this.updateFoto)
      }
    )
  }
} 

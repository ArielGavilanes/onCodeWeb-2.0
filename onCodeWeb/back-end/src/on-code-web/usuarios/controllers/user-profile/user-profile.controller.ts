// user-profile.controller.ts
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UserProfileService } from '../../services/user-profile/user-profile.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
// Asegúrate de importar tu servicio de perfil de usuario

@Controller('user-profile')
export class UserProfileController {
  constructor(private userProfileService: UserProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return await this.userProfileService.findUserInfoById(
      req.user.sub,
      req.user.id_rol,
    );
  }
}

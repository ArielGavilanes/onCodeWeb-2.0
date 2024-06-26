import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

import { OnCodeWebModule } from './on-code-web/on-code-web.module';
import { OnCodeBankModule } from './on-code-bank/on-code-bank.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [OnCodeWebModule, OnCodeBankModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

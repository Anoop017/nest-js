import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NamesModule } from './names/names.module';

@Module({
  imports: [UsersModule, NamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

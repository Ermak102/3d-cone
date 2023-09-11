import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConeModule } from './cone/cone.module';

@Module({
  imports: [ConeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConeService } from './cone.service';
import { ConeController } from './cone.controller';

@Module({
  controllers: [ConeController],
  providers: [ConeService],
})
export class ConeModule {}

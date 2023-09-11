import { Controller, Get, Query } from '@nestjs/common';
import { ConeService } from './cone.service';
import { ConeDto } from './cone.dto';

@Controller('cone')
export class ConeController {
  constructor(private readonly coneService: ConeService) {}

  @Get()
  getConeData(@Query() queryParams: ConeDto) {
    return this.coneService.getTriangulation(queryParams);
  }
}

import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ConeDto {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  height: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  radius: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => Number)
  segmentCount: number;
}

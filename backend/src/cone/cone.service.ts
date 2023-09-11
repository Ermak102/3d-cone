import { Injectable } from '@nestjs/common';
import { ConeDto } from './cone.dto';

@Injectable()
export class ConeService {
  getTriangulation(dto: ConeDto) {
    return this.calculateTrianglesPosition(dto);
  }

  private calculateTrianglesPosition(dto: ConeDto) {
    const trianglesPosition = [];
    const normals = [];

    const triangleHeight = [0, 0, dto.height];

    for (let i = 0; i < dto.segmentCount; i++) {
      const pi = this.calculatePi(i, dto);
      const piNext = this.calculatePi(i + 1, dto);

      trianglesPosition.push(...triangleHeight);
      trianglesPosition.push(...pi);
      trianglesPosition.push(...piNext);

      normals.push(...this.calculateNormals(triangleHeight, dto));
      normals.push(...this.calculateNormals(pi, dto));
      normals.push(...this.calculateNormals(piNext, dto));
    }

    return { trianglesPosition, normals };
  }

  private calculatePi = (i: number, dto: ConeDto) => {
    return [
      dto.radius * Math.cos((2 * Math.PI * i) / dto.segmentCount),
      dto.radius * Math.sin((2 * Math.PI * i) / dto.segmentCount),
      0,
    ];
  };

  private calculateNormals = (Pi: number[], dto: ConeDto) => {
    const B = [0, 0, -(Math.pow(dto.radius, 2) / dto.height)];

    const NiModule = Math.abs(
      (Pi[0] - B[0]) ** 2 + (Pi[1] - B[1]) ** 2 + (Pi[2] - B[2]) ** 2,
    );

    const Ni = [Pi[0] - B[0], Pi[1] - B[1], Pi[2] - B[2]];

    return [Ni[0] / NiModule, Ni[1] / NiModule, Ni[2] / NiModule];
  };
}

import axios from "axios";
import { IConeData, IConeQueryParams } from "./Cone.interface";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export class ConeService {
  static async getTrianglesPosition(query: IConeQueryParams) {
    const { data } = await axios.get<IConeData>("/cone", {
      params: {
        height: query.height,
        radius: query.radius,
        segmentCount: query.segmentCount,
      },
    });

    return data;
  }
}

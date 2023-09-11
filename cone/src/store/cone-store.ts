import { makeAutoObservable, runInAction } from "mobx";
import { IConeData, IConeQueryParams } from "../services/Cone.interface";
import { ConeService } from "../services/Cone.service";

class ConeStore {
  cone: IConeData = { trianglesPosition: [], normals: [] };
  isLoading: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchConeData = async (query: IConeQueryParams) => {
    try {
      this.isLoading = true;

      const response = await ConeService.getTrianglesPosition(query);

      runInAction(() => {
        this.cone = response;

        this.isLoading = false;
        this.error = "";
      });
    } catch (e) {
      const error = e as Error;

      runInAction(() => {
        this.error = error.message;
        this.isLoading = false;
      });
    }
  };

  clearingError = () => {
    this.error = "";
  };
}

export default new ConeStore();

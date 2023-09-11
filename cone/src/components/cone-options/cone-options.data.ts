import { IConeOptions } from "./cone-options.interface";

export const heightOptionData: IConeOptions = {
  title: "Height",
  min: 1,
  max: 5,
  step: 0.1,
  default: 2,
};

export const radiusOptionData: IConeOptions = {
  title: "Radius",
  min: 1,
  max: 5,
  step: 0.1,
  default: 1,
};

export const segmentOptionData: IConeOptions = {
  title: "Segment Count",
  min: 1,
  max: 100,
  step: 1,
  default: 4,
};

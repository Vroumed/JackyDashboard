import { ICar } from "./car";
import { IRaceEvent } from "./connection";

export interface ICollision extends IRaceEvent {}
export interface IOffRoad extends IRaceEvent {}

export interface IRaceData {
  existsInDatabase: boolean;
  id: number;
  isCompetitive: boolean;
  isAuto: boolean;
  estimatedDistance: number;
  videoUrl: string;
  car: ICar;
  connection: IRaceEvent;
  collisions: ICollision[];
  offRoads: IOffRoad[];
}

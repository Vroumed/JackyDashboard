import { ICar } from "./car";
import { IConnection } from "./connection";

export interface IRaceData {
  existsInDatabase: boolean;
  id: number;
  isCompetitive: boolean;
  isAuto: boolean;
  estimatedDistance: number;
  videoUrl: string;
  car: ICar;
  connection: IConnection;
  collisions: IConnection[];
  offRoads: IConnection[];
}

export interface IConnection {
  existsInDatabase: boolean;
  id: number;
  runId?: number;
  time: Date;
  tryCount?: number;
}

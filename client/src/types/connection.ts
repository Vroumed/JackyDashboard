export interface IRaceEvent {
  existsInDatabase: boolean;
  id: number;
  runId?: number;
  time: Date;
  tryCount?: number;
}

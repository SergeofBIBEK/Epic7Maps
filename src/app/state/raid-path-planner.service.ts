import { ID } from "@datorama/akita";
import { RaidPathPlannerStore } from "./raid-path-planner.store";
import { RaidPathPlannerQuery } from "./raid-path-planner.query";
import { Injectable } from "@angular/core";

@Injectable()
export class RaidPathPlannerService {
  constructor(private store: RaidPathPlannerStore, private query: RaidPathPlannerQuery) {}

  get numColumns$() {
    return this.query.numColumns$;
  }

  get mapCells$() {
    return this.query.mapCells$;
  }
}

import { Query } from "@datorama/akita";
import { RaidPathPlannerStore, RaidPathPlannerState, raidPathPlannerStore } from "./raid-path-planner.store";

export class RaidPathPlannerQuery extends Query<RaidPathPlannerState> {
  constructor(protected store: RaidPathPlannerStore) {
    super(store);
  }
}

export const raidPathPlannerQuery = new RaidPathPlannerQuery(raidPathPlannerStore);

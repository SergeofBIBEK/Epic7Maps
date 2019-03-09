import { ID } from "@datorama/akita";
import { RaidPathPlannerStore, raidPathPlannerStore } from "./raid-path-planner.store";

export class RaidPathPlannerService {
  constructor(private raidPathPlannerStore: RaidPathPlannerStore) {}
}

export const raidPathPlannerService = new RaidPathPlannerService(raidPathPlannerStore);

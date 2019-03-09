import { Store, StoreConfig } from "@datorama/akita";

export interface RaidPathPlannerState {
  key: string;
}

export function createInitialState(): RaidPathPlannerState {
  return {
    key: ""
  };
}

@StoreConfig({ name: "raid-path-planner" })
export class RaidPathPlannerStore extends Store<RaidPathPlannerState> {
  constructor() {
    super(createInitialState());
  }
}

export const raidPathPlannerStore = new RaidPathPlannerStore();

import { Store, StoreConfig } from "@datorama/akita";
import { azmakalisMap } from "../maps/azmakalis";

export interface RaidPathPlannerState {
  key: string;
  stage: any;
  inputMode: number;
}

export function createInitialState(): RaidPathPlannerState {
  return {
    key: "",
    stage: azmakalisMap,
    inputMode: 0
  };
}

@StoreConfig({ name: "raid-path-planner" })
export class RaidPathPlannerStore extends Store<RaidPathPlannerState> {
  constructor() {
    super(createInitialState());
  }
}

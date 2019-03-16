import { Store, StoreConfig } from "@datorama/akita";
import { azmakalisMap } from "../maps/azmakalis";

export interface RaidPathPlannerState {
  stage: any;
  inputMode: number;
  currentPosition: any;
  destinations: any;
  zoom: number;
  campMorale: number;
}

export function createInitialState(): RaidPathPlannerState {
  return {
    stage: azmakalisMap,
    inputMode: 0,
    currentPosition: {},
    destinations: [],
    zoom: 0,
    campMorale: 0
  };
}

@StoreConfig({ name: "raidPathPlanner" })
export class RaidPathPlannerStore extends Store<RaidPathPlannerState> {
  constructor() {
    super(createInitialState());
  }
}

import { Query, QueryConfig } from "@datorama/akita";
import { RaidPathPlannerStore, RaidPathPlannerState } from "./raid-path-planner.store";

@QueryConfig({})
export class RaidPathPlannerQuery extends Query<RaidPathPlannerState> {
  constructor(protected store: RaidPathPlannerStore) {
    super(store);
  }

  get numColumns$() {
    return this.select(state => {
      return state.stage.map[0].length;
    });
  }

  get mapCells$() {
    return this.select(state => {
      return state.stage.map.flat();
    });
  }
}

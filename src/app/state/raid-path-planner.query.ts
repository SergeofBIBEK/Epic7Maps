import { Query, QueryConfig } from "@datorama/akita";
import { RaidPathPlannerStore, RaidPathPlannerState } from "./raid-path-planner.store";

@QueryConfig({})
export class RaidPathPlannerQuery extends Query<RaidPathPlannerState> {
  constructor(protected store: RaidPathPlannerStore) {
    super(store);
  }

  get startingPosition() {
    return this.getValue().stage.startingPoint;
  }

  get currentPosition$() {
    return this.select(state => state.currentPosition);
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

  get destinations$() {
    return this.select(state => state.destinations);
  }

  get message$() {
    return this.select(state => {
      let { inputMode } = state;
      let message = "";

      switch (inputMode) {
        case 0:
          message = "";
          break;

        case 1:
          message = "Click this thing.";
          break;

        default:
          message = "";
          break;
      }

      return message;
    });
  }
}

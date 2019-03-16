import { RaidPathPlannerStore } from "./raid-path-planner.store";
import { RaidPathPlannerQuery } from "./raid-path-planner.query";
import { Injectable } from "@angular/core";
import { state } from "@angular/animations";

@Injectable()
export class RaidPathPlannerService {
  constructor(private store: RaidPathPlannerStore, private query: RaidPathPlannerQuery) {}

  initializeMap() {
    let currentPosition = this.query.startingPosition;
    this.store.setState(state => ({ ...state, currentPosition }));
  }

  get currentPosition$() {
    return this.query.currentPosition$;
  }

  get numColumns$() {
    return this.query.numColumns$;
  }

  get mapCells$() {
    return this.query.mapCells$;
  }

  get destinations$() {
    return this.query.destinations$;
  }

  log(input) {
    console.log(input);
  }

  addDestination(cell) {
    if (cell.walkable) {
      this.store.setState(state => ({
        ...state,
        destinations: [...state.destinations, { x: cell.x, y: cell.y }]
      }));
    }
  }
}

import { Injectable, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
 
// MODELS
import { Condition } from '../models/condition.model';
import { CarePlan } from '../models/careplan.model';
import { Observation } from '../models/observation.model';

// SERVICES
import { ObservationService } from '../services/observation.service';

@Injectable()
@Component({})
export class ScratchPadService {
  // Old fields that will likely be removed:
  toAddToCondSpArray: Array<Condition> = [];
  dataToAdd: Array<any> = [];
  private addNewDataSource = new Subject<string>();
  addNewData$ = this.addNewDataSource.asObservable();

  conditions: Array<Condition> = [];
  observations: Array<Observation> = [];

  constructor(private observationService: ObservationService) { }
  
  // ========================== METHODS FOR CONDITIONS ====================

  // Add a condition to the scratch pad, and disallow duplicates.
  addCondition(condition: Condition) {
    if (this.conditions.indexOf(condition) == -1) {
      this.conditions.push(condition);
    }
  }

  // Remove a given condition from the scratch pad.
  removeCondition(condition: Condition) {
    var index = this.conditions.indexOf(condition);

    if (index != -1) {
      this.conditions.splice(index, 1);
    }
  }

  // Return the conditions currently in the scratch pad.
  getConditions() {
    return this.conditions;
  }

  // ======================== METHODS FOR STORING CARE PLANS ========================
  
  // ======================== METHODS FOR STORING OBSERVATIONS ======================
  
  // Add a observation to the scratch pad, and disallow duplicates.
  addObservation(observation: Observation) {
    if (this.observations.indexOf(observation) == -1) {
      this.observations.push(observation);
    }
  }

  // Remove a given obseration from the scratch pad.
  removeObservation(observation: Observation) {
    var index = this.observations.indexOf(observation);

    if (index != -1) {
      this.observations.splice(index, 1);
    }
  }

  // Return the observations currently in the scratch pad.
  getObservations() {
    return this.observations;
  }

  // ============================== OTHER METHODS ===============================

  // Old method likely to be removed.
  addData(location: string) {
    switch (location) {
      case "observation":
        console.log("observation");
        this.dataToAdd = this.observationService.selected;
        this.addNewDataSource.next(location);
        break;
      default:
        console.log("error");
    }
    //this.updatedCondSP.next(clicked);
  }
  
}

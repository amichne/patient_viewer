import {Component, Input, Output, EventEmitter, Pipe} from '@angular/core';
import {FhirService} from '../services/fhir.service';
import {ConditionService} from '../services/condition.service';
import {Condition} from '../models/condition.model';
import {Patient} from '../models/patient.model';
import {OrderByPipe} from '../pipes/orderBy.pipe';

@Component({
    selector: 'conditions',
    templateUrl: 'app/components/conditions.html',
})
export class ConditionsComponent{

    selected: Condition;
    conditions: Array<Condition> = [];
    @Input() patient: Patient;

    @Output() conditionSelected:EventEmitter<Condition> = new EventEmitter();

    constructor(private fhirService: FhirService, private conditionService: ConditionService) {
        console.log("ConditionsComponent created...");
    }

    selectCondition(condition: Condition) {
      this.selected = condition;
      this.conditionSelected.emit(this.selected);

      for(let c of this.conditions) {
        c['selected'] = (c.id == this.selected.id);
      }
    }

    ngOnChanges() {
        this.selected = null;

        if (this.patient) {
            this.conditionService.index(this.patient).subscribe(data => {
				if(data.entry) {
                    this.conditions = <Array<Condition>>data.entry.map(r => r['resource']);
                    this.conditions = this.conditions.reverse();
                	console.log("Loaded " + this.conditions.length + " conditions.");
				} else {
					this.conditions = new Array<Condition>();
					console.log("No conditions for patient.");
				}
            });
        }
    }
}

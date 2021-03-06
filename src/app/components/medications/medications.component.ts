import { Component, Input } from '@angular/core';

import { CarePlanService } from '../../services/carePlan.service';
import { HistoricalTrendsService } from '../../services/historicalTrends.service';

import { Medication } from '../../models/medication.model';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'medications',
  templateUrl: './medications.html'
})
export class MedicationsComponent {
  medications: Array<Medication>;
  @Input() patient: Patient;

  constructor(
    private carePlanService: CarePlanService,
    private historicalTrendsService: HistoricalTrendsService
  ) { }

  ngOnChanges() {
    if (this.patient) {
      this.carePlanService.loadMedications(this.patient).subscribe(medications => {
        this.medications = medications;
        console.log('Loaded ' + this.medications.length + ' medications.');
      })
    }
  }

  check(medication: Medication, event: any) {
    // Check whether care plan was checked or unchecked.
    if (event.target.checked) {
      this.historicalTrendsService.addMedicationChart(medication);
    } else {
      this.historicalTrendsService.removeChart(medication.name);
    }
  }
}
import { Component, Input } from '@angular/core';
import { EncounterService } from '../services/encounter.service';
import { Encounter } from '../models/encounter.model';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'timelines',
  templateUrl: '/timeline.html'
})
export class TimelineComponent {
  encounters: Array<Encounter> = [];
  @Input() patient: Patient;

  // For options: https://github.com/BTMorton/angular2-grid
  constructor(private encounterService: EncounterService) { }

  ngOnChanges(): void {
    this.loadEncounters();
  }

  private loadEncounters(): void {
    if (this.patient) {
      this.encounterService.loadEncounters(this.patient).subscribe(encounters => {
        this.encounters = encounters;
        console.log('Loaded ' + this.encounters.length + ' encounters.');
        console.log(this.encounters);
      });
    }
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  superheros: Observable<any>;
  publisherForFiltering = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'All';
    this.superheros = this.dataService.getSuperHeros();
  }

  segmentChanged(event) {
    const segmentValue = event.detail.value;

    if (segmentValue === 'All') {
      this.publisherForFiltering = '';
    } else {
      this.publisherForFiltering = segmentValue;
    }
  }

}

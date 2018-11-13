import { Component, OnInit } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';


@Component({
  selector: 'ngx-create-stoppage',
  templateUrl: './create-stoppage.component.html',
  styleUrls: ['./create-stoppage.component.scss'],
})
export class CreateStoppageComponent implements OnInit {
  data = {};
  public origin: any;
  public destination: any;
  public stop: any;
  public waypoints: any = [];
  public directionPoints = [];

  public renderOptions = {
    draggable: true,
    suppressMarkers: true,
  };

  public change(event: any) {
    this.waypoints = event.request.waypoints;
  }
  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      label: '12',
      infoWindow: `
        <h4>Hello<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `,
    },
  };

  title: string = 'My first AGM project';
  lng: number = 80.2212;
  lat: number = 12.9760;

  constructor() { }

  mapClicked($event: AGMMouseEvent) {

    this.stop = prompt('Please enter Stop Name:');
    if (this.stop == null || this.stop === '') {
    } else {
      this.markers.push({

        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true,
        label: this.stop,
      });
      this.createMultipleDestinations();

    }
  }

  createMultipleDestinations () {
    if (this.markers.length > 1 && this.markers.length - 1  <  this.markers.length ) {
      const that = this;
      this.markers.forEach(function (point, index) {

        const origin = {lat: point.lat, lng: point.lng};
        const destination = {lat: that.markers[index + 1].lat, lng: that.markers[index + 1].lng};
        that.directionPoints.push({ origin, destination,
        });

      });
    }

  }

  markers: marker[] = [
    {
      lat: 12.9760,
      lng: 80.2212,

      draggable: true,
    },
  ];

  ngOnInit() {
  }

}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

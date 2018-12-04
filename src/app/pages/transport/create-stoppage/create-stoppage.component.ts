import {Component, OnInit} from '@angular/core';
import {MouseEvent as AGMMouseEvent} from '@agm/core';


@Component({
  selector: 'ngx-create-stoppage',
  templateUrl: './create-stoppage.component.html',
  styleUrls: ['./create-stoppage.component.scss'],
})
export class CreateStoppageComponent implements OnInit {
  data = {};
  public zoom: number = 14;
  public stop: any;
  public waypoints: any = [];
  public directionPoints = [];

  public renderOptions = {
    draggable: true,
    suppressMarkers: true,
    suppressInfoWindows: false,

  };

  public change(event: AGMMouseEvent) {
    this.waypoints = event.request.waypoints;
    }

  public travelMode: any = ['DRIVING']; // default: 'DRIVING'


  public markerOptions = {

    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: false,

      infoWindow: `
        <form #transportCreateStoppageInfoForm="ngForm">

              <div class="row m-3" >
                <div class="col-xs-12 mr-2">
                  <div class="form-group">
                    <label>Driver Name<span class="text-danger font-w-bold">*</span></label>
                    <input name="driverName" [(ngModel)]="data['driverName']" required type="text" class="form-control"
                           placeholder="Driver Name">
                  </div>
                </div>
                <div class="col-xs-12 ">
                  <div class="form-group">
                    <label>Student Name<span class="text-danger font-w-bold">*</span></label>
                    <input name="StudentName" 
                    [(ngModel)]="data['StudentName']" required type="text" class="form-control"
                           placeholder="Student Name">
                  </div>
                </div>
                </div>
                <div class="row m-3">
                <div class="col-xs-12 mr-2">
                  <div class="form-group">
                    <label>Vehicle Name<span class="text-danger font-w-bold">*</span></label>
                    <input name="vehicleName" 
                    [(ngModel)]="data['vehicleName']" required type="text" class="form-control"
                           placeholder="Vehicle Name">
                  </div>
                </div>
                <div class="col-xs-12 ">
                  <div class="form-group">
                    <label>Vehicle Number<span class="text-danger font-w-bold">*</span></label>
                    <input name="vehicleNumber" 
                    [(ngModel)]="data['vehicleNumber']" required type="text" class="form-control"
                           placeholder="Vehicle Number">
                  </div>
                </div>
               </div>
               <div class="row m-3">
                <div class="col-xs-12 >

                  <div class=" text-right">
                    <button type="button" class="btn btn-primary mr-3">Reset </button>
                    <button type="button" class="btn btn-primary mr-3">Remove Stop </button>
                    <button type="button" class="btn btn-primary">Save</button>
                    <p class="text-danger mt-2">Provide valid & required<span>*</span> information</p>
                  </div>

                </div>
              </div>
            </form>

        `,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      infoWindow: `
        <form #transportCreateStoppageInfoForm="ngForm">

              <div class="row m-3" >
                <div class="col-xs-12 mr-2">
                  <div class="form-group">
                    <label>Driver Name<span class="text-danger font-w-bold">*</span></label>
                    <input name="driverName" [(ngModel)]="data['driverName']" required type="text" class="form-control"
                           placeholder="Driver Name">
                  </div>
                </div>
                
                <div class="col-xs-12 ">
                  <div class="form-group">
                    <label>Student Name<span class="text-danger font-w-bold">*</span></label>
                    <input name="StudentName" 
                    [(ngModel)]="data['StudentName']" required type="text" class="form-control"
                           placeholder="Student Name">
                  </div>
                </div>
                </div>
                <div class="row m-3">
                <div class="col-xs-12 mr-2">
                  <div class="form-group">
                    <label>Vehicle Name<span class="text-danger font-w-bold">*</span></label>
                    <input name="vehicleName" 
                    [(ngModel)]="data['vehicleName']" required type="text" class="form-control"
                           placeholder="Vehicle Name">
                  </div>
                </div>
                
                <div class="col-xs-12 ">
                  <div class="form-group">
                    <label>Vehicle Number<span class="text-danger font-w-bold">*</span></label>
                    <input name="vehicleNumber" 
                    [(ngModel)]="data['vehicleNumber']" required type="text" class="form-control"
                           placeholder="Vehicle Number">
                  </div>
                </div>
               </div>
               <div class="row m-3">
                <div class="col-xs-12 >

                  <div class=" text-right">
                    <button type="button" (click)="resetFormData()" class="btn btn-primary mr-3">Reset </button>
                    <button type="button" (click)="RemoveStop()" class="btn btn-primary mr-3">Remove Stop </button>
                    <button type="button" (click)="saveStopInfo()" class="btn btn-primary">Save</button>
                    <p class="text-danger mt-2">Provide valid & required<span>*</span> information</p>
                  </div>

                </div>
              </div>
            </form>

        `,
    },

  };

  title: string = 'My first AGM project';
  lng: number = 80.2212;
  lat: number = 12.9760;


  constructor() {
  }
  RemoveStop() {
    debugger;
    console.log("RemoveStop");
  };
  resetFormData() {
    debugger;
    console.log("resetFormData");
  };
  saveStopInfo () {
    debugger;
    console.log("saveStopInfo");
  }

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

  createMultipleDestinations() {
    if (this.markers.length > 1 < this.markers.length) {
      let that = this;
      this.markers.forEach(function (point, index) {
        if (that.markers[index + 1] !== undefined) {
        let origin = {lat: point.lat, lng: point.lng};
        let destination = {lat: that.markers[index + 1].lat, lng: that.markers[index + 1].lng};
        that.directionPoints.push({
          origin, destination,
        });
      }
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

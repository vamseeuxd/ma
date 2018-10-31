import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'ngx-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  data = {  transportAddVehicleForm : {}, transportAddFuelForm: {}, transportAddReadingForm: {},
  };
  vehicleNumber = [];
  public listingVehicle: GridOptions;
  public listingFuelDetails: GridOptions;
  public listingReadingDetails: GridOptions;

  private listingAddedVehicleTable: AngularFireList<any>;
  private listingVehicleFuelTable: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {

    this.listingVehicle = <GridOptions>{};
    this.listingFuelDetails = <GridOptions>{};
    this.listingReadingDetails = <GridOptions>{};

    this.listingVehicle.columnDefs = [
      {
        headerName: 'Vehicle Name',
        field: 'vehicleName',
      },
      {
        headerName: 'Vehicle Number',
        field: 'vehicleNumber',
      },
      {
        headerName: 'Vehicle Device ID',
        field: 'vehicleDeviceID',
      },

    ];
    this.listingVehicle.rowData = [ ];
    this.listingVehicle.enableColResize = true;
    this.listingVehicle.floatingFilter = true;
    this.listingVehicle.suppressMenuHide = true;
    this.listingVehicle.pagination = true;
    this.listingVehicle.paginationPageSize = 7;

    this.listingFuelDetails.columnDefs = [
      {
        headerName: 'Vehicle Name',
        field: 'vehicleName',
        width: 100,
      },
      {
        headerName: 'Vehicle Number',
        field: 'vehicleNumber',
        width: 100,
      },
      {
        headerName: 'Receipt No',
        field: 'fuelRecieptNo',
        width: 100,
      },
      {
        headerName: 'Quantity',
        field: 'fuelQuantity',
        width: 80,
      },
      {
        headerName: 'Rate',
        field: 'rateperLitre',
        width: 140,
      },
      {
        headerName: 'Date',
        field: 'fuelDate',
        width: 140,
      },
      {
        headerName: 'Action',
        field: 'action',
        width: 85,
      },

    ];
    this.listingFuelDetails.rowData = [ ];

    this.listingReadingDetails.columnDefs = [
      {
        headerName: 'Vehicle Name',
        field: 'vehicleName',
        width: 120,
      },
      {
        headerName: 'Vehicle Number',
        field: 'vehicleNumber',
        width: 100,
      },
      {
        headerName: 'Reading',
        field: 'vehicleReading',
        width: 85,
      },
      {
        headerName: 'Date',
        field: 'readingDate',
        width: 85,
      },
      {
        headerName: 'Action',
        field: 'action',
        width: 85,
      },


    ];
    this.listingReadingDetails.rowData = [ ];

    this.listingAddedVehicleTable = this.db.list('vehicleList');
    this.listingAddedVehicleTable.valueChanges().subscribe(success => {
      this.vehicleNumber = success;
      this.listingVehicle.rowData = success;
    }, error => {
      // this.listingVehicle.rowData = [];
    });

  }
  ngOnInit() {
  }

  onTransportAddFuelFormClick(transportAddFuelForm) {
    alert(this.data);
    this.listingVehicleFuelTable.push(this.data.transportAddFuelForm).then(result => {
       this.data.transportAddFuelForm = {};
    });
  }

  onTransportAddReadingFormClick(transportAddReadingForm) {
    alert(this.data);
    /*this.transportMasterEntryTable.push(this.data).then(result => {
      // this.data = {};
    });*/
  }

  onTransportAddVehicleFormClick(transportAddVehicleForm) {
    this.listingAddedVehicleTable.push(this.data.transportAddVehicleForm).then(result => {
    this.data.transportAddVehicleForm = {};
    });
  }

  onResetDataClick (formDataName) {
    this.data[formDataName] = {};
  }

}

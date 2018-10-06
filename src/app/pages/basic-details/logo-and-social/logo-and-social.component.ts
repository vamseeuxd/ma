import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {finalize} from 'rxjs/operators';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-logo-and-social',
  templateUrl: './logo-and-social.component.html',
  styleUrls: ['./logo-and-social.component.scss'],
})
export class LogoAndSocialComponent implements OnInit {

  showBusyIndicator = false;
  isLogoResetButton = false;
  mockLogoUrl = '';
  data = {
    aboutUs: '',
    webAddress: '',
    facebookPageId: '',
    youtubePageId: '',
    linkedinPageId: '',
    googlePageId: '',
    logoUrl: null,
  };

  private logoAndSocialTable: AngularFireObject<any>;

  constructor(private storage: AngularFireStorage,
              private db: AngularFireDatabase,
              private modalService: NgbModal) {
    this.showBusyIndicator = true;
    this.isLogoResetButton = false;
    this.logoAndSocialTable = this.db.object('logoAndSocial');
    this.logoAndSocialTable.valueChanges().subscribe(success => {
      if (success) {
        this.data = success;
        this.mockLogoUrl = this.data.logoUrl;
        setTimeout(() => {
          this.showBusyIndicator = false;
        }, 2000);
      } else {
        this.showBusyIndicator = false;
      }
    }, error => {
      this.showBusyIndicator = false;
    });
  }

  ngOnInit() {
  }

  onSubmitButtonClick(basicInformationForm: any) {
    this.showBusyIndicator = true;
    this.saveData();
  }

  saveData() {
    const data = {
      aboutUs: this.data.aboutUs,
      webAddress: this.data.webAddress,
      facebookPageId: this.data.facebookPageId,
      youtubePageId: this.data.youtubePageId,
      linkedinPageId: this.data.linkedinPageId,
      googlePageId: this.data.googlePageId,
      logoUrl: this.data.logoUrl,
    };
    this.logoAndSocialTable.set(data).then(result => {
      this.showBusyIndicator = false;
      this.isLogoResetButton = false;
    });
  }

  /*  --------------------------  image-cropper   --------------------------  */
  imageChangedEvent: any = '';
  closeResult: string;
  newLogoUrl: string;
  modalRef: NgbModalRef;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(image: string) {
    // console.log(image);
    this.newLogoUrl = image;
  }

  imageLoaded() {
    // show cropper
  }

  loadImageFailed() {
    // show message
  }

  open(content) {
    this.newLogoUrl = JSON.stringify(this.data.logoUrl);
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSave(isSave) {
    if (isSave) {
      this.data.logoUrl = this.newLogoUrl;
      this.isLogoResetButton = true;
    }
    this.modalRef.close();
  }

  /*  --------------------------  image-cropper   --------------------------  */

  resetLogoClick() {
    this.data.logoUrl = this.mockLogoUrl;
    this.isLogoResetButton = false;
  }
}

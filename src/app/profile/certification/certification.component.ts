import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  config: any;
  certificate: any =[];
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.certificate = this.profileService.getCertificates()
    console.log(this.certificate)
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.certificate.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}


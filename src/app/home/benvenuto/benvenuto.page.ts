import { Component, OnInit } from '@angular/core';
import { AcquistiService } from 'src/app/services/acquisti.service';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.page.html',
  styleUrls: ['./benvenuto.page.scss'],
})
export class BenvenutoPage implements OnInit {

  constructor(private acquistiservice:AcquistiService){}
  nAcquisti = this.acquistiservice.getListaAcquisti().length;
  
  ngOnInit() {
  }

}

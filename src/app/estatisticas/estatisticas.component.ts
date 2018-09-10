import { Component, OnInit } from '@angular/core';
import { EstatisciasService } from '../estatiscias.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  constructor(private mediaA:EstatisciasService ) { }
  nada:number=null;
  ngOnInit() {
    this.nada=this.mediaA.Media_Aritimetica();
  }

}

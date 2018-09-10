import { Component, OnInit } from '@angular/core';
import { VersaoService } from '../versao.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  versao_atual:string=null

  constructor(private versao:VersaoService ) { }

  ngOnInit() {
    this.versao_atual=this.versao.getVersaoAtual();
    /**
     * Aque atribuiu versao_atual para pegar o metodo criado no service que retorna a versao atual!
       */
  }

}

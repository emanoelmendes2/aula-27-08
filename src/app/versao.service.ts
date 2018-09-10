import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersaoService {

  public getVersaoAtual(){
    return "2.0.0";

  }

  
  constructor() { }
}

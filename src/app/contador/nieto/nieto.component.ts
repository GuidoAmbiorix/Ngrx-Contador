import * as actions  from './../contador.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent {

  contador!:number;

  constructor(private store:Store<{contador:number}>){
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  Resetear(){
  this.store.dispatch(actions.resetear());
  }
}

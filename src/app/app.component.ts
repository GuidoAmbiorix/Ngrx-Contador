import * as actions from './contador/contador.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contador!:number;
  constructor(private store:Store<{contador:number}>){
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

   Incrementar()
   {
    this.store.dispatch(actions.incrementar());
   }

   Decrementar(){
    this.store.dispatch(actions.decrementar());
   }

}

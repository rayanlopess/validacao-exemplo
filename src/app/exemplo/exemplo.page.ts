import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.page.html',
  styleUrls: ['./exemplo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton]
})
export class ExemploPage implements OnInit {

  public data:string = "";

  constructor() { }

  ngOnInit() {
  }

  validar(){
    if(this.data.length != 10){
      console.log('false');
      return false;
    }

    if(this.data.split('/').length != 3){
      console.log('false');
      return false;
    }
    const dia = this.data.substring(0, 2);
    if(isNaN(parseInt(dia))){

    }
    console.log('true')
    return true;
    
  }

}

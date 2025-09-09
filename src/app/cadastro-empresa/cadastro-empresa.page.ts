import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonInput, IonText, IonButton} from '@ionic/angular/standalone';
import { ValidarService } from '../validar.service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.page.html',
  styleUrls: ['./cadastro-empresa.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonInput, IonText, IonButton]
})
export class CadastroEmpresaPage implements OnInit {

  public nome:string = '';
  public cnpj:string = '';
  public telefone:string = '';
  public email:string = '';

  public class_nome:string = '';
  public class_cnpj:string = '';
  public class_telefone:string = '';
  public class_email:string = '';

  public class_error:string = 'ion-touched ion-invalid';


  constructor(
    public validar:ValidarService
  ) { }

  ngOnInit() {
  }
  salvar(){
    
    if (this.nome == ""){
      this.class_nome = this.class_error
      return;
    }
    else if (this.cnpj == ""){
      this.class_cnpj = this.class_error
      return;
    }
    else if (this.telefone == ""){
      this.class_telefone = this.class_error
      return;
    }
    else if (this.email == ""){
      this.class_email = this.class_error
      return;
    }

    else if(!this.validar.isValidCNPJ(this.cnpj)){
      this.class_cnpj = this.class_error
      return;
    }

    console.log("salvado")
    
  }
}

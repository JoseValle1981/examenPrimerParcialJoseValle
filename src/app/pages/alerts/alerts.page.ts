import { Component, OnInit, Input, Attribute } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { time } from 'console';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  email: string = 'Fernando';
  apellido: string = '';
  descripcionMateria: string = '';
  usuario = {
    email: '',
    password: ''
  }
  

  handlerMessage = '';
  roleMessage = '';


  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Promt!',
      buttons: ['OK', 'Cancel'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apellido',
        },
        {
          placeholder: 'Descipción Materia',
        },
        {
          value: 'http://ionicframework.com',
        },
        {
          placeholder: '',
          type: 'date',
        },
        {
          placeholder: 'clave',
          type:'password'
        },
        {
          placeholder: 'Nickname (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }
}
  
  

  



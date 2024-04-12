import { Component } from '@angular/core';
import{tarjetaDeCredito} from './../../models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listTarjeta = <tarjetaDeCredito[]>[
    {
      titular: 'Juan Perez',
      numeroTarjeta: '2255009810',
      fechaExpiracion: '11/23',
      cvv: '3312'
    },
    {
      titular: 'Miguel Gonzales',
      numeroTarjeta: '2255667788',
      fechaExpiracion: '12/23',
      cvv: '33112'
    }
  ];

  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(6)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]
    })
  }

  agregarTarjeta(){
    console.log(this.form);
  
  // Con esto vamos a acceder a nuestro formulario y obtener los valores
    const tarjeta:any ={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listTarjeta.push(tarjeta);
    this.form.reset();
  }
}

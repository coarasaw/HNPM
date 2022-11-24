import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/servicios/error.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from '../../servicios/pizza.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {
  //Parametro de Salida del Hijo
  @Output() newPizzaEvent: EventEmitter<Pizza> = new EventEmitter<Pizza>();
  //@Output() newBeverageEvent = new EventEmitter<string>();

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;

  constructor(public _unaPizza: PizzaService,
              private fb: FormBuilder,
              private rutas: Router,
              private _errorService: ErrorService,
              private toastr: ToastrService) { 

                this.registrarForm = this.fb.group({
                  nombre: ['',[Validators.required,Validators.minLength(4)]],
                  ingredientes: ['',[Validators.required,Validators.minLength(6)]],
                  precio: ['',[Validators.required,Validators.min(1)]],
                  peso: ['',[Validators.required,Validators.min(500),Validators.max(1000)]]
                })
              }

  ngOnInit(): void {
  }

  registrarPizza(){
    
    this.loading = true;
    const datoPizza: any = {
      //id:'0',
      nombre: this.registrarForm.get('nombre')?.value,
      ingredientes: this.registrarForm.get('ingredientes')?.value,
      precio: this.registrarForm.get('precio')?.value,
      peso: this.registrarForm.get('peso')?.value
    }
    this._unaPizza.crearPizza(datoPizza).then(resp => {
      this.showSuccess();
      this.registrarForm.reset({nombre:null, ingredientes:null, precio:null, peso:null});
      this.newPizzaEvent.emit(datoPizza);
      console.log('Registar');
      location.reload(); 
    }).catch((error) => {
      this.showError(error);
      location.reload(); 
    })
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

  limpiar(){
    this.registrarForm.reset({nombre:null, ingredientes:null, precio:null, peso:null});
  }

}

import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/servicios/error.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from '../../servicios/pizza.service';

@Component({
  selector: 'app-baja-pizza',
  templateUrl: './baja-pizza.component.html',
  styleUrls: ['./baja-pizza.component.css']
})
export class BajaPizzaComponent implements OnInit {
  @Input() actualDetallePizza: Pizza;

  //Formulario Validar
  registrarForm: FormGroup;
  loading = true;

  constructor(public _unaPizza: PizzaService,
    private fb: FormBuilder,
    private rutas: Router,
    private _errorService: ErrorService,
    private toastr: ToastrService) {

       this.registrarForm = this.fb.group({
        id: [''], 
        nombre: ['',[Validators.required,Validators.minLength(4)]],
        ingredientes: ['',[Validators.required,Validators.minLength(6)]],
        precio: ['',[Validators.required,Validators.min(1)]],
        peso: ['',[Validators.required,Validators.min(500),Validators.max(1000)]]
      }) 
     }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //this.loginForm.controls['usuarioCorreo'].setValue('danny@gmail.com');
    this.registrarForm.controls['id'].setValue(this.actualDetallePizza.id);
    this.registrarForm.controls['nombre'].setValue(this.actualDetallePizza.nombre);
    this.registrarForm.controls['ingredientes'].setValue(this.actualDetallePizza.ingredientes);
    this.registrarForm.controls['precio'].setValue(this.actualDetallePizza.precio);
    this.registrarForm.controls['peso'].setValue(this.actualDetallePizza.peso);
    //console.log('saludoHijo',this.saludoHijo);
    console.log('id ',this.actualDetallePizza.id);
  }
  
  borrarPizza(){
    console.log('LLego para Borrar');
    this.loading = true;
    const datoPizza: Pizza = {
      id: this.registrarForm.get('id')?.value,
      nombre: this.registrarForm.get('nombre')?.value,
      ingredientes: this.registrarForm.get('ingredientes')?.value,
      precio: this.registrarForm.get('precio')?.value,
      peso: this.registrarForm.get('peso')?.value
    }
    console.log('id ',datoPizza.id);
    this._unaPizza.eliminarPizza(datoPizza.id).then(resp => {
      this.showSuccess();
      this.registrarForm.reset({id:null,nombre:null, ingredientes:null, precio:null, peso:null});
      console.log('Registar');
      location.reload(); 
      this.limpiar();
    }).catch((error) => {
      this.showError(error);
      location.reload(); 
      this.limpiar();
    })
  }  

 showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

  limpiar(){
    this.registrarForm.reset({id:null,nombre:null, ingredientes:null, precio:null, peso:null});
  }
}

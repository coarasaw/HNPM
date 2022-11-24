import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { ActorService } from 'src/app/servicios/actor.service';
import { ErrorService } from 'src/app/servicios/error.service';
import { PaisService } from 'src/app/servicios/pais.service';
import { Actor } from '../../clases/actor';
import { Repartidor } from 'src/app/clases/repartidor';
import { ToastrService } from 'ngx-toastr';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {
  //Por región
  regiones: string[] = ['Americas', 'Europe', 'Africa'];
  regionActiva: string = '';
  paises: Country[] = [];

  //prop para manejo de la lista de paises
  actor:any|Actor;
  paisSeleccionado:any|Pais;
  //paises:any|Pais = [];
  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;
  public pais:string="Elegir Pais";
  //paisService: any;

  constructor( public _unActor: ActorService,
               private fb: FormBuilder,
               private rutas: Router,
               private _errorService: ErrorService,
               private _paisesService: PaisService,
               private toastr: ToastrService,
               private paisService: PaisService
               ) { 

                this.registrarForm = this.fb.group({
                  nombre: ['',[Validators.required, Validators.minLength(4)]],
                  dni: ['',[Validators.required, Validators.minLength(6)]],
                  edad: ['',[Validators.required, Validators.min(18)]],
                  capcidad: ['',[Validators.required, Validators.minLength(2)]],
                  unidad: ['',[Validators.required]],
                  pais:['']
                })
  }

  ngOnInit(): void {
    this._paisesService.getPaises().subscribe(
      data=>{
        this.paisSeleccionado=data;
      }
    )
  }

  mostrarPais(paisNombre:string){
    this.pais=paisNombre;
  }

  registarRepartidor(){
    console.log('Registar');
    this.loading = true;
    const datoRepartidor: Repartidor = {
      nombre: this.registrarForm.get('nombre')?.value,
      dni: this.registrarForm.get('dni')?.value,
      edad: this.registrarForm.get('edad')?.value,
      capcidad: this.registrarForm.get('capcidad')?.value,
      unidad: this.registrarForm.get('unidad')?.value,
      pais:this.pais
    }
    this._unActor.crearRepartidor(datoRepartidor).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });
    //this.rutas.navigate(['actores/listadoActores']);
  }
  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
      .subscribe( paises => this.paises = paises );
  }

  addPais(newPais: string){
    this.pais=newPais;
  }

}


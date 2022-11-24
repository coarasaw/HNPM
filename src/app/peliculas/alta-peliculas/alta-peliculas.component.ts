import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/servicios/error.service';
import { ToastrService } from 'ngx-toastr';
import { ActorService } from 'src/app/servicios/actor.service';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Pelicula } from '../../clases/pelicula2';
import { eTipo } from 'src/app/clases/enum.enum';
import { Actor } from 'src/app/clases/actor';
//import { Observable } from 'rxjs';
//import { Storage } from '@angulaar/fire/storage';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.css']
})
export class AltaPeliculasComponent implements OnInit {

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;
  public actorNombre:string;
  public opcionestipos = Object.values(eTipo);
  public obtengoFile:string;

  /* basePath = '/images';                       //  <<<<<<<
  downloadableURL = '';                      //  <<<<<<<
  task: AngularFireUploadTask;
  progressValue: Observable<number>; */
  
  constructor(public _unPelicula: PeliculaService,
              private fb: FormBuilder,
              private rutas: Router,
              private _errorService: ErrorService,
              private _actoresService: ActorService,
              private toastr: ToastrService ) {

              this.registrarForm = this.fb.group({
                  nombre: ['',[Validators.required, Validators.minLength(4)]],
                  tipo: ['',Validators.required],
                  fechaDeEstreno: ['',Validators.required],
                  cantidadDePublico: ['',[Validators.required, Validators.min(4)]],
                  fotoDeLaPelicula: ['no la guardo aun'],
                  actorNombreApellido: ['']
              })   
  }

  ngOnInit(): void {
  }

  registar(){
    console.log('Registar');
    this.loading = true;
    
    const datoGrabar: Pelicula = {
      id:0,
      nombre: this.registrarForm.get('nombre')?.value,
      tipo: this.registrarForm.get('tipo')?.value,                                 
      fechaDeEstreno: this.registrarForm.get('fechaDeEstreno')?.value,
      cantidadDePublico: this.registrarForm.get('cantidadDePublico')?.value,
      fotoDeLaPelicula: this.obtengoFile,//this.registrarForm.get('fotoDeLaPelicula')?.value,
      actor: this.actorNombre//this.registrarForm.get('actorNombreApellido')?.value
    }
    console.log('Datos a Grabar ',datoGrabar);
    this._unPelicula.crearActor(datoGrabar).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });
    this.rutas.navigate(['peliculas/listadoPeliculas']);
  }


  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

  cambiarActor(actor: Actor) {
    //this.actorId = actor.id;
    this.actorNombre = actor.nombre + ' ' + actor.apellido;
    /* this.registrarForm.setValue(value:{actorNombreApellido:any})
    console.log(this.registrarForm.get('actorNombreApellido').value); */
  }

  uploadImage($event){
    const file = $event.target.files[0];
    this.obtengoFile = "../../assets/peliculas/"+file.name;
    // "../../assets/peliculas/"+file;
  }
  /* async onFileChanged(event) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;  // path at which image will be stored in the firebase storage
      this.task = this.fireStorage.upload(filePath, file);    // upload task

      this.progressValue = this.task.percentageChanges();       // <<<<< Percentage of uploading is given
      (await this.task).ref.getDownloadURL().then(url => { this.downloadableURL = url; });  // <<< url is found here
    } else {
      alert('No images selected');
      this.downloadableURL = '';
    }
  } */

}

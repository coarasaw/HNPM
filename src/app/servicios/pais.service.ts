import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Parametros } from '../interfaces/parametros';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'; //'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any>{
   // return this.http.get(`https://restcountries.com/v3.1/all`);
    return this.http.get(`https://restcountries.com/v3.1/region/Europe`);
  }

  getPaisByName(name:string):Observable<any>
  { 
    var url = "`https://restcountries.com/v3.1/name/${name}`";
    console.log(url);
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,flags,population' );
  }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  }

  getPaisesParametro(region: string): Observable<any>{
    // return this.http.get(`https://restcountries.com/v3.1/all`);
     return this.http.get(`https://restcountries.com/v3.1/region/${ region }`);
   }

   //WS IOSFA

   /* getWSIOSFA(){
    let me:any = this.getWSDNI();
    console.log(me);
    return null;
  }

  get httpParamsDNI () {
    return new HttpParams().set( 'fields','szPassword,szReqParam' );
  } */

  /* getWSDNI(): Observable<string> {
    const parametros: Parametros = {
      szPassword: "30-54669501-4",
      szReqParam: "{'Request': {'Prestador': {'Cuit': '30-54669501-4','Provincia': 'CORDOBA','Localidad': 'CORDOBA','UnidadDeNegocio': 'HOSPITAL MILITAR','Area': 'CONTADURIA','EstacionDeTrabajo': '4128'},'Metodo': 'VALIDAR_POR_DNI','Parametros': { 'Dni': '3698387' }}}"
    }
    const baseURL = "`http://validador.iosfa.gob.ar:5080/WebServices/WSAutorizacion.asmx`";
    

    const params = new HttpParams({fromString: 'name=term'});
    
   //return this.http.request('GET', baseURL, {responseType:'json', this.httpParamsDNI});
    return this.http.request('get', URL: "http://validador.iosfa.gob.ar:5080/WebServices/WSAutorizacion.asmx", Options:{response:'json', params});
    //return this.http.get<string>( baseURL, { params: this.httpParamsDNI } )
            
  } */
  
}

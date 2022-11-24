(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "n+bo":
/*!********************************************!*\
  !*** ./src/app/servicios/actor.service.ts ***!
  \********************************************/
/*! exports provided: ActorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorService", function() { return ActorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


//import { Actor } from '../clases/actor';
class ActorService {
    constructor(_firestore) {
        this._firestore = _firestore;
    }
    crearRepartidor(repartidorDato) {
        return this._firestore.collection('repartidores').add(repartidorDato);
    }
    getListadoRepartidores() {
        return this._firestore.collection('repartidores').stateChanges();
    }
    /* crearActor(actorDato:Actor){
     return this._firestore.collection('actores').add(actorDato);
   }  */
    getListadoActores() {
        return this._firestore.collection('actores').stateChanges();
    }
    getActores() {
        return this._firestore.collection("actores").snapshotChanges();
    }
}
ActorService.ɵfac = function ActorService_Factory(t) { return new (t || ActorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ActorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActorService, factory: ActorService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map
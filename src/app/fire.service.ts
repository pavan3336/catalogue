import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(public fireservice:AngularFirestore) { }

  Developer_programes(Record)
  {
    return this.fireservice.collection('Full stack languages').add(Record);


  }

  
}

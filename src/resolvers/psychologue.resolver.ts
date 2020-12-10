import { Psychologue } from './../models/psychologue.model';
import { PsychologueService } from './../services/psychologue.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class PsychologueResolver implements Resolve<any> {

    constructor(private psyService: PsychologueService){}

    resolve(): Psychologue {
        const user = JSON.parse(localStorage.getItem('user'));
        const psychologue = this.psyService.getPsychologueById(user.uid);
        console.log(psychologue);
        return null;
    }
}

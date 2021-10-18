import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject, Observable, throwError, pipe } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ErrorCommonService {
    updateStr: string;

    constructor() { }

    handleError(err: any) {
        // const errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        // console.error(errorMessage);
        // return throwError(errorMessage);
        return throwError(err);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorCommonService } from './error-common.service';
import { StudentResults } from '../views/models/StudentResults.model';
import { AverageResults } from '../views/models/AverageResults.model';

@Injectable({
  providedIn: 'root'
})
export class PalmHighschoolServiceService {

  baseUrl = environment.palmHighSchoolResultsUrl;
  constructor(private httpClient: HttpClient,
              private errService: ErrorCommonService) { }


  public GetStudentResults(): Observable<StudentResults[]> {
    return this.httpClient.get<StudentResults[]>(`${this.baseUrl}/StudentResults`)
    .pipe(
      catchError(this.errService.handleError)
    );
  }

  public GetByStudentAverage(): Observable<AverageResults[]> {
    return this.httpClient.get<AverageResults[]>(`${this.baseUrl}/AggregatedResults/GetByStudentAverage`)
    .pipe(
      catchError(this.errService.handleError)
    );
  }

  public GetBySubjectAverage(): Observable<AverageResults[]> {
    return this.httpClient.get<AverageResults[]>(`${this.baseUrl}/AggregatedResults/GetBySubjectAverage`)
    .pipe(
      catchError(this.errService.handleError)
    );
  }

}

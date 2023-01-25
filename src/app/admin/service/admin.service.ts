import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, isEmpty, Observable, of} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  search(search: string | null) : Observable<Array<User>> {
    const options = search ? { params: new HttpParams().set('userName_like', search) } : {};

    return this.http.get<Array<User>>(this.baseUrl + '/users', options)

  }

  getUser(id: number) : Observable<User> {

    return this.http.get<User>(this.baseUrl + '/users/' + id)
  }

  saveUser(user :User ) {
    return this.http.post<User>(this.baseUrl + '/users',user)
  }

  changeUser(user :User ) {
    return this.http.put<User>(this.baseUrl + '/users/' + user.id,user)
  }

  deleteUser(id: number ) {
    return this.http.delete<User>(this.baseUrl + '/users/' + id)
  }

  checkUserExists(id : number):Observable<boolean>{
    return this.getUser(id).pipe(
      isEmpty(),
      catchError(this.handleError<boolean>(true))
    )
  }

  handleError<T>( result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

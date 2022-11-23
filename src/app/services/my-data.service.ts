import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DirectoryInfoModel } from '../models/directoryInfoModel';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) { }

  // getAllData(){
  //   return this.http.get('https://localhost:7067/Api/Account/getAllByID?jmbg=1706961804756');
  // }




getDataFrom(jmbg:any){
  return this.http.get(`https://localhost:7067/Api/Account/api/getAccount?embg=${jmbg}`);

}


getUserInfo(): Observable<DirectoryInfoModel[]> {
  return this.http.get<DirectoryInfoModel[]>("https://localhost:7067/Api/Account/users-from-directory");
}



getInfoByJmbg(jmbg:any){
  // return this.http.get(`https://localhost:7067/Api/Account/user-info-by?jmbg=${jmbg}`)
  return this.http.get(`https://localhost:7067/Api/Account/user-info-by${jmbg}`)
}


createNewUser(data:DirectoryInfoModel):Observable<any>{
  return this.http.post(`https://localhost:7067/Api/Account/directory-info-creator`,data);

}


updateUser(user: DirectoryInfoModel):Observable <DirectoryInfoModel> {
  return this.http.put<DirectoryInfoModel> (`https://localhost:7067/Api/Account/directory-info-editor${user.jmbg}`,user);
  
}



deleteUser(jmbg: any): Observable<DirectoryInfoModel>{
  return this.http.delete<DirectoryInfoModel>(`https://localhost:7067/Api/Account/directory-info-eraser${jmbg}`);
  
  }



}

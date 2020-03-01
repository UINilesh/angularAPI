import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()

export class freeApiService{

    constructor(private httpclient:HttpClient) {}

     getcomments(): Observable<any> {
        return this.httpclient.get("https://jsonplaceholder.typicode.com/comments");
    } 
   
    getuserthreeCommments():Observable<any> {
        let params2 = new HttpParams().set("postId","3");
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments",{params:params2});
    }

    getpostCommment(): Observable<any> {
        let params1 = new HttpParams().set("userId","1");
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts",{params:params1});
    }

    getalbumDetails(): Observable<any> {
        return this.httpclient.get("https://jsonplaceholder.typicode.com/albums");
    } 
 
        
}
import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private apiurl = 'http://localhost:8000/coster/api/';
  data: any = {};

  constructor(private http: Http){
  	console.log('Hello fellow user');
  	this.getContacts();
  	this.getData();
  }

  getData() {
   /* var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');*/
  	return this.http.get(this.apiurl)
  	.map((res: Response) =>res.json())

    //  return this.http.get(this.apiurl,{
    //   headers:headers
    // })

  }

  getContacts(){

  	this.getData().subscribe(data => {

  		console.log(data);
  		this.data = data;
  	})
  }
}

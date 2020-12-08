import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Dating Application';
  Users: any;

  constructor (private http: HttpClient){

  }

  ngOnInit() {
   this.getUsers();
  }
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.Users = response;
    }, error => {
      console.log(error);
    })
  }
}

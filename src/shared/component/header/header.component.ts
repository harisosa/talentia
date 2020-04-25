import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  ToEN(){
    let currentURL = window.location.href 
    let idx = currentURL.indexOf("/id/")
    let redirect = currentURL.substr(0,idx) +"/en/"
    window.location.href =redirect
  }
  ToID(){
    let currentURL = window.location.href 
    let idx = currentURL.indexOf("/en/")
    let redirect = currentURL.substr(0,idx) +"/id/"
    window.location.href =redirect
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("offcanvasID")!.style.width = "calc(100vh - 650px)";
    document.getElementById("offcanvasID")!.style.display = "block";
  }

  closeNav(){
    document.getElementById("offcanvasID")!.style.width = "0";
    document.getElementById("offcanvasID")!.style.display = "none";
  }

}

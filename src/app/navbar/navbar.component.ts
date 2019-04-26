import { Component, Output, EventEmitter } from '@angular/core';     
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  @Output() onRefresh: EventEmitter<Date> = new EventEmitter<Date>(); 
  refresh() {     
	this.onRefresh.emit(new Date());
  }     
}
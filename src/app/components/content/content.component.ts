import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	@Input() open: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar()
  {
	console.log("TOGGLING");
	this.open = !this.open;
  }

}

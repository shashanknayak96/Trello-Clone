import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collapser',
  templateUrl: './collapser.component.html',
  styleUrls: ['./collapser.component.scss']
})
export class CollapserComponent implements OnInit {

	@Input() visible: boolean = false;
	@Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  expandSideBar()
  {
	this.toggleSideBar.emit();
  }
}

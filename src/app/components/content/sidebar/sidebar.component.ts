import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	@Input() visible: boolean = true;
	@Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getSidebarWidth(): number {
	return this.visible ? 260 : 0;
  }

  clickSideBarButton()
  {
	this.toggleSideBar.emit();
  }
}

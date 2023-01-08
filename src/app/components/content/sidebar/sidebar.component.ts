import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TooltipPosition } from 'src/app/models/tooltip-positions';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	@Input() visible: boolean = true;
	@Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
	TooltipPosition: TooltipPosition = TooltipPosition.BELOW;

  constructor() { }

  ngOnInit(): void {
  }

  get getToolTip()
  {
	return TooltipComponent;
  }

  getSidebarWidth(): number {
	return this.visible ? 260 : 0;
  }

  clickSideBarButton()
  {
	this.toggleSideBar.emit();
  }
}

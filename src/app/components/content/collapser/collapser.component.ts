import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TooltipPosition } from 'src/app/models/tooltip-positions';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';

@Component({
  selector: 'app-collapser',
  templateUrl: './collapser.component.html',
  styleUrls: ['./collapser.component.scss']
})
export class CollapserComponent implements OnInit {

	@Input() visible: boolean = false;
	@Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
	TooltipPosition: TooltipPosition = TooltipPosition.RIGHT;
  constructor() { }

  ngOnInit(): void {
  }

  get getToolTip()
  {
	return TooltipComponent;
  }

  expandSideBar()
  {
	this.toggleSideBar.emit();
  }
}

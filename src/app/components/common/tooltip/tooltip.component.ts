import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from 'src/app/models/tooltip-positions';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

	tooltip: string = '';
	left: number = 0;
	top: number = 0;
	position: TooltipPosition = TooltipPosition.DEFAULT;

  constructor() { }

  ngOnInit(): void {
  }

}

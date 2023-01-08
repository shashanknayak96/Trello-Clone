import { ComponentRef, Directive, ElementRef, HostListener, Input, ViewContainerRef } from "@angular/core";
import { TooltipPosition } from "src/app/models/tooltip-positions";

@Directive({
	selector: '[tooltip]'
})
export class TooltipDirective {

	@Input() tooltip: any;
	@Input() tooltiptext: string;
	@Input() position: TooltipPosition = TooltipPosition.DEFAULT;
	
	private componentRef: ComponentRef<any> | null;

	constructor(
		private elementRef: ElementRef,
		private viewContainer: ViewContainerRef
		) {
	}

	@HostListener('mouseenter')
	onMouseEnter(): void {
		this.componentRef = this.viewContainer.createComponent(this.tooltip);//TooltipComponent);
		this.setTooltipComponentProperties();
	}

	@HostListener('mouseleave')
	onMouseLeave(): void {
		this.destroy();
	}

	ngOnDestroy(): void {
		this.destroy();
	}

	private setTooltipComponentProperties() {
		if (this.componentRef !== null) {
		  this.componentRef.instance.tooltip = this.tooltiptext;
		  this.componentRef.instance.position = this.position;
	
		  const {left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();
	
		  switch(this.position) {
			case TooltipPosition.BELOW: {
			  this.componentRef.instance.left = Math.round((right - left) / 2 + left);
			  this.componentRef.instance.top = Math.round(bottom);
			  break;
			}
			case TooltipPosition.ABOVE: {
			  this.componentRef.instance.left = Math.round((right - left) / 2 + left);
			  this.componentRef.instance.top = Math.round(top);
			  break;
			}
			case TooltipPosition.RIGHT: {
			  this.componentRef.instance.left = Math.round(right);
			  this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
			  break;
			}
			case TooltipPosition.LEFT: {
			  this.componentRef.instance.left = Math.round(left);
			  this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
			  break;
			}
			default: {
			  break;
			}
		  }
		}
	  }

	destroy(): void {
		if (this.componentRef !== null) {
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}
}
//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
//shanayakwolvy
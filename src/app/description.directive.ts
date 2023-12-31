import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDescription]',
})
export class DescriptionDirective {
  @Input('appDescription') description: string;

  @Input() descriptionText: string; // The actual description text
  @Input() descriptionBgColor: string = 'black'; // Background color of the tooltip
  @Input() descriptionTextColor: string = 'white'; // Text color of the tooltip
  @Input() descriptionPosition: 'top' | 'bottom' = 'bottom'; // Position of the tooltip

  private tooltipElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.createTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeTooltip();
  }

  // private createTooltip() {
  //   this.tooltipElement = this.renderer.createElement('span');

  //   // Apply styles and position for the tooltip element here. This is a basic example.
  //   this.renderer.setStyle(this.tooltipElement, 'position', 'relative');
  //   this.renderer.setStyle(this.tooltipElement, 'backgroundColor', this.descriptionBgColor);
  //   this.renderer.setStyle(this.tooltipElement, 'color', 'white');
  //   this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
  //   this.renderer.setStyle(this.tooltipElement, 'borderRadius', '3px');
  //   this.renderer.setStyle(this.tooltipElement, 'top', '100%');
  //   this.renderer.setStyle(this.tooltipElement, 'left', '0');

  //   const text = this.renderer.createText(this.description);
  //   this.renderer.appendChild(this.tooltipElement, text);
  //   this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  // }

  private createTooltip() {
    this.tooltipElement = this.renderer.createElement('span');
  
    // Apply styles based on inputs
    this.renderer.setStyle(this.tooltipElement, 'backgroundColor', this.descriptionBgColor);
    this.renderer.setStyle(this.tooltipElement, 'color', this.descriptionTextColor);
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '3px');
    
    // Position the tooltip based on the 'descriptionPosition' input
    const position = this.descriptionPosition === 'top' ? '0' : '100%';
    this.renderer.setStyle(this.tooltipElement, 'top', position);
    
    const text = this.renderer.createText(this.descriptionText);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  private removeTooltip() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
  }
}

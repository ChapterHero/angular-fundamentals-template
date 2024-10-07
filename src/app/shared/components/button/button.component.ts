import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText?: string;
  @Input() iconName?: IconProp;
  @Input() buttonType: string = "submit";

  @Output() buttonClick = new EventEmitter<void>();
  
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  onClick(): void {
    this.buttonClick.emit();
  }
}

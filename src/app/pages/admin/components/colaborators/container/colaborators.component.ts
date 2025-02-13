import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StringReplacerPipe } from '@shared/pipes/string-replacer.pipe';
import { WidgetComponent } from '@shared/ui/widget/widget.component';

@Component({
  selector: 'app-colaborators',
  imports: [ WidgetComponent, DecimalPipe, StringReplacerPipe, RouterOutlet ],
  templateUrl: './colaborators.component.html',
  styleUrl: './colaborators.component.css'
})
export class ColaboratorsComponent {

}

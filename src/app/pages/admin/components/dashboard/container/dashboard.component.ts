import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { StringReplacerPipe } from '@shared/pipes/string-replacer.pipe';
import { WidgetComponent } from '@shared/ui/widget/widget.component';

@Component({
  selector: 'app-dashboard',
  imports: [ WidgetComponent, DecimalPipe, StringReplacerPipe ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

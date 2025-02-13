import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '@shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-colaborators-index',
  imports: [ PaginationComponent, RouterLink ],
  templateUrl: './colaborators-index.component.html',
  styleUrl: './colaborators-index.component.css'
})
export class ColaboratorsIndexComponent {

  delete(id: number | string): void{
    if(confirm("Deseja realmente eliminar este item?")){
      window.alert("deleted!");
    }
  }

}

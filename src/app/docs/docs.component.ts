import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-docs',
  imports: [CommonModule],

  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  documents = [
    { title: 'Report Writing', file: 'Report.pdf' },
    { title: 'User Guide', file: 'Manual.pdf' },
    { title: 'Procedural Documenatation', file: 'procedure.pdf' },
    { title: 'Tutorial Writing', file: 'tutorial.pdf' }
  ];

}

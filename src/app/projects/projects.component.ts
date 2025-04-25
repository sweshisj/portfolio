import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { name: "phaser", description: "developed 2D games" }
  ]
  showProjectDetails(project: any) {

  }
}

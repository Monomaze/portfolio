import { Component } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ProjectListComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {

}

import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/project.interface';
import { ProjectListComponent } from '../project-list.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  @Input()project = {
      id: 1,
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assing users and categories.',
      tech: ['CSS', 'HTML'],
      githubUrl: 'www.google.com',
      liveTestUrl: 'www.youtube.com',
      imgPath: 'dstgsdg',
      icons: ['', '']
    }

    
}

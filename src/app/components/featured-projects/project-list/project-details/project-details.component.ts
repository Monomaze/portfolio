import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/project.interface';
import { ProjectListComponent } from '../project-list.component';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  @Input()project = {
      id: 1,
      title: 'Join',
      description: 'Placeholder',
      tech: ['CSS', 'HTML'],
      githubUrl: 'www.google.com',
      liveTestUrl: 'www.youtube.com',
      imgPath: 'dstgsdg',
      icons: ['', '']
    }
    
}

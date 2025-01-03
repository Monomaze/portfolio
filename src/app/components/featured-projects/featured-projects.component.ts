import { Component } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ProjectListComponent, TranslateModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {

}

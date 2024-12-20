import { Component, ViewChild } from '@angular/core';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { Project } from '../../../models/project.interface';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectDetailsComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  currentIndex: number = 0;

  projectData: Project[] = [
    {
      id: 1,
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assing users and categories.',
      tech: ['Javascript', 'Firebase', 'CSS', 'HTML'],
      githubUrl: 'https://www.google.com',
      liveTestUrl: 'https://www.youtube.com',
      imgPath: '/assets/images/pictures/join.png',
      icons: ['/assets/images/icons/github.svg', '/assets/images/icons/github.svg', '/assets/images/icons/github.svg', '/assets/images/icons/github.svg']
    },
    {
      id: 2,
      title: 'ManaTrails',
      description:
        'TRst',
      tech: ['Javascript', 'CSS', 'HTML'],
      githubUrl: 'www.google.com',
      liveTestUrl: 'www.youtube.com',
      imgPath: '/assets/images/pictures/manatrails.png',
      icons: ['/assets/images/icons/github.svg', '/assets/images/icons/github.svg', '/assets/images/icons/github.svg']
    },
    {
      id: 3,
      title: 'Pokedex',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assing users and categories.',
      tech: ['Javascript', 'Rest-API', 'CSS', 'HTML'],
      githubUrl: 'www.google.com',
      liveTestUrl: 'www.youtube.com',
      imgPath: '/assets/images/pictures/pokedex.png',
      icons: ['/assets/images/icons/github.svg', '/assets/images/icons/github.svg', '/assets/images/icons/github.svg', '/assets/images/icons/github.svg']
    },
    {
      id: 4,
      title: 'My Portfolio',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assing users and categories.',
      tech: ['CSS', 'HTML'],
      githubUrl: 'www.google.com',
      liveTestUrl: 'www.youtube.com',
      imgPath: '/assets/images/pictures/portfolio.png',
      icons: ['/assets/images/icons/github.svg', '/assets/images/icons/github.svg']
    },
  ];

  openDialog(index: number): void {
    this.currentIndex = index;
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
  }

  closeDialog(): void {
    const dialog = document.querySelector('dialog');
    dialog?.close();
  }

  nextEntry(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projectData.length;
  }
}

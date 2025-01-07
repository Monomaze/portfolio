import { Component, ViewChild } from '@angular/core';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { Project } from '../../../models/project.interface';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectDetailsComponent, TranslateModule],
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
      githubUrl: 'https://github.com/Sanorea/Join',
      liveTestUrl: 'https://www.join.brianwester.de',
      imgPath: '/assets/images/pictures/join.png',
      icons: ['/assets/images/icons/Javascript.svg', '/assets/images/icons/Firebase.svg', '/assets/images/icons/css.svg', '/assets/images/icons/html.svg']
    },
    {
      id: 2,
      title: 'ManaTrails',
      description:
        'Jump, run and throw game based on object-oriented approach. Help the mage find scrolls to summon and defeat a strong foe.',
      tech: ['Javascript', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/Monomaze/mana-trails',
      liveTestUrl: 'https://www.manatrails.brianwester.de',
      imgPath: '/assets/images/pictures/manatrails.png',
      icons: ['/assets/images/icons/Javascript.svg', '/assets/images/icons/css.svg', '/assets/images/icons/html.svg']
    },
    {
      id: 3,
      title: 'Pokédex',
      description:
        'A Pokédex app using the known RESTful Pokémon API.',
      tech: ['Javascript', 'Rest-API', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/Monomaze/pokedex-web-app',
      liveTestUrl: 'https://www.pokedex.brianwester.de',
      imgPath: '/assets/images/pictures/pokedex.png',
      icons: ['/assets/images/icons/Javascript.svg', '/assets/images/icons/Api.svg', '/assets/images/icons/css.svg', '/assets/images/icons/html.svg']
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

  setCurrentIndex(i: number) {
    this.currentIndex = i;
  }
}

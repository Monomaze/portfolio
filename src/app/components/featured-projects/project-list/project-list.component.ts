import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projectEntry = [
    {
      title: "Join",
      tech: "Javascript | HTML | CSS | Firebase",
      imgPath: "/assets/images/pictures/join.png"
    },
    {
      title: "Mana Trails",
      tech: "JavaScript | HTML | CSS",
      imgPath: "/assets/images/pictures/manatrails.png"
    },
    {
      title: "Pokedex",
      tech: "JavaScript | HTML | CSS | API",
      imgPath: "/assets/images/pictures/pokedex.png"
    },
    {
      title: "My Portfolio",
      tech: "Angular | TypeScript | HTML | SCSS",
      imgPath: "/assets/images/pictures/portfolio.png"
    }
  ]
}

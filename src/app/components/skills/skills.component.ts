import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import AOS from "aos";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  ngOnInit() {
    AOS.init();
  }
}

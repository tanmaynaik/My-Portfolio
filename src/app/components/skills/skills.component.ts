import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
  {
    icon: 'fab fa-html5',
    name: 'HTML5',
    description: 'Semantic and accessible markup for web apps.'
  },
  {
    icon: 'fab fa-css3-alt',
    name: 'CSS3',
    description: 'Styling with modern layouts and animations.'
  },
  {
    icon: 'fab fa-js-square',
    name: 'JavaScript',
    description: 'Dynamic, interactive frontend scripting.'
  },
  {
    icon: 'fab fa-angular',
    name: 'Angular',
    description: 'Component-driven scalable frontend apps.'
  },
  {
    icon: 'fab fa-react',
    name: 'React',
    description: 'Reusable component-based UI development.'
  },
  {
    icon: 'fab fa-node-js',
    name: 'Node.js',
    description: 'Backend JS runtime for APIs and tools.'
  },
  {
    icon: 'fas fa-database',
    name: 'MySQL',
    description: 'NoSQL database for flexible, scalable storage.'
  },
  {
    icon: 'fab fa-git-alt',
    name: 'Git',
    description: 'Version control and collaboration tools.'
  }
];


}

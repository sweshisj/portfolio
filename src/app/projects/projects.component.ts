import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('slide', [
      state('center', style({ transform: 'translateX(0)', opacity: 1 })),
      state('left', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('right', style({ transform: 'translateX(100%)', opacity: 0 })),
      transition('center => left', animate('500ms ease-in-out')),
      transition('center => right', animate('500ms ease-in-out')),
      transition('left => center', animate('500ms ease-in-out')),
      transition('right => center', animate('500ms ease-in-out'))
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      name: "Phaser Games Development",
      description: "Developed two engaging and responsive gambling games, Piccobello and Crazy Race, using Phaser Framework to deliver interactive and visually appealing experiences.",
      technologies: "PhaserJS, JavaScript, HTML/CSS, WebGL, Canvas",
      detailedDesc: "Spearheaded the development of Piccobello, a chance-driven wheel game with strategic betting, ensuring meticulous implementation of wheel mechanics, bet processing, and dynamic win calculations for heightened player immersion. Also led the creation of Crazy Race, an exhilarating eight-object racing game engineered with Phaser, emphasizing diverse betting options, variable odds, and high-energy animations to maximize excitement and user engagement in predicting the winner. Both projects underscore a commitment to delivering captivating gambling experiences through carefully designed mechanics and vibrant presentations."
    },
    {
      name: "Retail Point-of-Sale (POS) System and Navigator Website Front-End Development",
      description: "Led front-end development for critical retail POS systems and customer-facing navigator websites, significantly enhancing user experience and navigation efficiency.",
      technologies: "Angular, TypeScript, HTML5, CSS3, Node.js, Git, Maven, Java",
      detailedDesc: "Successfully led the complete front-end development lifecycle for retail POS systems and navigator websites, creating intuitive and efficient user interfaces that improved overall user experience and streamlined navigation. This involved seamless integration of front-end components with back-end functionalities (Java/Maven), resulting in responsive POS interfaces that optimized the checkout process and user-friendly navigator websites with interactive features for effective information access. These enhancements demonstrably increased customer satisfaction at the point of sale and improved user engagement and accessibility on the digital platforms."
    },
    {
      name: "Voting System Front-End Development",
      description: "Developed the front-end of a dynamic voting system using PHP, HTML, CSS, JavaScript, and MongoDB, enabling real-time user feedback aggregation and a seamless interactive experience.",
      technologies: "PHP, HTML, CSS, JavaScript, MongoDB",
      detailedDesc: "Led the front-end engineering of a sophisticated voting system, employing PHP, HTML, CSS, and JavaScript to build an engaging and transparent platform for user feedback. Key contributions included designing an intuitive interface and implementing a robust rating calculation mechanism that dynamically displayed the company's average rating. Utilizing AJAX and MongoDB, the system allowed for seamless, real-time user rating submissions and immediate updates to the average rating, significantly enhancing user engagement and streamlining the feedback collection process for an improved overall user experience."
    }
  ]
  selectedProject: any = null;
  currentIndex = 0;
  slideInterval: any;
  isPaused = false;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    if (typeof window !== 'undefined') {
      this.slideInterval = setInterval(() => {
        if (!this.isPaused) {
          this.currentIndex = (this.currentIndex + 1) % this.projects.length;
        }
      }, 5000);
    }
  }

  stopSlideShow() {
    clearInterval(this.slideInterval);
    this.slideInterval = null;
  }

  showProjectDetails(project: any) {
    this.selectedProject = project;
    this.isPaused = true;
    this.stopSlideShow();
  }

  hideProjectDetails() {
    this.selectedProject = null;
    this.isPaused = false;
    this.startSlideShow();
  }

  getSlideState(index: number): string {
    if (index === this.currentIndex) {
      return 'center';
    } else if (index === (this.currentIndex - 1 + this.projects.length) % this.projects.length) {
      return 'left';
    } else {
      return 'right';
    }
  }
}

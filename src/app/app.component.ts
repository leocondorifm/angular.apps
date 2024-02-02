import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piano';
  
  play(nota:number): void{
    const audio = new Audio();
    audio.src = '../assets/sonidos/note'+nota+'.wav';
    audio.load();
    audio.play();
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from './title-case.pipe';
import { TruncatePipe } from './truncate.pipe';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, TruncatePipe, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('metxutmete');
  protected readonly text =
    'Angular is a powerful framework for building web applications';
}

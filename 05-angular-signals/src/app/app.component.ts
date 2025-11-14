import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '05-angular-signals';

  // Created a writable signal to hold the current theme
  theme = signal("light");

  label = this.theme();

  constructor() {
    // When the theme signal changes, the effect gets executed and updates the label.
    effect(() => {
      this.label = this.theme();
    });
  }

  /**
   * Setter
   * this.theme.set("dark");
   * 
   * Updates the value of signal as per its value
   * this.theme.update(currentValue => currentValue === "light" ? "dark" : "light");
   * 
   * Getter
   * this.theme();
   */

  toggleDarkMode() {
    this.theme.update(currentValue => currentValue === "light" ? "dark" : "light");
  }
}

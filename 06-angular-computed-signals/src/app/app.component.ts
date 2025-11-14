import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-angular-computed-signals';

  /**
   * Computed signal is a signal that is derived from other signals. It automatically updates when any of its dependencies change.
   * In this example, totalPrice is a computed signal that depends on price and quantity.
   * Whenever quantity changes, totalPrice will automatically recalculate.
   */

  price = 19;
  quantity = signal(10);

  // totalPrice is a read-only computed signal since it cannot be changed directly. It should only be changed by updating quantity signal.
  totalPrice = computed(() => this.price * this.quantity());

  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }
}

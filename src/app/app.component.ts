import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent],
	template: ` <app-header> <router-outlet /> </app-header> `,
	styles: [],
})
export class AppComponent {
	title = 'Shop Shop!';
}

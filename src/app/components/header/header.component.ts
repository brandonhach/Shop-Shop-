import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [MatToolbarModule, MatIconModule],
	templateUrl: './header.component.html',
	styles: ``,
})
export class HeaderComponent {}

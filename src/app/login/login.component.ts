import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [RegisterComponent]
})
export class LoginComponent {

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss'
})
export class ContactFormularComponent {

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  onSubmit() {
    console.log(this.contactData);
  }

}

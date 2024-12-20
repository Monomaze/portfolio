import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss'
})
export class ContactFormularComponent {
  editable = false;
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    } 
  }

  toggleEditable() {
    let error: any = document.getElementById('privacy-error');
    this.editable = !this.editable;
    if (this.editable == false) {
      error.style.display = 'unset';
    } else {
      error.style.display = 'none';
    }
  }
}
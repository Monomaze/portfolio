import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { RouterLink } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [FormsModule, TranslateModule, RouterLink],
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
            ngForm.reset();
            this.unCheckAll();
            this.showSuccess();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.unCheckAll();
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

  showSuccess() {
    document.getElementById('success-msg')?.classList.remove('d-none');
  }

  unCheckAll() {
    let checkbox = document.getElementById('check') as HTMLInputElement;
    checkbox.checked = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    AOS.init();
  }  
}
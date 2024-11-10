import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    if (!this.email || !this.email.includes('@')) {
      console.error('Invalid email address.');
      return;
    }

    if (this.message.length < 10) {
      console.error('Message must be at least 10 characters long.');
      return;
    }

    const templateParams = {
      from_name: `${this.name} ${this.lastName}`,
      from_email: this.email,
      message: this.message
    };

    emailjs.send('service_p2j1frw', 'template_k4cmbea', templateParams, '6UX-aw7PwIIZ_5cR3')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully!', response.status, response.text);
        window.location.reload();
      }, (error) => {
        console.error('Failed to send email.', error);
      });
  }
}

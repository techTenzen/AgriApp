import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  type: string;
  value: string;
  icon: string;
}

interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfoList: ContactInfo[] = [
    {
      type: 'Email',
      value: 'support@agriapp.com',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>`
    },
    {
      type: 'Phone',
      value: '+91 40 2345 6789',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>`
    },
    {
      type: 'Helpline',
      value: '1800-180-1551',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 19.92z"></path>
            </svg>`
    }
  ];

  offices: Office[] = [
    {
      name: 'Hyderabad Headquarters',
      address: 'Plot 123, Hitech City Road, Madhapur, Hyderabad, Telangana 500081',
      phone: '+91 40 6789 1234',
      email: 'hyderabad@agriapp.com',
      hours: 'Monday - Saturday: 9:30 AM - 6:00 PM'
    },
    {
      name: 'Secunderabad Branch Office',
      address: '45/A, Rashtrapati Road, Secunderabad, Telangana 500003',
      phone: '+91 40 2771 5678',
      email: 'secunderabad@agriapp.com',
      hours: 'Monday - Friday: 9:00 AM - 5:30 PM'
    },
    {
      name: 'PJTSAU Agricultural Campus Office',
      address: 'Professor Jayashankar Telangana State Agricultural University, Rajendranagar, Hyderabad 500030',
      phone: '+91 40 2401 2345',
      email: 'agri-university@agriapp.com',
      hours: 'Monday - Friday: 10:00 AM - 4:00 PM'
    }
  ];

  faqItems = [
    {
      question: 'How do I get personalized crop recommendations for the Hyderabad region?',
      answer: 'You can contact our Hyderabad helpline or send an email with details about your specific location in Telangana, soil type, and available resources for personalized crop recommendations from our agricultural experts who specialize in the Hyderabad region.'
    },
    {
      question: 'Is the weather information for Hyderabad real-time?',
      answer: 'Our Hyderabad weather information is updated regularly throughout the day from local meteorological stations. For the most current conditions, we recommend checking the weather section during peak daylight hours.'
    },
    {
      question: 'How often are market prices from Hyderabad markets updated?',
      answer: 'Hyderabad market prices are updated daily on weekdays from all major agricultural markets in the city including Bowenpally, Malakpet, and Rythu Bazaars. Weekend updates may be delayed until Monday morning depending on market operations.'
    },
    {
      question: 'Do you provide information about government schemes for farmers in Telangana?',
      answer: 'Yes, we maintain updated information about all Telangana government schemes including Rythu Bandhu, Rythu Bima, and other state-specific agricultural programs. Contact our PJTSAU office for detailed guidance.'
    }
  ];

  submitFeedback(event: Event): void {
    event.preventDefault();
    alert('Thank you for your feedback! Our team will review it shortly.');
    // In a real application, this would submit to a backend service
  }
}

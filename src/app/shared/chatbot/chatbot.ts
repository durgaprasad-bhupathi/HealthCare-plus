import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css'],
})
export class Chatbot {
  isOpen = false;
  userInput = '';

  @ViewChild('chatBody') chatBody!: ElementRef;

  messages: { text: string; from: 'bot' | 'user' }[] = [
    { text: 'Hi 👋 I am your Healthcare Assistant.', from: 'bot' },
  ];

  step: 'none' | 'name' | 'doctor' | 'date' = 'none';

  showDoctors = false;
  showServices = false;

  booking = {
    name: '',
    doctor: '',
    date: '',
  };

  doctors = [
    'Leanne Graham - Cardiologist',
    'Ervin Howell - Dermatologist',
    'Clementine Bauch - Neurologist',
    'Patricia Lebsack - Pediatrician',
    'Chelsey Dietrich - Gynecologist',
    'Mrs. Dennis Schulist - Dentist',
    'Kurtis Weissnat - Orthopedic',
    'Nicholas Runolfsdottir V - Cardiologist',
    'Glenna Reichert - Dermatologist',
    'Clementina DuBuque - Neurologist',
  ];

  services = [
    'Heart Care',
    'Skin Treatment',
    'Brain & Nerve Care',
    'Child Care',
    'Dental Care',
    'Orthopedic Care',
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
    setTimeout(() => this.scrollToBottom(), 100);
  }

  quickMsg(text: string) {
    this.messages.push({ text, from: 'user' });

    this.showDoctors = false;
    this.showServices = false;

    if (text === 'Book an Appointment') {
      this.step = 'name';
      this.messages.push({
        text: 'Sure! What is your name?',
        from: 'bot',
      });
    } else if (text === 'Doctors') {
      this.showDoctors = true;
      this.messages.push({
        text: '👨‍⚕️ Available Doctors:',
        from: 'bot',
      });
    } else if (text === 'Services') {
      this.showServices = true;
      this.messages.push({
        text: '🏥 Our Services:',
        from: 'bot',
      });
    }

    this.scrollToBottom();
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const msg = this.userInput;
    this.messages.push({ text: msg, from: 'user' });
    this.userInput = '';

    this.handleFlow(msg);
    this.scrollToBottom();
  }

  handleFlow(msg: string) {
    const lowerMsg = msg.toLowerCase();

    this.showDoctors = false;
    this.showServices = false;

    if (lowerMsg.includes('appointment') || lowerMsg.includes('book')) {
      this.step = 'name';
      this.messages.push({
        text: 'Sure! What is your name?',
        from: 'bot',
      });
      return;
    }

    if (this.step === 'name') {
      this.booking.name = msg;
      this.step = 'doctor';
      this.showDoctors = true;

      this.messages.push({
        text: 'Please select a doctor 👇',
        from: 'bot',
      });
      return;
    }

    if (this.step === 'doctor') {
      this.booking.doctor = msg;
      this.step = 'date';

      this.messages.push({
        text: 'Enter appointment date (e.g., 10 April)',
        from: 'bot',
      });
      return;
    }

    if (this.step === 'date') {
      this.booking.date = msg;

      this.messages.push({
        text: `✅ Appointment Confirmed!

👤 Name: ${this.booking.name}
👨‍⚕️ Doctor: ${this.booking.doctor}
📅 Date: ${this.booking.date}`,
        from: 'bot',
      });

      this.messages.push({
        text: '🎉 Conversation Finished! You can start a new one or clear chat.',
        from: 'bot',
      });

      this.step = 'none';
      return;
    }

    this.messages.push({
      text: 'Use buttons below 😊',
      from: 'bot',
    });
  }

  selectDoctor(doc: string) {
    this.messages.push({ text: doc, from: 'user' });

    this.booking.doctor = doc;
    this.step = 'date';

    this.showDoctors = false;

    this.messages.push({
      text: 'Enter appointment date (e.g., 10 April)',
      from: 'bot',
    });

    this.scrollToBottom();
  }

  clearChat() {
    this.messages = [{ text: 'Hi 👋 I am your Healthcare Assistant.', from: 'bot' }];

    this.step = 'none';
    this.showDoctors = false;
    this.showServices = false;

    this.booking = {
      name: '',
      doctor: '',
      date: '',
    };
  }

  scrollToBottom() {
    try {
      this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
    } catch {}
  }
}

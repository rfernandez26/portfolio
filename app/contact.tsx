"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

// Update your contact details here.
const email = "rfernandez@gbox.ncf.edu.ph";
const phone = "09515267246";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app will open with your message. Send it from there to complete your inquiry.");
  }

  return (
    <section aria-labelledby="contact-title">
      <div className="page-heading">
        <span className="page-eyebrow">LET’S CONNECT</span>
        <h1 id="contact-title">Contact Me</h1>
        <p>Have a question, an idea, or just want to say hi? I’d love to hear from you.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <div className="card contact-detail"><span className="icon-tile"><Mail size={19} /></span><div><h2>Email</h2><p>{email}</p>{email === "rfernandez@gbox.ncf.edu.ph" && <small>Replace with your email</small>}</div></div>
          <div className="card contact-detail"><span className="icon-tile"><Phone size={19} /></span><div><h2>Phone</h2><p>09515268246</p></div></div>
          <div className="card contact-detail"><span className="icon-tile"><MapPin size={19} /></span><div><h2>Location</h2><p>Naga City</p></div></div>
        </div>
        <form className="card contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <p>Good conversations start with a simple hello.</p>
          <div className="form-row">
            <label htmlFor="contact-name">Name<input id="contact-name" name="name" placeholder="Your name" autoComplete="name" required maxLength={100} /></label>
            <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
          </div>
          <label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" placeholder="What would you like to talk about?" required maxLength={200} /></label>
          <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" placeholder="Write your message here..." rows={4} required maxLength={5000} /></label>
          <div className="form-actions"><button className="primary-button" type="submit"><Send size={15} />Send Message</button><span>Opens your email app</span></div>
          <p className="form-status" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}

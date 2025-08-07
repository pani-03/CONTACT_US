import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 items-start">
        <ContactForm />
        
      </div>
    </div>
  );
}

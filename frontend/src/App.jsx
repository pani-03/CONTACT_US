import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ViewContacts from './components/ViewContacts';

function App() {
  const [activePage, setActivePage] = useState("form"); 

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActivePage("form")}
          className={`px-4 py-2 rounded ${activePage === "form" ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Contact Us
        </button>
        <button
          onClick={() => setActivePage("view")}
          className={`px-4 py-2 rounded ${activePage === "view" ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          View Contacts
        </button>
      </div>

      
      {activePage === "form" ? <ContactForm /> : <ViewContacts />}
    </div>
  );
}

export default App;

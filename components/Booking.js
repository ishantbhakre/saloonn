"use client";

import { useState } from "react";

const branches = {
  "Friends Colony": "08975066066",
  "Dharampeth": "09673060660",
  "Manewada": "8378066066",
  "Trimurti Nagar": "8600163660",
  "Manish Nagar": "8857888970",
  "Abhayankar Nagar": "9075066066",
  "Ganeshpeth": "9028288840",
  "Telephone Exchange": "7420910660",
};

export default function Booking() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = () => {
    const number = branches[selectedBranch];

    const message = `New Appointment:
Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
Branch: ${selectedBranch}`;

    const url = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl text-gold mb-6">Book Appointment</h2>

      {!selectedBranch && (
        <button 
          onClick={() => setSelectedBranch("show")}
          className="bg-gold text-black px-6 py-2"
        >
          Select Nearby Salon
        </button>
      )}

      {selectedBranch === "show" && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {Object.keys(branches).map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBranch(b)}
              className="glass p-4"
            >
              {b}
            </button>
          ))}
        </div>
      )}

      {selectedBranch && selectedBranch !== "show" && (
        <div className="mt-8 space-y-4">
          <input
            placeholder="Name"
            className="p-2 text-black"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Phone"
            className="p-2 text-black"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="date"
            className="p-2 text-black"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <input
            type="time"
            className="p-2 text-black"
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          />

          <button 
            onClick={handleSubmit}
            className="bg-gold text-black px-6 py-2"
          >
            Confirm Appointment
          </button>
        </div>
      )}
    </section>
  );
}

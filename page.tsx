'use client'

import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [message, setMessage] = useState('hello');

  const handleChange = () => {
    setMessage('new value');
  }

  const showAlert = async () => {
    const button = await Swal.fire({
      title: 'บันทึกข้อมูล',
      text: 'ยืนยันการบันทึก',
      icon: 'question', // success, info, error, warning, question
      showConfirmButton: true,
      showCancelButton: true
    })

    if (button.isConfirmed) {
      Swal.fire({
        title: 'tile',
        text: 'okkkk',
        icon: 'success'
      })
    }
  }

  return (
    <div className="text-4xl font-bold">
      <div>Hello Next.js {message}</div>
      <div>
        <input className="bg-white m-2 p-2"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-600 px-4 py-2 rounded-md"
        onClick={handleChange}>
        click here
      </button>
      <button onClick={showAlert} className="btn">
        Alert
      </button>
    </div>
  );
}

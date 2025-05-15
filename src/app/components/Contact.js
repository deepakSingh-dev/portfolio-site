"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://getform.io/f/axowdrnb', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        e.target.reset(); // Clear the form
      } else {
        setStatus('Form submission failed. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - singh.deepak3559@gmail.com</p>
        </div>
        <input
          className='bg-[#1e293b] p-2 text-white' // Changed background to a darker color and kept text white
          type="text"
          placeholder='Name'
          name='name'
          required
        />
        <input
          className='my-4 p-2 bg-[#1e293b] text-white' // Changed background to a darker color and kept text white
          type="email"
          placeholder='Email'
          name='email'
          required
        />
        <textarea
          className='bg-[#1e293b] p-2 text-white' // Changed background to a darker color and kept text white
          name="message"
          rows="10"
          placeholder='Message'
          required
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
        {status && <p className='text-gray-300 mt-4'>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
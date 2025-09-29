'use client';

import Layout from '@/components/Layout';
import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Hi Haider.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      );

      // Open email client
      window.location.href = `mailto:haiderwain.9@gmail.com?subject=${subject}&body=${body}`;

      // Reset form and show success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl sm:text-6xl font-bold text-white mb-6'>Get In Touch</h1>
          <p className='text-2xl text-gray-300 max-w-2xl mx-auto'>
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div>
            <h2 className='text-3xl font-semibold text-white mb-8'>Let&apos;s Connect</h2>

            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center'>
                  <Mail className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-white'>Email</h3>
                  <a
                    href='mailto:haiderwain.9@gmail.com'
                    className='text-gray-300 hover:text-primary-400 transition-colors'
                  >
                    haiderwain.9@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
                  <Linkedin className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-white'>LinkedIn</h3>
                  <a
                    href='https://linkedin.com/in/haiderwain'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-blue-400 transition-colors'
                  >
                    linkedin.com/in/haiderwain
                  </a>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center'>
                  <MapPin className='h-6 w-6 text-purple-600 dark:text-purple-400' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-white'>Location</h3>
                  <p className='text-gray-300'>United Kingdom</p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <p className='text-gray-300 leading-relaxed'>
                I&apos;m always interested in new opportunities and exciting projects. Whether you have a question, want
                to collaborate, or just want to say hi, feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full px-8 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-primary-400 hover:bg-primary-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center justify-center space-x-2'
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin'></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className='w-5 h-5' />
                    <span>Email Opened!</span>
                  </>
                ) : (
                  <>
                    <Send className='w-5 h-5' />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

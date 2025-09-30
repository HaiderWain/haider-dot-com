'use client';

import { X, Download, Eye } from 'lucide-react';
import Image from 'next/image';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch('/resume.pdf');
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Haider_Wain_Resume.pdf';

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <div
      className='fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 pt-24'
      onClick={onClose}
    >
      {/* Simple floating modal - just the image */}
      <div className='relative' onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute -top-4 -right-4 z-20 w-14 h-14 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
          aria-label='Close resume modal'
        >
          <X size={24} className='text-gray-700' />
        </button>

        {/* Just the resume image - no containers, no padding, no white backgrounds */}
        <Image
          src='/resume.webp'
          alt='Haider Wain Resume'
          className='rounded-2xl shadow-2xl'
          style={{
            maxHeight: 'calc(100vh - 200px)', // Account for nav bar, padding, and buttons
            maxWidth: '90vw',
            width: 'auto',
            height: 'auto',
          }}
          onError={e => {
            const target = e.target as HTMLImageElement;
            target.src =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+';
          }}
          width={2550}
          height={3330}
          priority
        />

        {/* Action buttons - floating below the resume */}
        <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button
            onClick={handleDownload}
            className='group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-black rounded-xl font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-400/25 hover:scale-105'
          >
            <Download size={18} className='mr-2 group-hover:scale-110 transition-transform duration-300' />
            <span>Download PDF</span>
          </button>

          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center px-6 py-3 border-2 border-primary-400 text-primary-400 rounded-xl font-semibold hover:bg-primary-400 hover:text-black transition-all duration-300 hover:scale-105'
          >
            <Eye size={18} className='mr-2 group-hover:scale-110 transition-transform duration-300' />
            <span>Open in New Tab</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

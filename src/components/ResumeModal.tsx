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
    <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <div className='bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-800'>
          <h2 className='text-2xl font-bold text-white'>Resume</h2>
          <button onClick={onClose} className='text-gray-400 hover:text-white transition-colors'>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className='p-6 overflow-y-auto max-h-[calc(120vh-150px)]'>
          {/* Resume Image Preview */}
          <div className='flex justify-center mb-6'>
            <div className='bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full'>
              <Image
                src='/resume.webp'
                alt='Haider Wain Resume'
                className='w-full h-auto max-h-[750px] object-contain'
                onError={e => {
                  // Fallback if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+';
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 justify-center'>
            <button
              onClick={handleDownload}
              className='flex items-center space-x-2 px-6 py-3 bg-primary-400 text-black rounded-lg hover:bg-primary-500 transition-colors font-medium'
            >
              <Download size={20} />
              <span>Download PDF</span>
            </button>

            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center space-x-2 px-6 py-3 border border-primary-400 text-primary-400 rounded-lg hover:bg-primary-400 hover:text-black transition-colors font-medium'
            >
              <Eye size={20} />
              <span>Open PDF in New Tab</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

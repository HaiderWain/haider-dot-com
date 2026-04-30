'use client';

import { X, Download, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

const RESUME_PDF = '/resume.pdf';
/** Chrome’s PDF viewer: cleaner chrome; still scrolls for multi-page PDFs */
const PDF_EMBED = `${RESUME_PDF}#toolbar=0&navpanes=0`;

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [previewReady, setPreviewReady] = useState(false);

  useEffect(() => {
    if (isOpen) setPreviewReady(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch(RESUME_PDF);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Haider_Wain_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open(RESUME_PDF, '_blank');
    }
  };

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='resume-modal-title'
      className='fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 pt-24'
      onClick={onClose}
    >
      <div className='sr-only' id='resume-modal-title'>
        Resume preview
      </div>

      <div className='relative w-full max-w-[min(90vw,52rem)] flex flex-col' onClick={e => e.stopPropagation()}>
        <button
          type='button'
          onClick={onClose}
          className='absolute -top-4 -right-4 z-20 w-14 h-14 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
          aria-label='Close resume modal'
        >
          <X size={24} className='text-gray-700' />
        </button>

        <div
          className='relative w-full overflow-hidden rounded-2xl bg-neutral-200/80 shadow-2xl ring-1 ring-black/5'
          style={{
            height: 'min(75vh, calc(100vh - 14rem))',
            minHeight: 'min(24rem, 50vh)',
          }}
        >
          {!previewReady && (
            <div
              className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-neutral-100'
              aria-busy='true'
              aria-label='Loading resume preview'
            >
              <div className='h-9 w-9 rounded-full border-2 border-primary-400 border-t-transparent animate-spin' />
              <p className='text-sm text-neutral-600'>Loading preview…</p>
            </div>
          )}
          <iframe
            title='Haider Wain resume PDF preview'
            src={PDF_EMBED}
            className='absolute inset-0 h-full w-full border-0 bg-white transition-opacity duration-200'
            style={{ opacity: previewReady ? 1 : 0 }}
            onLoad={() => setPreviewReady(true)}
          />
        </div>

        <p className='mt-2 text-center text-xs text-white/70'>
          Scroll inside the preview to see all pages · Esc to close
        </p>

        <div className='mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button
            type='button'
            onClick={handleDownload}
            className='group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-black rounded-xl font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-400/25 hover:scale-105'
          >
            <Download size={18} className='mr-2 group-hover:scale-110 transition-transform duration-300' />
            <span>Download PDF</span>
          </button>

          <a
            href={RESUME_PDF}
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

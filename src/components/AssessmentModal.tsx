
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssessmentModal = ({ isOpen, onClose }: AssessmentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text font-bold text-center">
            Get Your Free <span className=' gradient-text'>Assessment</span>
          </DialogTitle>
        </DialogHeader>
        <div className="">
          <iframe 
            className="airtable-embed" 
            src="https://airtable.com/embed/appKwAk4uOWBeq2PC/pag2i0Jb1ap0GjdeI/form" 
            frameBorder="0" 
            width="100%" 
            height="533" 
            style={{ background: 'transparent', border: '1px solid #ccc' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssessmentModal;

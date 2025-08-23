import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import TestimonialsSection from '@/components/TestimonialsSection';

import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <Navigation onGetAssessment={()=>{}}/>
            <TestimonialsSection />
            <Footer onGetAssessment={() => {}}/>
        </div>
    );
};

export default Testimonials;